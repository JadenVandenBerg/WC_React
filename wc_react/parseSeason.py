import sys
import re
import csv
import os
import json
import urllib.parse
from collections import defaultdict, Counter


# ---------- PATH HANDLING ----------
def normalize_path(path):
    if path.startswith("file://"):
        path = urllib.parse.unquote(path.replace("file:///", ""))
    return os.path.normpath(path)


# ---------- PARSER ----------
def parse_file(filename):
    filename = normalize_path(filename)

    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    games = [g.strip() for g in content.split("------------------------") if g.strip()]

    results = defaultdict(lambda: {"wins": 0, "losses": 0, "draws": 0})
    piece_counts = defaultdict(lambda: defaultdict(int))
    total_points = defaultdict(float)
    games_played = defaultdict(int)
    total_turns = defaultdict(int)
    ending_types = Counter()

    matchups = defaultdict(lambda: defaultdict(lambda: {"wins": 0, "losses": 0, "draws": 0}))

    bot_game_points = []
    upset_wins = []
    game_lengths = []

    for game in games:
        lines = game.splitlines()

        match_line = next(l for l in lines if "vs" in l)
        match = re.search(r"(.+?) \(White\) vs \(Black\) (.+)", match_line)
        white = match.group(1).strip()
        black = match.group(2).strip()

        turn_line = next(l for l in lines if "The match took" in l)
        turns = int(re.search(r"(\d+)", turn_line).group(1))

        result_line = next(l for l in lines if "Won by" in l or "Draw" in l)

        total_turns[white] += turns
        total_turns[black] += turns

        bot_points_this_game = {}

        # Parse pieces
        for i, line in enumerate(lines):
            if line.endswith("pieces:"):
                bot_name = line.replace(" pieces:", "").strip()
                piece_line = lines[i + 1]

                pieces = re.findall(r"([A-Za-z0-9\-]+)\s*\((-?\d*\.?\d+)\)", piece_line)

                game_points = 0
                for piece, value in pieces:
                    value = float(value)
                    piece_counts[bot_name][piece] += 1
                    total_points[bot_name] += value
                    game_points += value

                bot_game_points.append((bot_name, game_points))
                bot_points_this_game[bot_name] = game_points

        # Determine winner
        if "White Won" in result_line:
            winner, loser = white, black
            results[white]["wins"] += 1
            results[black]["losses"] += 1
            matchups[white][black]["wins"] += 1
            matchups[black][white]["losses"] += 1

        elif "Black Won" in result_line:
            winner, loser = black, white
            results[black]["wins"] += 1
            results[white]["losses"] += 1
            matchups[black][white]["wins"] += 1
            matchups[white][black]["losses"] += 1

        else:
            winner, loser = "-", "-"
            results[white]["draws"] += 1
            results[black]["draws"] += 1
            matchups[white][black]["draws"] += 1
            matchups[black][white]["draws"] += 1

        # Ending type
        ending = result_line.split("by")[-1].strip() if "by" in result_line else "Draw"
        ending_types[ending] += 1

        games_played[white] += 1
        games_played[black] += 1

        game_lengths.append((f"{white} vs {black}", turns, winner, result_line))

        # Upset detection
        if winner != "-" and white in bot_points_this_game and black in bot_points_this_game:
            wp = bot_points_this_game[white]
            bp = bot_points_this_game[black]

            if winner == white and wp < bp:
                upset_wins.append((white, black, wp, bp, wp - bp))
            elif winner == black and bp < wp:
                upset_wins.append((black, white, bp, wp, bp - wp))

    return (results, piece_counts, total_points, games_played,
            total_turns, ending_types, bot_game_points,
            matchups, upset_wins, game_lengths)


# ---------- COMPUTATIONS ----------
def compute_bot_table(results, total_points, games_played):
    table = []
    for bot in results:
        w, d, l = results[bot].values()
        avg = total_points[bot] / games_played[bot]
        table.append((bot, w, d, l, avg))

    return sorted(table, key=lambda x: (-x[1], -x[2], x[4]))


