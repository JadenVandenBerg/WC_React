import '../App.css'
import { useEffect, useMemo, useState } from "react";
import PageButton from '../Button'

interface Bot {
	name: string;
	profile: string;
	creator: string;
	totalPoints: number;
	WCC?: number;
	NCC?: number;
	ACC?: number;
	LCC?: number;
	FCC?: number;
	Id?: string | number;
}

function TotalRanking() {
	const [official] = useState("/officialData.json");
	const [ncc] = useState("/nccData.json");
	const [acc] = useState("/accData.json");
	const [lcc] = useState("/lccData.json");
	const [fcc] = useState("/fccData.json");

	const [filterCreator, setFilterCreator] = useState("");

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

		for (let i = 0; i < data.length; i++) {
			const bot = data[i];
			const points = data.length - i - 1;

			if (total[bot.Name]) {
				total[bot.Name].totalPoints += points;
				total[bot.Name][fileKey] = points;
			} else {
				total[bot.Name] = {
					name: bot.Name,
					profile: bot.Profile,
					creator: bot.Creator,
					totalPoints: points,
					[fileKey]: points,
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
		};

		loadData();
	}, [files]);


	useEffect(() => {
		const sorted = Object.values(totalData).sort(
			(a, b) => b.totalPoints - a.totalPoints
		);

		setDisplayData(sorted);
	}, [totalData]);

	return (
		<>
			<PageButton />

  			<h2>Overall Rankings</h2>
			<div className="divisionContainer">
				{displayData.map((bot, rank) => (
					<div className={"botRow " + ((filterCreator == "" || filterCreator == bot.creator) ? "" : "hidden")} key={bot.name}>
						<img src={bot.profile} alt={bot.name} className="botProfile" />

						<div className="botInfo">
							<div className="botTitle">
								#{rank + 1} - ({bot.totalPoints}) {bot.name}
							</div>

							<div className="botMeta">
								<table className="botMetaTable">
									<tbody>
										<tr>
											<td><b>WCC:</b> {bot.WCC ?? "N/A"}</td>
											<td><b>NCC:</b> {bot.NCC ?? "N/A"}</td>
										</tr>
										<tr>
											<td><b>ACC:</b> {bot.ACC ?? "N/A"}</td>
											<td><b>LCC:</b> {bot.LCC ?? "N/A"}</td>
										</tr>
										<tr>
											<td><b>FCC:</b> {bot.FCC ?? "N/A"}</td>
											<td><b>Creator:</b> {bot.creator ?? "N/A"}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="sortBar">
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
		        </select>
			</div>
		</>
	);
}

export default TotalRanking;