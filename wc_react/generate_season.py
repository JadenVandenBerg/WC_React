import argparse
import json
import re
from html import unescape
from pathlib import Path


def clean_cell(value):
    """Remove JSX/HTML tags and decode entities from a table cell."""
    value = re.sub(r"<img\b[^>]*>", "", value, flags=re.IGNORECASE)
    value = re.sub(r"<[^>]+>", "", value)
    return unescape(value).strip()


def parse_previous_season(path):
    """
    Read the previous season's generated TSX page.

    The first number in each {current - previous} stat expression is the
    cumulative total at the end of that season. The first number passed to
    formatPositions is the bot's position in that season.
    """
    source = Path(path).read_text(encoding="utf-8")
    previous = {}

    rows = re.findall(r"<tr\b[^>]*>(.*?)</tr>", source, flags=re.IGNORECASE | re.DOTALL)

    for row in rows:
        # Skip the table header.
        if "<th" in row:
            continue

        cells = re.findall(r"<td\b[^>]*>(.*?)</td>", row, flags=re.IGNORECASE | re.DOTALL)
        if len(cells) < 6:
            continue

        position_text = clean_cell(cells[0])

        # A bot marked "New" has an extra literal <td> before its name.
        # Its row therefore has: position, New, name, image, Elo.
        was_new = bool(re.search(r"<td\b[^>]*>\s*New\s*</td>", row, flags=re.IGNORECASE))
        name_index = 2 if was_new else 1
        elo_index = 4 if was_new else 3
        name = clean_cell(cells[name_index]) if len(cells) > name_index else ""

        if not name or (not position_text.isdigit() and not was_new):
            continue

        # A bot marked "New" has no numeric position to compare against.
        position = int(position_text) if position_text.isdigit() else None

        elo_text = clean_cell(cells[elo_index]) if len(cells) > elo_index else ""
        try:
            elo = float(elo_text)
        except ValueError:
            continue

        # The previous season's cumulative totals are the first operands
        # in the Wins, Draws and Losses expressions.
        stat_values = re.findall(r"\{\s*(-?\d+)\s*-\s*(-?\d+)\s*\}", row)
        if len(stat_values) < 3:
            continue

        previous[name] = {
            "Position": position,
            "Elo": elo,
            "Wins": int(stat_values[0][0]),
            "Draws": int(stat_values[1][0]),
            "Losses": int(stat_values[2][0]),
        }

    if not previous:
        raise ValueError(
            f"No bot rows could be read from {path}. "
            "Make sure it is the previous season's generated TSX page."
        )

    return previous


def format_number(value):
    """Avoid output such as 12.0 when a value is a whole number."""
    if isinstance(value, float) and value.is_integer():
        return str(int(value))
    return str(value)


def generate_row(bot, position, position_for_change, previous):
    name = bot["Name"]
    elo = float(bot["Elo"])
    wins = int(bot["WinsTotal"])
    draws = int(bot["DrawsTotal"])
    losses = int(bot["LossesTotal"])

    profile = str(bot.get("Profile", "")).replace("\\", "/")
    if profile.startswith("/"):
        image_src = profile
    elif profile.startswith("img/"):
        image_src = "/" + profile
    else:
        image_src = "/img/" + profile

    alt = Path(profile).stem if profile else name.replace(" ", "")
    safe_name = name.replace("{", "&#123;").replace("}", "&#125;")
    safe_alt = alt.replace('"', "&quot;")
    safe_src = image_src.replace('"', "&quot;")

    lines = ["          <tr>", f"            <td>{position}</td>"]

    if previous is None:
        # New bots do not receive a position-change calculation.
        lines.append("            <td className='yellow'>New</td>")
        old_elo = 1000
        old_wins = 0
        old_draws = 0
        old_losses = 0
    else:
        old_elo = previous["Elo"]
        old_wins = previous["Wins"]
        old_draws = previous["Draws"]
        old_losses = previous["Losses"]
        if previous["Position"] is None:
            lines.append("            <td className='yellow'>—</td>")
        else:
            lines.append(f"            {{formatPositions({position_for_change}, {previous['Position']})}}")

    lines.extend([
        f"            <td>{safe_name}</td>",
        f'            <td><img className="botImg" src="{safe_src}" alt="{safe_alt}" /></td>',
        f"            <td>{format_number(elo)}</td>",
        f"            {{formatEloGain({format_number(elo)}, {format_number(old_elo)})}}",
        f"            <td>{{{wins} - {old_wins}}}</td>",
        f"            <td>{{{draws} - {old_draws}}}</td>",
        f"            <td>{{{losses} - {old_losses}}}</td>",
        "          </tr>",
    ])

    return "\n".join(lines)


