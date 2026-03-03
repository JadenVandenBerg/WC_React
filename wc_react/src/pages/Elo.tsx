import '../App.css'
import { useEffect, useState } from "react";

function Elo() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      const res = await fetch("/data.json", {
        cache: "no-store",
      });
      const data = await res.json();
      setBots(data);
    };

    fetchBots();

    const interval = setInterval(fetchBots, 1000);
    return () => clearInterval(interval);
  }, []);

  const sortedBots = [...bots].sort((a, b) => b.elo - a.elo);

  const DIVISION_SIZE = 8;
  const divisions = [];

  for (let i = 0; i < sortedBots.length; i += DIVISION_SIZE) {
    divisions.push(sortedBots.slice(i, i + DIVISION_SIZE));
  }

  return (
    <>
      {/*<nav className="seasonNav">
        <a className="season" href="/season1">Season 1</a>
        <a className="season" href="/season2">Season 2</a>
      </nav>*/}
      {divisions.map((divisionBots, divisionIndex) => (
        <div className="divisionContainer" key={divisionIndex}>
          <h2 className="divisionTitle">
            Division {divisionIndex + 1}
          </h2>

          {divisionBots.map((bot, index) => {
            const rank = divisionIndex * DIVISION_SIZE + index + 1;

            return (
              <div className="botRow" key={bot.id}>
                <img
                  src={bot.profile}
                  alt={bot.name}
                  className="botProfile"
                />

                <div className="botInfo">
                  <div className="botTitle">
                    #{rank} - {bot.name}
                  </div>

                  <div className="botMeta">
                    <div>Creator: {bot.creator}</div>
                    <div>Elo: {bot.elo}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}

export default Elo;