def compute_turn_table(total_turns, games_played):
    return sorted([(b, total_turns[b] / games_played[b]) for b in total_turns],
                  key=lambda x: -x[1])


def compute_top_pieces(piece_counts):
    c = Counter()
    for b in piece_counts:
        c.update(piece_counts[b])
    return c.most_common(10)


def compute_extreme_games(bot_game_points):
    s = sorted(bot_game_points, key=lambda x: x[1])
    return s[-10:][::-1], s[:10]


def compute_upsets(upset_wins):
    return sorted(upset_wins, key=lambda x: x[4])[:10]


def compute_game_lengths(game_lengths):
    s = sorted(game_lengths, key=lambda x: x[1])
    return s[-10:][::-1], s[:10]


# ---------- EXPORTS ----------
def export_csvs(bot_table, top_pieces, turn_table,
                highest, lowest, upsets, longest, shortest):

    def write(name, header, rows):
        with open(name, "w", newline="") as f:
            writer = csv.writer(f)
            writer.writerow(header)
            writer.writerows(rows)

    write("bot_rankings.csv", ["Bot","Wins","Draws","Losses","AvgPoints"], bot_table)
    write("top_pieces.csv", ["Piece","Count"], top_pieces)
    write("turns.csv", ["Bot","AvgTurns"], turn_table)
    write("highest_games.csv", ["Bot","Points"], highest)
    write("lowest_games.csv", ["Bot","Points"], lowest)
    write("upsets.csv", ["Winner","Loser","WinnerPts","LoserPts","Diff"], upsets)
    write("longest_games.csv", ["Match","Turns","Winner","Result"], longest)
    write("shortest_games.csv", ["Match","Turns","Winner","Result"], shortest)


def export_json(bot_table, top_pieces, turn_table,
                highest, lowest, upsets, longest, shortest, matchups):

    data = {
        "bot_rankings": [
            {"bot": b, "wins": w, "draws": d, "losses": l, "avg_points": avg}
            for b, w, d, l, avg in bot_table
        ],
        "top_pieces": [{"piece": p, "count": c} for p, c in top_pieces],
        "turns": [{"bot": b, "avg_turns": t} for b, t in turn_table],
        "highest_games": [{"bot": b, "points": p} for b, p in highest],
        "lowest_games": [{"bot": b, "points": p} for b, p in lowest],
        "upsets": [
            {"winner": w, "loser": l, "winner_pts": wp, "loser_pts": lp, "diff": d}
            for w, l, wp, lp, d in upsets
        ],
        "longest_games": [
            {"match": m, "turns": t, "winner": w, "result": r}
            for m, t, w, r in longest
        ],
        "shortest_games": [
            {"match": m, "turns": t, "winner": w, "result": r}
            for m, t, w, r in shortest
        ],
        "matchups": matchups
    }

    with open("stats.json", "w") as f:
        json.dump(data, f, indent=2)


# ---------- MAIN ----------
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python script.py <file>")
        sys.exit(1)

    data = parse_file(sys.argv[1])

    (results, piece_counts, total_points, games_played,
     total_turns, ending_types, bot_game_points,
     matchups, upset_wins, game_lengths) = data

    bot_table = compute_bot_table(results, total_points, games_played)
    turn_table = compute_turn_table(total_turns, games_played)
    top_pieces = compute_top_pieces(piece_counts)
    highest, lowest = compute_extreme_games(bot_game_points)
    upsets = compute_upsets(upset_wins)
    longest, shortest = compute_game_lengths(game_lengths)

    export_csvs(bot_table, top_pieces, turn_table,
                highest, lowest, upsets, longest, shortest)

    export_json(bot_table, top_pieces, turn_table,
                highest, lowest, upsets, longest, shortest, matchups)

    print("✅ CSV + JSON export complete (stats.json ready for React)")