def generate_season_page(current_data_path, previous_page_path, season_number, output_path):
    current_data = json.loads(Path(current_data_path).read_text(encoding="utf-8"))
    previous_data = parse_previous_season(previous_page_path)

    # Sort by Elo descending. Python's sort is stable, so ties retain the
    # order in officialData.json.
    current_data.sort(key=lambda bot: float(bot["Elo"]), reverse=True)

    page = [
        "import '../App.css'",
        "import PageButton from '../Button';",
        "",
        "function formatPositions(currentPos: number, lastSeasonPos: number) {",
        "  let color: string = 'yellow';",
        "  if (lastSeasonPos - currentPos > 0) {",
        "    color = 'green';",
        "  }",
        "  else if (currentPos - lastSeasonPos > 0) {",
        "    color = 'red';",
        "  }",
        "  return (",
        "    <td className={color}>{color == 'green' ? '+' : ''}{lastSeasonPos - currentPos}</td>",
        "  );",
        "}",
        "",
        "function formatEloGain(currentElo: number, lastSeasonElo: number) {",
        "  let color: string = 'yellow';",
        "  if (lastSeasonElo - currentElo < 0) {",
        "    color = 'green';",
        "  }",
        "  else if (currentElo - lastSeasonElo < 0) {",
        "    color = 'red';",
        "  }",
        "  return (",
        "    <td className={color}>{color == 'green' ? '+' : ''}{currentElo - lastSeasonElo}</td>",
        "  );",
        "}",
        "",
        f"function Season{season_number}() {{",
        "",
        "  return (",
        "    <>",
        "      <PageButton/>",
        f"      <h2>Season {season_number}</h2>",
        '      <table id="seasonTable">',
        "        <tbody>",
        "          <tr>",
        "            <th>#</th>",
        "            <th># +/-</th>",
        "            <th>Bot</th>",
        "            <th>Profile</th>",
        "            <th>Elo</th>",
        "            <th>+/-</th>",
        "            <th>Wins</th>",
        "            <th>Draws</th>",
        "            <th>Losses</th>",
        "          </tr>",
    ]

    returning_position = 0
    for position, bot in enumerate(current_data, start=1):
        previous = previous_data.get(bot["Name"])
        if previous is not None:
            returning_position += 1
            position_for_change = returning_position
        else:
            position_for_change = None
        page.append(generate_row(bot, position, position_for_change, previous))

    page.extend([
        "        </tbody>",
        "      </table>",
        "    </>",
        "  );",
        "}",
        "",
        f"export default Season{season_number};",
        "",
    ])

    Path(output_path).write_text("\n".join(page), encoding="utf-8")
    print(f"Generated {output_path} with {len(current_data)} bots.")
    print(f"Matched {sum(1 for bot in current_data if bot['Name'] in previous_data)} returning bots.")
    print(f"Marked {sum(1 for bot in current_data if bot['Name'] not in previous_data)} bots as new.")


def main():
    parser = argparse.ArgumentParser(
        description="Generate a React season results page from officialData.json and the previous season TSX."
    )
    parser.add_argument("--current", default="public/officialData.json",
                        help="Path to the current public/officialData.json file.")
    parser.add_argument("--previous", required=True,
                        help="Path to the previous season's TSX page, e.g. Season7.tsx.")
    parser.add_argument("--season", type=int, required=True,
                        help="Season number to generate, e.g. 8.")
    parser.add_argument("--output", default=None,
                        help="Output TSX path. Defaults to Season<number>.tsx.")
    args = parser.parse_args()

    output_path = args.output or f"Season{args.season}.tsx"
    generate_season_page(args.current, args.previous, args.season, output_path)


if __name__ == "__main__":
    main()
