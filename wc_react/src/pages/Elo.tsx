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
      <h1>Wacky Chess Bot Tournament Leaderboard</h1>
      <nav class="seasonNav">
        <a class="season" href="/season1">Season 1</a>
        <a class="season" href="/season2">Season 2</a>
      </nav>
      {divisions.map((divisionBots, divisionIndex) => (
        <table className="eloTable" key={divisionIndex}>
          <tbody>
            <tr>
              <th colSpan="4">Division {divisionIndex + 1}</th>
            </tr>
            <tr>
              <td>Position</td>
              <td>Name</td>
              <td>Elo</td>
            </tr>

            {divisionBots.map((bot, index) => (
              <tr key={bot.id}>
                <td>{divisionIndex * DIVISION_SIZE + index + 1}</td>
                <td>{bot.name}</td>
                <td>{bot.elo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </>
  );
}

export default Elo;