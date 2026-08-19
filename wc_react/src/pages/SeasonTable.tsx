import '../App.css'
import { useEffect, useState, useMemo } from "react";
import PageButton from '../Button';

interface BotData {
    name: string;
    season: string;
    length: number;
    points: number;
	wins: number;
	draws: number;
	losses: number;
	score: number;
}

interface GameData {
    white: string;
    black: string;
    length: number;
    result: string;
    season: string;
    whitePoints: number;
    blackPoints: number;
    upset: string;
}

type SortColumn = "length" | "points" | "record" | "score" | null;

interface SortState {
    column: SortColumn;
    direction: "asc" | "desc";
}


function SeasonTable() {
	const [seasonData, setSeasonData] = useState<BotData[]>([]);

	const [sort, setSort] = useState<SortState>({
	  column: null,
	  direction: "asc",
	});

	const [filters, setFilters] = useState({
	  bot: "",
	  season: "",
	});

	useEffect(() => {
	  const fetchAllData = async () => {
	    const fileCount = 10;

	    for (let id = 1; id <= fileCount; id++) {
	      const res = await fetch(`/matchData/S${id}.txt`, {
	        cache: "no-store",
	      });

	      const seasonGames = [];

	      if (!res.ok) continue;

	      const text = await res.text();

	      const games = text
	        .split("------------------------")
	        .map(game => `${game.trim()}\nSeason: S${id}`)
	        .filter(game => game.trim() !== `Season: S${id}`);

	      seasonGames.push(...games);

	      const seasonName = "S" + id;

	      parseGames(seasonGames, seasonName);
	    }
	  };

	  fetchAllData().catch(console.error);
	}, []);

	function parseGames(seasonGames: string[], season: string) {
    	const data: Record<string, BotData> = {};

	  for (let i = 0; i < seasonGames.length; i++) {
	    if (seasonGames[i].includes("doctype")) {
	      continue;
	    }

	    const splitData = seasonGames[i].split("\n");

	    const game: GameData = {
		    white: "",
		    black: "",
		    length: 0,
		    result: "",
		    season: "",
		    whitePoints: 0,
		    blackPoints: 0,
		    upset: "",
		};

	    game.white = splitData[1].split("(")[0].trim();
	    game.black = splitData[1].split("(Black)")[1].trim();

	    game.result = splitData[2].trim();
	    game.length = parseInt(
	      splitData[3].split("took")[1].split("turns")[0].trim(),
	      10
	    );

	    game.season = splitData[11].split("Season:")[1].trim();

	    const whitePoints = parseFloat(
	      splitData[5].split("started with")[1].split("pts")[0].trim()
	    );

	    const blackPoints = parseFloat(
	      splitData[6].split("started with")[1].split("pts")[0].trim()
	    );

	    game.whitePoints = whitePoints;
	    game.blackPoints = blackPoints;

	    if (game.result.includes("White Won")) {
	      game.upset = (whitePoints - blackPoints).toString();
	      game.result = game.result.replace("White", "(" + game.white + ") White");
	    } else if (game.result.includes("Black Won")) {
	      game.upset = (blackPoints - whitePoints).toString();
	      game.result = game.result.replace("Black", "(" + game.black + ") Black");
	    } else {
	      game.upset = "-";
	    }

	    if (game.white in data) {
	    	data[game.white].length += game.length;
	    	data[game.white].points += game.whitePoints;

			if (game.result.includes("White")) {
				data[game.white].wins += 1;
				data[game.white].score += 1;
			}
			else if (game.result.includes("Black")) {
				data[game.white].losses += 1;
			}
			else {
				
				data[game.white].draws += 1;
				data[game.white].score += 0.5;
			}
	    }
	    else {
	    	data[game.white] = {
	    		"length": game.length,
	    		"points": game.whitePoints,
	    		"season": season,
	    		"name": game.white,
				"wins": 0,
				"draws": 0,
				"losses": 0,
				"score": 0,
	    	}

			if (game.result.includes("White")) {
				data[game.white].wins = 1;
				data[game.white].score += 1;
			}
			else if (game.result.includes("Black")) {
				data[game.white].losses = 1;
			}
			else {
				
				data[game.white].draws = 1;
				data[game.white].score += 0.5;
			}
	    }

	    if (game.black in data) {
	    	data[game.black].length += game.length;
	    	data[game.black].points += game.blackPoints;

			if (game.result.includes("Black")) {
				data[game.black].wins += 1;
				data[game.black].score += 1;
			}
			else if (game.result.includes("White")) {
				data[game.black].losses += 1;
			}
			else {
				
				data[game.black].draws += 1;
				data[game.black].score += 0.5;
			}
	    }
	    else {
	    	data[game.black] = {
	    		"length": game.length,
	    		"points": game.blackPoints,
	    		"season": season,
	    		"name": game.black,
				"wins": 0,
				"draws": 0,
				"losses": 0,
				"score": 0,
	    	}

			if (game.result.includes("Black")) {
				data[game.black].wins = 1;
				data[game.black].score += 1;
			}
			else if (game.result.includes("White")) {
				data[game.black].losses = 1;
			}
			else {
				
				data[game.black].draws = 1;
				data[game.black].score += 0.5;
			}
	    }
	  }

  		setSeasonData(prev => {
		    const combined = [...prev, ...Object.values(data)];

		    return combined.filter(
		        (bot, index, array) =>
		            index === array.findIndex(
		                b => b.name + b.season === bot.name + bot.season
		            )
		    );
		});

	}


	const sortedSeasonData = useMemo(() => {
	    const filtered = seasonData.filter(bot => {
	        const matchesBot =
	            filters.bot === "" ||
	            bot.name.toLowerCase().includes(filters.bot.toLowerCase());

	        const matchesSeason =
	            filters.season === "" ||
	            bot.season.toLowerCase().includes(filters.season.toLowerCase());

	        return matchesBot && matchesSeason;
	    });

	    const column = sort.column;

	    if (!column) {
	        return filtered;
	    }

	    return [...filtered].sort((a, b) => {
			let comparison = 0;

			if (column === "record") {
				if (a.wins !== b.wins) {
					comparison = a.wins - b.wins;
				}
				else if (a.draws !== b.draws) {
					comparison = a.draws - b.draws;
				}
				else {
					comparison = b.losses - a.losses;
				}
			}
			else {
				const aValue = a[column];
				const bValue = b[column];

				if (aValue === bValue) return 0;

				comparison = aValue > bValue ? 1 : -1;
			}

			return sort.direction === "asc"
				? comparison
				: -comparison;
		});
	}, [seasonData, filters, sort]);


	const toggleSort = (column: "length" | "points" | "record" | "score") => {
	    setSort(prev => ({
	        column,
	        direction:
	            prev.column === column && prev.direction === "asc"
	                ? "desc"
	                : "asc",
	    }));
	};


	return (
		<>
      		<PageButton/>
			<h2>Season Database</h2>
			<table className="detailsTable gameTable">
				<thead>
					<tr>
						<th>#</th>
						<th>Bot</th>
						<th>Season</th>
						<th
							style={{ cursor: "pointer" }}
							onClick={() => toggleSort("length")}
						>
							Length {sort.column === "length" ? (sort.direction === "asc" ? "▲" : "▼") : ""}
						</th>
						<th
							style={{ cursor: "pointer" }}
							onClick={() => toggleSort("points")}
						>
							Points {sort.column === "points" ? (sort.direction === "asc" ? "▲" : "▼") : ""}
						</th>
						<th
							style={{ cursor: "pointer" }}
							onClick={() => toggleSort("record")}
						>
							Record {sort.column === "record" ? (sort.direction === "asc" ? "▲" : "▼") : ""}
						</th>
						<th
							style={{ cursor: "pointer" }}
							onClick={() => toggleSort("score")}
						>
							Score {sort.column === "score" ? (sort.direction === "asc" ? "▲" : "▼") : ""}
						</th>
					</tr>
            	</thead>
            	<tbody>
            		<tr>
				  	<td>Filter</td>

				  	<td>
				    <input
				      type="text"
				      style={{ width: "100%" }}
				      value={filters.bot}
					  onChange={(e) =>
					    setFilters((f) => ({ ...f, bot: e.target.value }))
					  }
			    	/>
				 	</td>
					<td>
						<input
							type="text"
							value={filters.season}
							onChange={(e) =>
							setFilters((f) => ({ ...f, season: e.target.value }))
							}
							style={{ width: "100%" }}
						/>
					</td>
				  <td></td>
				  <td></td>
				  <td></td>
				  <td></td>
				</tr>
            		{sortedSeasonData.map((bot, index) => {
            			return(
            				<tr key={bot.name + bot.season}>
	            				<td>{index + 1}</td>
	            				<td>{bot.name}</td>
	            				<td>{bot.season}</td>
	            				<td>{(bot.length / 7).toFixed(2)}</td>
	            				<td>{(bot.points / 7).toFixed(2)}</td>
	            				<td>{bot.wins + "-" + bot.draws + "-" + bot.losses}</td>
	            				<td>{bot.score}</td>
	            			</tr>
            			);
            		})}
            	</tbody>
			</table>
		</>
	);
}

export default SeasonTable;