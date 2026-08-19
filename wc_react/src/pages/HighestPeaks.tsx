import '../App.css'
import { useEffect, useMemo, useState } from "react";
import PageButton from '../Button'


function HighestPeaks() {
    const [bots, setBots] = useState<any[]>([]);
  const [filterCreator, setFilterCreator] = useState("");
  const [filterDepth, setFilterDepth] = useState("");

    useEffect(() => {
	const fetchBots = async () => {
		const files = [
			"/officialData.json",
			"/nccData.json",
			"/accData.json",
			"/lccData.json",
			"/fccData.json"
		];

		const responses = await Promise.all(
			files.map(file =>
				fetch(file, { cache: "no-store" }).then(res => res.json())
			)
		);

		const allBots = responses.flatMap((data, index) =>
      data
        .filter((bot: any) => bot.PeakElo > 1000)
        .map((bot: any) => ({
          ...bot,
          dataFile: mapFile(files[index])
        }))
    );

		setBots(allBots);
	};

	fetchBots();

	const interval = setInterval(fetchBots, 1000);

	return () => clearInterval(interval);
}, []);

function mapFile(file: string) {
    if (file == "/officialData.json") {
        return "WCC";
    } else if (file == "/nccData.json") {
        return "NCC";
    } else if (file == "/accData.json") {
        return "ACC";
    } else if (file == "/lccData.json") {
        return "LCC";
    } else if (file == "/fccData.json") {
        return "FCC";
    }
}

  const getWinPct = (bot: any) => {
    const games = bot.WinsTotal + bot.LossesTotal + bot.DrawsTotal;
    return games === 0 ? 0 : (bot.WinsTotal / games) * 100;
  };

  const getDrawPct = (bot: any) => {
    const games = bot.WinsTotal + bot.LossesTotal + bot.DrawsTotal;
    return games === 0 ? 0 : (bot.DrawsTotal / games) * 100;
  };

  const getLossPct = (bot: any) => {
    const games = bot.WinsTotal + bot.LossesTotal + bot.DrawsTotal;
    return games === 0 ? 0 : (bot.LossesTotal / games) * 100;
  };

  const getAWinPct = (bot: any) => {
    const games = bot.WinsTotal + bot.LossesTotal + bot.DrawsTotal;
    return games === 0 ? 0 : ((bot.WinsTotal + (bot.DrawsTotal / 2)) / games) * 100;
  };

  const getRange = (bot: any) => {
    const range = bot.PeakElo - bot.MinElo;
    return range;
  };

  const getWinLoss = (bot: any) => {
    const wl = bot.WinsTotal / bot.LossesTotal;
    return wl;
  };

  const getWinDrawLoss = (bot: any) => {
    const wl = (bot.WinsTotal + bot.DrawsTotal) / bot.LossesTotal;
    return wl;
  };

  const getGames = (bot: any) => bot.WinsTotal + bot.LossesTotal + bot.DrawsTotal;

  const sortedBots = useMemo(() => {
    const copy = [...bots];
    copy.sort((a: any, b: any) => {
      return b.PeakElo - a.PeakElo;
    });
    return copy;
  }, [bots]);

  const DIVISION_SIZE = 8;
  const divisions = [];
  for (let i = 0; i < sortedBots.length; i += DIVISION_SIZE) {
    divisions.push(sortedBots.slice(i, i + DIVISION_SIZE));
  }

  function mapClass(class_: string) {

    if (class_ == "ZeroMove") {
      return 0;
    } else if (class_ == "PointFiveMove") {
      return 0.5;
    } else if (class_ == "OneMove") {
      return 1;
    } else if (class_ == "OnePointFiveMove") {
      return 1.5;
    } else if (class_ == "TwoMove") {
      return 2.0;
    } else if (class_ == "TwoPointFiveMove") {
      return 2.5;
    } else if (class_ == "ThreeMove") {
      return 3.0;
    } else if (class_ == "ThreePointFiveMove") {
      return 3.5;
    }

    return class_;
  }

  function getDistanceToPeak(bot: any) {
    return bot.PeakElo - bot.Elo;
  }

  return (
    <>
      <PageButton/>
      {divisions.map((divisionBots, divisionIndex) => (
        <div className="divisionContainer" key={divisionIndex}>
          <h2 className="divisionTitle">Division {divisionIndex + 1}</h2>

          {divisionBots.map((bot: any, index) => {
            const rank = divisionIndex * DIVISION_SIZE + index + 1;
            const games = getGames(bot);
            const winPct = getWinPct(bot).toFixed(1);
            const drawPct = getDrawPct(bot).toFixed(1);
            const lossPct = getLossPct(bot).toFixed(1);
            const awinPct = getAWinPct(bot).toFixed(2);
            const range = getRange(bot);
            const winLoss = getWinLoss(bot).toFixed(2);
            const winDrawLoss = getWinDrawLoss(bot).toFixed(2);
            const distanceToPeak = getDistanceToPeak(bot);

            const botInfoClassName = "botInfo " + bot.Class;

            return (
              <div className={"botRow " + (((filterCreator == "" || filterCreator == bot.Creator) && (filterDepth == "" || filterDepth == mapClass(bot.Class))) ? "" : "hidden")} key={bot.Name + bot.dataFile}>
                <img src={bot.Profile} alt={bot.Name} className="botProfile" />
                <div className={botInfoClassName}>
                  <div className="botTitle">#{rank} - {bot.Name} ({bot.dataFile}) {bot.Trophies?.length > 0 && (
                  <div className='trophies' style={{ marginLeft: '8px' }}>
                    {bot.Trophies.map((trophy: string, i: number) => (
                        (bot.dataFile == "WCC" && (!trophy.includes("NCC") && !trophy.includes("ACC") && !trophy.includes("FCC") && !trophy.includes("LCC") && !trophy.includes("WCTourney")) || bot.dataFile != "WCC") &&
                      <img
                        key={i}
                        src={`./../img/Trophy/${trophy}.png`}
                        alt={trophy}
                        title={trophy.replace('_', ' ')}
                        style={{
                          width: '30px',
                          height: '30px',
                          verticalAlign: 'middle',
                          marginRight: '4px'
                        }}
                      />
                    ))}
                  </div>
                )}</div>
                  <div className="botMeta">
                    <div><b>Peak Elo: {bot.PeakElo}</b><span style={{ float: 'right' }}>Range: {bot.PeakElo} - {bot.MinElo} ({range})</span></div>
                    <div>AW%: {awinPct}%<span style={{ float: 'right' }}>Peak Distance: {distanceToPeak}</span></div>
                    <div>W/D/L (%): {bot.WinsTotal} ({winPct}%), {bot.DrawsTotal} ({drawPct}%), {bot.LossesTotal} ({lossPct}%)<span style={{ float: 'right' }}>Depth: {mapClass(bot.Class)}</span></div>
                    <div>W/L: {winLoss}, WD/L: {winDrawLoss}.<span style={{ float: 'right' }}>Creator: {bot.Creator}, Games: {games}</span></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
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
        </select><br />
        <label htmlFor="filterDepth"><b>Filter Depth: </b></label>
        <select
          id="filterDepth"
          value={filterDepth}
          onChange={(e) => setFilterDepth(e.target.value)}
        >
          <option value="">None</option>
          <option value="0">0</option>
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="2.5">2.5</option>
        </select>
      </div>
    </>
  );
}

export default HighestPeaks;
