import sys
from parseSeason import normalize_path
from dataclasses import dataclass, field
import json
import os

@dataclass
class Bot:
    name: str

    games: int = 0
    wins: int = 0
    draws: int = 0
    losses: int = 0

    whiteGames: int = 0
    blackGames: int = 0

    whiteWins: int = 0
    blackWins: int = 0

    totalTurns: int = 0

    totalStartingPoints: float = 0
    totalPenalties: int = 0

    winReasons: dict = field(default_factory=dict)
    lossReasons: dict = field(default_factory=dict)
    drawReasons: dict = field(default_factory=dict)

    piecesPlayed: dict = field(default_factory=dict)

bots = {}

def get_bot(name):
    if name not in bots:
        bots[name] = Bot(name)
    return bots[name]

def parse_file(filename):
    filename = normalize_path(filename)

    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    games = [g.strip() for g in content.split("------------------------") if g.strip()]

    parsed_games = []

    for game in games:
        parsed_games.append(parse_game(game))

    return parsed_games

def parse_bots(games):
    bots = {}

    def get_bot(name):
        if name not in bots:
            bots[name] = Bot(name)
        return bots[name]

    for game in games:
        white = get_bot(game["white"])
        black = get_bot(game["black"])

        # Games played
        white.games += 1
        black.games += 1

        white.whiteGames += 1
        black.blackGames += 1

        # Turns
        white.totalTurns += game["matchLength"]
        black.totalTurns += game["matchLength"]

        # Starting points
        white.totalStartingPoints += game["whiteStartingPoints"]
        black.totalStartingPoints += game["blackStartingPoints"]

        # Penalties
        white.totalPenalties += game["whitePenalties"]
        black.totalPenalties += game["blackPenalties"]

        # Pieces
        for piece in game["pieces"]:
            white.piecesPlayed[piece] = white.piecesPlayed.get(piece, 0) + 1
            black.piecesPlayed[piece] = black.piecesPlayed.get(piece, 0) + 1

        # Result
        reason = game["winnerReason"]

        if "White" in game["winnerColor"]:
            white.wins += 1
            white.whiteWins += 1
            black.losses += 1

            white.winReasons[reason] = white.winReasons.get(reason, 0) + 1
            black.lossReasons[reason] = black.lossReasons.get(reason, 0) + 1

        elif "Black" in game["winnerColor"]:
            black.wins += 1
            black.blackWins += 1
            white.losses += 1

            black.winReasons[reason] = black.winReasons.get(reason, 0) + 1
            white.lossReasons[reason] = white.lossReasons.get(reason, 0) + 1

        elif game["winnerColor"] == "Draw":
            white.draws += 1
            black.draws += 1

            black.drawReasons[reason] = black.drawReasons.get(reason, 0) + 1
            white.drawReasons[reason] = white.drawReasons.get(reason, 0) + 1

    return bots

def print_bots(bots):
    for bot in bots.values():
        print("=" * 30)
        print("Bot:", bot.name)
        print("Games:", bot.games)
        print("Record:", f"{bot.wins}-{bot.losses}-{bot.draws}")
        print("White Games:", bot.whiteGames)
        print("Black Games:", bot.blackGames)
        print("White Wins:", bot.whiteWins)
        print("Black Wins:", bot.blackWins)
        print("Total Turns:", bot.totalTurns)
        print("Average Turns:", round(bot.totalTurns / bot.games, 2) if bot.games else 0)
        print("Total Starting Points:", bot.totalStartingPoints)
        print("Average Starting Points:", round(bot.totalStartingPoints / bot.games, 2) if bot.games else 0)
        print("Total Penalties:", bot.totalPenalties)
        print("Win Reasons:", bot.winReasons)
        print("Draw Reasons:", bot.drawReasons)
        print("Loss Reasons:", bot.lossReasons)
        print("Pieces Played:")

        for piece, count in bot.piecesPlayed.items():
            print(f"  {piece}: {count}")


def write_bots_json(bots):
    input_file = sys.argv[1]
    output_file = os.path.splitext(input_file)[0] + ".json"

    data = {}

    for bot in bots.values():
        data[bot.name] = {
            "games": bot.games,
            "record": {
                "wins": bot.wins,
                "losses": bot.losses,
                "draws": bot.draws,
            },
            "whiteGames": bot.whiteGames,
            "blackGames": bot.blackGames,
            "whiteWins": bot.whiteWins,
            "blackWins": bot.blackWins,
            "totalTurns": bot.totalTurns,
            "averageTurns": round(bot.totalTurns / bot.games, 2) if bot.games else 0,
            "totalStartingPoints": bot.totalStartingPoints,
            "averageStartingPoints": round(bot.totalStartingPoints / bot.games, 2) if bot.games else 0,
            "totalPenalties": bot.totalPenalties,
            "winReasons": bot.winReasons,
            "lossReasons": bot.lossReasons,
            "drawReasons": bot.drawReasons,
            "piecesPlayed": bot.piecesPlayed,
        }

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)

    print(f"Wrote bot statistics to {output_file}")

def parse_game(game):
    lines = game.split('\n')

    white = lines[1].split('(White)')[0].strip()
    black = lines[1].split('(Black)')[1].strip()

    winnerColor = lines[2].split('by')[0].strip()
    winnerReason = lines[2].split('by')[1].strip()

    matchLength = int(lines[3].split('took')[1].split('turns')[0].strip())

    whitePenalties = int(lines[4].split(':')[2].split(',')[0].strip())
    blackPenalties = int(lines[4].split(':')[3].strip())

    whiteStartingPoints = float(lines[5].split('started with')[1].split('pts')[0].strip())
    blackStartingPoints = float(lines[6].split('started with')[1].split('pts')[0].strip())

    pieces = []

    for piece in lines[8].split(')'):
        piece = piece.split('(')[0].strip()
        if piece:
            pieces.append(piece)

    return {
        "white": white,
        "black": black,
        "winnerColor": winnerColor,
        "winnerReason": winnerReason,
        "matchLength": matchLength,
        "whitePenalties": whitePenalties,
        "blackPenalties": blackPenalties,
        "whiteStartingPoints": whiteStartingPoints,
        "blackStartingPoints": blackStartingPoints,
        "pieces": pieces,
    }

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python script.py <file>")
        sys.exit(1)

    data = parse_file(sys.argv[1])

    bots = parse_bots(data)

    write_bots_json(bots)