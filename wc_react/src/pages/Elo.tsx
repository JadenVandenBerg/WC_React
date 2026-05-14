import '../App.css'
import { useEffect, useMemo, useState } from "react";

function Elo() {
  const [bots, setBots] = useState([]);
  const [sortBy, setSortBy] = useState('Elo');
  const [sortOrder, setSortOrder] = useState('Descending');

  useEffect(() => {
    const fetchBots = async () => {
      const res = await fetch('/data.json', { cache: 'no-store' });
      const data = await res.json();
      setBots(data);
    };

    fetchBots();
    const interval = setInterval(fetchBots, 1000);
    return () => clearInterval(interval);
  }, []);

  const getWinPct = (bot: any) => {
    const games = bot.WinsTotal + bot.LossesTotal + bot.DrawsTotal;
    return games === 0 ? 0 : (bot.WinsTotal / games) * 100;
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

  const getGames = (bot: any) => bot.WinsTotal + bot.LossesTotal + bot.DrawsTotal;

  const sortedBots = useMemo(() => {
    const copy = [...bots];
    copy.sort((a: any, b: any) => {
      let result = 0;
      if (sortBy === 'Win %') result = getWinPct(b) - getWinPct(a);
      else if (sortBy === 'Games Total') result = getGames(b) - getGames(a);
      else if (sortBy === 'Range') result = getRange(b) - getRange(a);
      else if (sortBy === 'Win / Loss') result = getWinLoss(b) - getWinLoss(a);
      else if (sortBy === 'Max Elo') result = b.PeakElo - a.PeakElo;
      else if (sortBy === 'Min Elo') result = b.MinElo - a.MinElo;
      else if (sortBy === 'Adjusted Win %') result = getAWinPct(b) - getAWinPct(a);
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

  return (
    <>
      {divisions.map((divisionBots, divisionIndex) => (
        <div className="divisionContainer" key={divisionIndex}>
          <h2 className="divisionTitle">Division {divisionIndex + 1}</h2>

          {divisionBots.map((bot: any, index) => {
            const rank = divisionIndex * DIVISION_SIZE + index + 1;
            const games = getGames(bot);
            const winPct = getWinPct(bot).toFixed(2);
            const awinPct = getAWinPct(bot).toFixed(2);
            const range = getRange(bot);
            const winLoss = getWinLoss(bot).toFixed(2);

            return (
              <div className="botRow" key={bot.Id}>
                <img src={bot.Profile} alt={bot.Name} className="botProfile" />
                <div className="botInfo">
                  <div className="botTitle">#{rank} - {bot.Name}</div>
                  <div className="botMeta">
                    <div><b>Elo: {bot.Elo}</b><span style={{ float: 'right' }}>Max: {bot.PeakElo}</span></div>
                    <div>Creator: {bot.Creator}<span style={{ float: 'right' }}>Min: {bot.MinElo}</span></div>
                    <div>W/D/L: {bot.WinsTotal}/{bot.DrawsTotal}/{bot.LossesTotal} ({awinPct}%)<span style={{ float: 'right' }}>Range: {range}</span></div>
                    <div>Win %: {winPct}%, WL: {winLoss}<span style={{ float: 'right' }}>G: {games}</span></div>
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
          <option value="Adjusted Win %">Adjusted Win %</option>
          <option value="Win / Loss">Win / Loss</option>
          <option value="Games Total">Games Total</option>
          <option value="Max Elo">Max Elo</option>
          <option value="Min Elo">Min Elo</option>
          <option value="Range">Range</option>
        </select>
        <label htmlFor="sortOrder" style={{ marginLeft: '12px' }}><b>Order: </b></label>
        <select id="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="Descending">Descending</option>
          <option value="Ascending">Ascending</option>
        </select>
      </div>
    </>
  );
}

export default Elo;
