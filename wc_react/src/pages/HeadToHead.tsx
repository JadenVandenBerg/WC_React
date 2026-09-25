import '../App.css'
import { useEffect, useState, useMemo } from "react";
import PageButton from '../Button';

function HeadToHead() {

	const [rawData, setRawData] = useState<string[]>([]);
	const [officialData, setOfficialData] = useState<any[]>([]);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		const fetchOfficialData = async () => {
			const response = await fetch('/officialData.json');
			const data = await response.json();
			setOfficialData(data);
		};

		fetchOfficialData();
	}, []);

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
	  let data: Record<string, any> = {};

	  for (let i = 0; i < rawData.length; i++) {
	    if (rawData[i].includes("doctype")) {
	      continue;
	    }

	    const splitData = rawData[i].split("\n");

	    let game = {
			"white": "",
			"black": "",
			"result": "",
			"whitePoints": 0,
			"blackPoints": 0
		};

	    game.white = splitData[1].split("(")[0].trim();
	    game.black = splitData[1].split("(Black)")[1].trim();

	    game.result = splitData[2].trim();

	    game.whitePoints = 0;
	    game.blackPoints = 0;

	    if (game.result.includes("White Won")) {
		  game.whitePoints = 1;
	    } else if (game.result.includes("Black Won")) {
		  game.blackPoints = 1;
	    } else {
		  game.whitePoints = 0.5;
		  game.blackPoints = 0.5;
	    }

		let key = game.white + "|" + game.black;
		let h2h = data[key] || undefined;

		if (!Object.hasOwn(data, key)) {
			key = game.black + "|" + game.white;
			h2h = data[key] || undefined;
		}

		if (h2h == undefined) {
			h2h = {
				white: game.white,
				black: game.black,
				whitePoints: game.whitePoints,
				blackPoints: game.blackPoints,
				totalH2H: 1,
			}
		}
		else {
			if (game.white === h2h.white) {
				h2h.whitePoints += game.whitePoints;
				h2h.blackPoints += game.blackPoints;
			}
			else {
				h2h.whitePoints += game.blackPoints;
				h2h.blackPoints += game.whitePoints;
			}

			h2h.totalH2H += 1;
		}

		console.log(game);
		console.log(h2h);
		
	    data[key] = h2h;
	  }

	  return data;
	}, [rawData]);

	function mapName(name: string) {

		if (name == "Idiot") {
			return "Idiot Bot";
		}
		else if (name == "G2EBot") {
			return "G2 E-Bot";
		}

		return name;
	}

	return (
		<>
      		<PageButton/>
			<h2>Head to Head</h2>
			<input
				type="text"
				className="h2hFilter"
				placeholder="Search bots..."
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			/>
			<div className='divisionContainer'>
				{
					Object.values(parsedData).filter((h2h: any) =>
						h2h.white.toLowerCase().includes(filter.toLowerCase()) ||
						h2h.black.toLowerCase().includes(filter.toLowerCase())
					).sort((a: any, b: any) => b.totalH2H - a.totalH2H).map((h2h: any) => {
						const filterLower = filter.toLowerCase();

						const whiteMatches = h2h.white.toLowerCase().includes(filterLower);
						const blackMatches = h2h.black.toLowerCase().includes(filterLower);

						const swap = filter !== "" && blackMatches && !whiteMatches;

						const white = swap ? h2h.black : h2h.white;
						const black = swap ? h2h.white : h2h.black;

						const whitePoints = swap ? h2h.blackPoints : h2h.whitePoints;
						const blackPoints = swap ? h2h.whitePoints : h2h.blackPoints;

						const whiteBot = officialData.find((bot: any) => bot.Name === mapName(white));

						const blackBot = officialData.find((bot: any) => bot.Name === mapName(black));

						return (
							<div className='h2hContainer botRow'>
								<img
									src={whiteBot?.Profile}
									alt={white}
									className="botProfileSmall"
								/>

								<div className="matchup">
									<div className="whiteName">{white}</div>

									<div className="score">
										{whitePoints} - {blackPoints}
									</div>

									<div className="blackName">{black}</div>
								</div>

								<img
									src={blackBot?.Profile}
									alt={black}
									className="botProfileSmall rightProfile"
								/>
							</div>
						);
					})
				}
			</div>
		</>
	);
}

export default HeadToHead;