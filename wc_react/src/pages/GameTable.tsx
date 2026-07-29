import '../App.css'
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import PageButton from '../Button';

function GameTable() {
	const [games, setGames] = useState([]);

	const [rawData, setRawData] = useState([]);

	const [sort, setSort] = useState({
	  column: null,
	  direction: "asc",
	});

	const [filters, setFilters] = useState({
	  bot: "",
	  result: "",
	  season: "",
	});

	useEffect(() => {
	  const fetchAllData = async () => {
	    const fileCount = 10;

	    const allGames = [];

	    for (let id = 1; id <= fileCount; id++) {
	      const res = await fetch(`/matchData/S${id}.txt`, {
	        cache: "no-store",
	      });

	      if (!res.ok) continue;

	      const text = await res.text();

	      const games = text
	        .split("------------------------")
	        .map(game => `${game.trim()}\nSeason: S${id}`)
	        .filter(game => game.trim() !== `Season: S${id}`);

	      allGames.push(...games);
	    }

	    setRawData(allGames);
	  };

	  fetchAllData().catch(console.error);
	}, []);

	const parsedData = useMemo(() => {
	  let data = [];

	  for (let i = 0; i < rawData.length; i++) {
	    if (rawData[i].includes("doctype")) {
	      continue;
	    }

	    const splitData = rawData[i].split("\n");

	    let game = {};

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
	      game.upset = whitePoints - blackPoints;
	      game.result = game.result.replace("White", "(" + game.white + ") White");
	    } else if (game.result.includes("Black Won")) {
	      game.upset = blackPoints - whitePoints;
	      game.result = game.result.replace("Black", "(" + game.black + ") Black");
	    } else {
	      game.upset = "-";
	    }

	    data.push(game);
	  }

	  // Filters
	  data = data.filter((game) => {
	    const playerMatch =
	      !filters.bot ||
	      game.white.toLowerCase().includes(filters.bot.toLowerCase()) ||
	      game.black.toLowerCase().includes(filters.bot.toLowerCase());

	    const resultMatch =
	      !filters.result ||
	      game.result.toLowerCase().includes(filters.result.toLowerCase());

	    const seasonMatch =
	      !filters.season ||
	      game.season.toLowerCase().includes(filters.season.toLowerCase());

	    return playerMatch && resultMatch && seasonMatch;
	  });

	  // Sorting
	  if (sort.column) {
	    data.sort((a, b) => {
	      if (sort.column === "upset") {
	        const aIsDraw = a.upset === "-";
	        const bIsDraw = b.upset === "-";

	        if (aIsDraw && !bIsDraw) return 1;
	        if (!aIsDraw && bIsDraw) return -1;
	        if (aIsDraw && bIsDraw) return 0;
	      }

	      const aVal = a[sort.column];
	      const bVal = b[sort.column];

	      return sort.direction === "asc" ? aVal - bVal : bVal - aVal;
	    });
	  }

	  return data;
	}, [rawData, filters, sort]);

	const toggleSort = (column) => {
	  setSort((prev) => ({
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
			<h1>Game Database</h1>
			<table className="detailsTable gameTable">
            <thead>
              <tr>
                <th>#</th>
                <th>White</th>
                <th>Black</th>
                <th>Result</th>
                <th>Season</th>
                <th
				  style={{ cursor: "pointer" }}
				  onClick={() => toggleSort("length")}
				>
				  Length {sort.column === "length" ? (sort.direction === "asc" ? "▲" : "▼") : ""}
				</th>
                <th
				  style={{ cursor: "pointer" }}
				  onClick={() => toggleSort("whitePoints")}
				>
				  WP {sort.column === "whitePoints" ? (sort.direction === "asc" ? "▲" : "▼") : ""}
				</th>
                <th
				  style={{ cursor: "pointer" }}
				  onClick={() => toggleSort("blackPoints")}
				>
				  BP {sort.column === "blackPoints" ? (sort.direction === "asc" ? "▲" : "▼") : ""}
				</th>
                <th
				  style={{ cursor: "pointer" }}
				  onClick={() => toggleSort("upset")}
				>
				  Upset {sort.column === "upset" ? (sort.direction === "asc" ? "▲" : "▼") : ""}
				</th>
              </tr>
            </thead>
            <tbody>
            	<tr>
				  <td>Filter</td>

				  <td colSpan={2}>
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
				      value={filters.result}
					  onChange={(e) =>
					    setFilters((f) => ({ ...f, result: e.target.value }))
					  }
				      style={{ width: "100%" }}
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
				{parsedData?.map((game, index) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{game.white}</td>
						<td>{game.black}</td>
						<td>{game.result}</td>
						<td>{game.season}</td>
						<td>{game.length}</td>
						<td>{game.whitePoints}</td>
						<td>{game.blackPoints}</td>
						<td>{game.upset}</td>
					</tr>
				))}
            </tbody>
          </table>
		</>
	);
}

export default GameTable;