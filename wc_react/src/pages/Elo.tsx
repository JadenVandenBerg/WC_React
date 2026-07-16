import '../App.css'
import { useEffect, useMemo, useState } from "react";

function Elo() {
  const [bots, setBots] = useState([]);
  const [sortBy, setSortBy] = useState('Elo');
  const [sortOrder, setSortOrder] = useState('Descending');

  const [dataFile, setDataFile] = useState("/data.json");

  useEffect(() => {
    const fetchBots = async () => {
      const res = await fetch(dataFile, { cache: "no-store" });
      const data = await res.json();
      setBots(data);
    };

    fetchBots();

    const interval = setInterval(fetchBots, 1000);

    return () => clearInterval(interval);
  }, [dataFile]);

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

  const getTrophies = (bot: any) => {
    let trophies = 0;

    bot.Trophies.forEach((trophy: any) => {
      console.log(trophy);
      if (trophy.includes("Gold")) {
        trophies += 3;
      }
      else if (trophy.includes("Silver")) {
        trophies += 2;
      } else if (trophy.includes("Bronze")) {
        trophies += 1;
      }
    });

    return trophies;
  }

  const getClass = (bot: any) => {
    let classes = ["ZeroMove", "PointFiveMove", "OneMove", "OnePointFiveMove", "TwoMove", "TwoPointFiveMove", "ThreeMove", "ThreePointFiveMove", "FourMove"];
    
    for(let i = 0; i < classes.length; i++) {
      if (classes[i] == bot.Class) {
        return i;
      }
    }

    return 0;
  }

  const sortedBots = useMemo(() => {
    const copy = [...bots];
    copy.sort((a: any, b: any) => {
      let result = 0;
      if (sortBy === 'Win %') result = getWinPct(b) - getWinPct(a);
      else if (sortBy === 'Draw %') result = getDrawPct(b) - getDrawPct(a);
      else if (sortBy === 'Loss %') result = getLossPct(b) - getLossPct(a);
      else if (sortBy === 'Games Total') result = getGames(b) - getGames(a);
      else if (sortBy === 'Range') result = getRange(b) - getRange(a);
      else if (sortBy === 'Win / Loss') result = getWinLoss(b) - getWinLoss(a);
      else if (sortBy === 'WinDraw / Loss') result = getWinDrawLoss(b) - getWinDrawLoss(a);
      else if (sortBy === 'Max Elo') result = b.PeakElo - a.PeakElo;
      else if (sortBy === 'Min Elo') result = b.MinElo - a.MinElo;
      else if (sortBy === 'Adjusted Win %') result = getAWinPct(b) - getAWinPct(a);
      else if (sortBy === 'Trophies') result = getTrophies(b) - getTrophies(a);
      else if (sortBy === 'Depth') result = getClass(b) - getClass(a);
      else result = b.Elo - a.Elo;
      return sortOrder === 'Descending' ? result : -result;
    });
    return copy;
  }, [bots, sortBy, sortOrder]);

  const DIVISION_SIZE = 8;
  const divisions = [];
  for (let i = 0; i < sortedBots.length; i += DIVISION_SIZE) {
    divisions.push(sortedBots.slice(i, i + DIVISION_SIZE));
  }

  function mapClass(class_) {

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

  return (
    <>
      {divisions.map((divisionBots, divisionIndex) => (
        <div className="divisionContainer" key={divisionIndex}>
          <h2 className="divisionTitle">Division {divisionIndex + 1}</h2>

          {divisionBots.map((bot: any, index) => {
            const rank = divisionIndex * DIVISION_SIZE + index + 1;
            const games = getGames(bot);
            const winPct = getWinPct(bot).toFixed(2);
            const drawPct = getDrawPct(bot).toFixed(2);
            const lossPct = getLossPct(bot).toFixed(2);
            const awinPct = getAWinPct(bot).toFixed(2);
            const range = getRange(bot);
            const winLoss = getWinLoss(bot).toFixed(2);
            const winDrawLoss = getWinDrawLoss(bot).toFixed(2);

            const botInfoClassName = "botInfo " + bot.Class;

            return (
              <div className="botRow" key={bot.Id}>
                <img src={bot.Profile} alt={bot.Name} className="botProfile" />
                <div className={botInfoClassName}>
                  <div className="botTitle">#{rank} - {bot.Name}{bot.Trophies?.length > 0 && (
                  <div className='trophies' style={{ marginLeft: '8px' }}>
                    {bot.Trophies.map((trophy: string, i: number) => (
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
                    <div><b>Elo: {bot.Elo}</b><span style={{ float: 'right' }}>Range: {bot.PeakElo} - {bot.MinElo} ({range})</span></div>
                    <div>AW%: {awinPct}%<span style={{ float: 'right' }}>Creator: {bot.Creator}</span></div>
                    <div>W/D/L (%): {bot.WinsTotal} ({winPct}%), {bot.DrawsTotal} ({drawPct}%), {bot.LossesTotal} ({lossPct}%)<span style={{ float: 'right' }}>Depth: {mapClass(bot.Class)}</span></div>
                    <div>W/L: {winLoss}, WD/L: {winDrawLoss}.<span style={{ float: 'right' }}>G: {games}</span></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
      <div className="sortBar">
        <label htmlFor="sortBy"><b>Sort By: </b></label>
        <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="Elo">Elo</option>
          <option value="Win %">Win %</option>
          <option value="Draw %">Draw %</option>
          <option value="Loss %">Loss %</option>
          <option value="Adjusted Win %">Adjusted Win %</option>
          <option value="Win / Loss">Win / Loss</option>
          <option value="WinDraw / Loss">Win + Draw / Loss</option>
          <option value="Games Total">Games Total</option>
          <option value="Max Elo">Max Elo</option>
          <option value="Min Elo">Min Elo</option>
          <option value="Range">Range</option>
          <option value="Trophies">Trophies</option>
          <option value="Depth">Depth</option>
        </select>
        <label htmlFor="sortOrder" style={{ marginLeft: '12px' }}><b>Order: </b></label>
        <select id="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="Descending">Descending</option>
          <option value="Ascending">Ascending</option>
        </select><br />
        <label htmlFor="dataFile"><b>Data: </b></label>
        <select
          id="dataFile"
          value={dataFile}
          onChange={(e) => setDataFile(e.target.value)}
        >
          <option value="/data.json">Current</option>
          <option value="/officialData.json">WCC</option>
          <option value="/nccData.json">NCC</option>
          <option value="/accData.json">ACC</option>
          <option value="/fccData.json">FCC</option>
          <option value="/testingData.json">Testing</option>
          <option value="/allTestingData.json">All Testing</option>
          <option value="/testingNccData.json">NCC Testing</option>
        </select>
      </div>
    </>
  );
}

export default Elo;
