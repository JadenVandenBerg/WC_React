import '../App.css'
import { useEffect, useState } from "react";

function Season1() {
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

    //const interval = setInterval(fetchBots, 1000);
    //return () => clearInterval(interval);
  }, []);

  const sortedBots = [...bots].sort((a, b) => b.elo - a.elo);

  let finalBots = {
    "division1": [],
    "division2": [],
    "division3": []
  };

  for (let i = 0; i < sortedBots.length; i++) {
    if (sortedBots[i].competing.includes("S1")) {
      let division = sortedBots[i].seasons[0].division;

      if (division == 1) {
        finalBots["division1"].push(sortedBots[i]);
      }
      else if (division == 2) {
        finalBots["division2"].push(sortedBots[i]);
      }
      else if (division == 3) {
        finalBots["division3"].push(sortedBots[i]);
      }
    }
  }

  let div1Rounds = [];

  if (finalBots["division1"].length == 4) {
    let round1 = [];

    round1.push({
      "botWhite": finalBots["division1"][0],
      "botBlack": finalBots["division1"][1]
    });

    round1.push({
      "botWhite": finalBots["division1"][2],
      "botBlack": finalBots["division1"][3]
    });

    div1Rounds.push(round1);

    let round2 = [];

    round2.push({
      "botWhite": finalBots["division1"][2],
      "botBlack": finalBots["division1"][0]
    });

    round2.push({
      "botWhite": finalBots["division1"][3],
      "botBlack": finalBots["division1"][1]
    });

    div1Rounds.push(round2);

    let round3 = [];

    round3.push({
      "botWhite": finalBots["division1"][0],
      "botBlack": finalBots["division1"][3]
    });

    round3.push({
      "botWhite": finalBots["division1"][1],
      "botBlack": finalBots["division1"][2]
    });

    div1Rounds.push(round3);
  }

  return (
    <>
      <h1>Wacky Chess Bot Tournament Season 1</h1>
      <nav class="seasonNav">
        <a class="season" href="/">Elo Leaderboard</a>
        <a class="season" href="/season2">Season 2</a>
      </nav>
      
        <table className="eloTable" key={0}>
          <tbody>
            <tr>
              <th colSpan="4">Division {0 + 1}</th>
            </tr>
            <tr>
              <td>Seeding</td>
              <td>Name</td>
              <td>Starting Elo</td>
            </tr>
            {finalBots["division1"].map((bot, index) => (
            <tr key={bot.id}>
              <td>{0 * 8 + index + 1}</td>
              <td>{bot.name}</td>
              <td>{bot.seasons[0].startingElo}</td>
            </tr>
            ))}
          </tbody>
        </table>

        <table className="seedingTable" key={"0-seeding"}>
          <tbody>
            <tr>
              <th colSpan="4">Division {0 + 1} Seeding</th>
            </tr>
              {div1Rounds.map((round, index) => (
                <tr>
                    <td>Round {index + 1}</td>
                  {round.map((match, index) => (
                    <td>
                      {match["botWhite"].name} vs {match["botBlack"].name}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
    </>
  );
}

export default Season1;