import "../App.css";
import { useEffect, useState } from "react";
import PageButton from '../Button'

function Victors() {
  const [victors, setVictors] = useState<any>(null);
  const [tournament, setTournament] = useState("WCC");

  useEffect(() => {
    const fetchVictors = async () => {
      const res = await fetch("/tournaments.json", { cache: "no-store" });
      const data = await res.json();
      setVictors(data);
    };

    fetchVictors();
    const interval = setInterval(fetchVictors, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!victors) {
    return <div>Loading...</div>;
  }

  const winners = victors[tournament] ?? [];

  return (
    <>
      <PageButton/>
      <div className="divisionContainer">
        <h2 className="divisionTitle">{tournament} Champions</h2>

        {winners.map((bot: any) => (
          <div className="botRow" key={bot.Id}>
            <img
              src={bot.Profile}
              alt={bot.Name}
              className="botProfile"
            />

            <div className="botInfo">
              <div className="botTitle">
                {bot.Season} - {bot.Name}

                {bot.Trophies?.length > 0 && (
                  <div className="trophies" style={{ marginLeft: "8px" }}>
                    {bot.Trophies.map((trophy: string, i: number) => (
                      <img
                        key={i}
                        src={`./../img/Trophy/${trophy}.png`}
                        alt={trophy}
                        title={trophy.replaceAll("_", " ")}
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "4px",
                          verticalAlign: "middle",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="botMeta">
                <div>
                  <b>Elo:</b> {bot.Elo == 0 ? "-" : bot.Elo}
                </div>
                <div>
                  <b>Creator:</b> {bot.Creator}
                </div>
                <div>
                  <b>2nd:</b> {bot.RunnerUp[0]}<br></br>
                  <b>3rd:</b> {bot.RunnerUp[1]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sortBar">
        <label htmlFor="tournament">
          <b>Tournament: </b>
        </label>

        <select
          id="tournament"
          value={tournament}
          onChange={(e) => setTournament(e.target.value)}
        >
          <option value="WCC">Wacky Chess Championship (WCC)</option>
          <option value="NCC">Normal Chess Championship (NCC)</option>
          <option value="ACC">Atomic Chess Championship (ACC)</option>
          <option value="FCC">Fusion Chess Championship (FCC)</option>
          <option value="LCC">Landmine Chess Championship (LCC)</option>
          <option value="WCTourney">Single Elimination (WCTourney)</option>
        </select>
      </div>
    </>
  );
}

export default Victors;