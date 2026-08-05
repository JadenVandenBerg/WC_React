import '../App.css'
import { useEffect, useMemo, useState } from "react";
import PageButton from '../Button'

interface Bot {
	name: string;
	profile: string;
	creator: string;
	totalPoints: number;
	elo: number;
	WCC?: number;
	NCC?: number;
	ACC?: number;
	LCC?: number;
	FCC?: number;
	WCCElo?: number;
	NCCElo?: number;
	ACCElo?: number;
	LCCElo?: number;
	FCCElo?: number;
	Id?: string | number;
}

function TotalRanking() {
	const [official] = useState("/officialData.json");
	const [ncc] = useState("/nccData.json");
	const [acc] = useState("/accData.json");
	const [lcc] = useState("/lccData.json");
	const [fcc] = useState("/fccData.json");

	const [sortBy, setSortBy] = useState<string>("Points");

	const [filterCreator, setFilterCreator] = useState("");
	const [filterCompeted, setFilterCompeted] = useState<number>();

	const [totalData, setTotalData] = useState<Record<string, Bot>>({});
	const [displayData, setDisplayData] = useState<Bot[]>([]);


	const files = useMemo(() => {
		return [official, ncc, acc, lcc, fcc];
	}, [official, ncc, acc, lcc, fcc]);

  	function sortData(data: any) {
	  	const copy = [...data];
	    copy.sort((a: any, b: any) => {
	      let result = b.Elo - a.Elo;

	      return result;
	    });

	    return copy;
	}

	function mapFile(file: string): string {
		if (file.includes("acc")) {
			return 'ACC';
		}
		else if (file.includes("official")) {
			return 'WCC';
		} else if (file.includes("lcc")) {
			return 'LCC';
		} else if (file.includes("ncc")) {
			return 'NCC';
		} else if (file.includes("fcc")) {
			return 'FCC';
		}

		return 'NA';
	}

	function parseData(data: any, file: any, total: any) {
		const fileKey: string = mapFile(file);
		const eloFileKey: string = fileKey + "Elo";

		for (let i = 0; i < data.length; i++) {
			const bot = data[i];
			const points = data.length - i - 1;

			if (total[bot.Name]) {
				total[bot.Name].totalPoints += points;
				total[bot.Name].elo += bot.Elo;
				total[bot.Name][fileKey] = points;
				total[bot.Name][eloFileKey] = bot.Elo;
			} else {
				total[bot.Name] = {
					name: bot.Name,
					profile: bot.Profile,
					creator: bot.Creator,
					elo: bot.Elo,
					totalPoints: points,
					[fileKey]: points,
					[eloFileKey]: bot.Elo,
				};
			}
		}
	}

	useEffect(() => {
		const loadData = async () => {
			const combined: Record<string, Bot> = {};

			for (const file of files) {
				const res = await fetch(file, { cache: "no-store" });
				const data = sortData(await res.json());

				parseData(data, file, combined);
			}

			setTotalData(combined);

			console.log(combined)
		};

		loadData();
	}, [files]);


	useEffect(() => {
		let sorted;
		if (sortBy == 'Points') {
			sorted = Object.values(totalData).sort(
				(a, b) => b.totalPoints - a.totalPoints
			);
		}
		else {
			sorted = Object.values(totalData).sort(
				(a, b) => b.elo - a.elo
			);
		}

		setDisplayData(sorted);
	}, [totalData, sortBy]);

	function getCompeted(bot: Bot) {
		let competed: number = 0;
		if (bot.WCCElo) {
			competed++;
		}
		if (bot.NCCElo) {
			competed++;
		}
		if (bot.ACCElo) {
			competed++;
		}
		if (bot.FCCElo) {
			competed++;
		}
		if (bot.LCCElo) {
			competed++;
		}
		return competed;
	}

	return (
		<>
			<PageButton />
  			<h2>Overall Rankings</h2>
			<div className="divisionContainer">
				{displayData.map((bot, rank) => (
					<div className={"botRow " + ((filterCreator == "" || filterCreator == bot.creator) ? "" : "hidden") + ((filterCompeted == undefined || filterCompeted.toString() == "" || filterCompeted.toString() == getCompeted(bot).toString()) ? "" : "hidden")} key={bot.name}>
						<img src={bot.profile} alt={bot.name} className="botProfile" />

						<div className="botInfo">
							<div className="botTitle">
								{sortBy === 'Points'
									? `#${rank + 1} - (${bot.totalPoints}) ${bot.name}`
									: `#${rank + 1} - (${bot.elo}) ${bot.name}`
								}
							</div>

							<div className="botMeta">
								<table className="botMetaTable">
									<tbody>
										<tr>
											<td>
												<b>WCC:</b> {sortBy === 'Points' ? bot.WCC ?? "N/A" : bot.WCCElo ?? "N/A"}
											</td>
											<td>
												<b>NCC:</b> {sortBy === 'Points' ? bot.NCC ?? "N/A" : bot.NCCElo ?? "N/A"}
											</td>
										</tr>
										<tr>
											<td>
												<b>ACC:</b> {sortBy === 'Points' ? bot.ACC ?? "N/A" : bot.ACCElo ?? "N/A"}
											</td>
											<td>
												<b>LCC:</b> {sortBy === 'Points' ? bot.LCC ?? "N/A" : bot.LCCElo ?? "N/A"}
											</td>
										</tr>
										<tr>
											<td>
												<b>FCC:</b> {sortBy === 'Points' ? bot.FCC ?? "N/A" : bot.FCCElo ?? "N/A"}
											</td>
											<td>
												<b>Creator:</b> {bot.creator ?? "N/A"}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="sortBar">
	        	<label htmlFor="sortBy"><b>Sort By: </b></label>
		        <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
		        	<option value="Points">Points</option>
		          	<option value="Elo">Elo</option>
	        	</select><br />
				<label htmlFor="filterCreator"><b>Filter Creator: </b></label>
		        <select
		          id="filterCreator"
		          value={filterCreator}
		          onChange={(e) => setFilterCreator(e.target.value)}
		        >
		          <option value="">None</option>
		          <option value="Jaden">Jaden</option>
		          <option value="Carter">Carter</option>
		          <option value="Tazel">Tazel</option>
		        </select><br />
				<label htmlFor="filterCompeted"><b>Filter Competed: </b></label>
		        <select
		          id="filterCompeted"
		          value={filterCompeted}
		          onChange={(e) => setFilterCompeted(e.target.value === "" ? undefined : Number(e.target.value))}
		        >
		          <option value="">None</option>
		          <option value="1">One</option>
		          <option value="2">Two</option>
		          <option value="3">Three</option>
		          <option value="4">Four</option>
		          <option value="5">Five</option>
		        </select>
			</div>
		</>
	);
}

export default TotalRanking;