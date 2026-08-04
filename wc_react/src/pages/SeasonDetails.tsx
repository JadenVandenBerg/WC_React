import '../App.css'
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";

import PageButton from '../Button';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

function SeasonDetails() {
  const [bots, setBots] = useState<any>(null);
  const [rerender, setRerender] = useState<number>(0);
  const [TOTAL_GAMES, setTOTAL_GAMES] = useState<number>(0);

  const { id } = useParams();

  useEffect(() => {
    const fetchBotData = async () => {
      const res = await fetch(`/matchData/S${id}.json`, { cache: "no-store" });
      const data = await res.json();
      setBots(data);
      console.log(data);
    };

    fetchBotData();
  }, [id]);


  useEffect(() => {
    setRerender(rerender+1);
  }, [bots])

  const matchResultData = useMemo(() => {
  if (bots == null || bots == undefined) {
    return {};
  }

  const endReasons: Record<string, number> = {};

  setTOTAL_GAMES(Object.keys(bots).length * 7 / 2);

  for (const [, value] of Object.entries(bots as any)) {

    let botGames = 0;
    const bot = value as any;

    for (const [reasonKey, reasonValue] of Object.entries(bot.winReasons as Record<string, number>)) {
      botGames += reasonValue;
      if (reasonKey in endReasons) {
        endReasons[reasonKey] += reasonValue;
      } else {
        endReasons[reasonKey] = reasonValue;
      }
    }

    for (const [reasonKey2, reasonValue2] of Object.entries(bot.drawReasons as Record<string, number>)) {
      botGames += reasonValue2;
      if (reasonKey2 in endReasons) {
        endReasons[reasonKey2] += reasonValue2 * 0.5;
      } else {
        endReasons[reasonKey2] = reasonValue2 * 0.5;
      }
    }

    for (const [, reasonValue3] of Object.entries(bot.lossReasons as Record<string, number>)) {
      botGames += reasonValue3;
    }
  }

  return endReasons;
}, [bots]);

  const topBots = useMemo(() => {
    if (!bots) {
      return undefined;
    }

    return Object.entries(bots as Record<string, any>)
      .sort(([, aBot], [, bBot]) => {
        if (bBot.record.wins !== aBot.record.wins) {
          return bBot.record.wins - aBot.record.wins;
        }
        if (bBot.record.draws !== aBot.record.draws) {
          return bBot.record.draws - aBot.record.draws;
        }
        return aBot.record.losses - bBot.record.losses;
      })
      .slice(0, 5);
  }, [bots]);

  const luckiest = useMemo(() => {
    if (!bots) {
      return undefined;
    }

    return Object.entries(bots as Record<string, any>)
      .sort(([, aBot], [, bBot]) => {
        return bBot.averageStartingPoints - aBot.averageStartingPoints
      })
      .slice(0, 5);
  }, [bots]);

  const unluckiest = useMemo(() => {
    if (!bots) {
      return undefined;
    }

    return Object.entries(bots as Record<string, any>)
      .sort(([, aBot], [, bBot]) => {
        return aBot.averageStartingPoints - bBot.averageStartingPoints
      })
      .slice(0, 5);
  }, [bots]);

  const longest = useMemo(() => {
    if (!bots) {
      return undefined;
    }

    return Object.entries(bots as Record<string, any>)
      .sort(([, aBot], [, bBot]) => {
        return bBot.averageTurns - aBot.averageTurns
      })
      .slice(0, 5);
  }, [bots]);

  const shortest = useMemo(() => {
    if (!bots) {
      return undefined;
    }

    return Object.entries(bots as Record<string, any>)
      .sort(([, aBot], [, bBot]) => {
        return aBot.averageTurns - bBot.averageTurns
      })
      .slice(0, 5);
  }, [bots]);

  const topPieces = useMemo(() => {
    if (!bots) {
      return [];
    }

    const pieceTotals: Record<string, number> = {};

    Object.values(bots as Record<string, { piecesPlayed?: Record<string, number> }>).forEach((bot) => {
      Object.entries(bot.piecesPlayed ?? {}).forEach(([piece, count]) => {
        pieceTotals[piece] = (pieceTotals[piece] ?? 0) + count;
      });
    });

    return Object.entries(pieceTotals)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);
  }, [bots]);

  const chartData = topPieces.map(([piece, count]) => ({
    piece,
    count,
  }));

  const bottomBots = useMemo(() => {
    if (!bots) {
      return undefined;
    }

    return Object.entries(bots as Record<string, any>)
      .sort(([, aBot], [, bBot]) => {
        if (bBot.record.losses !== aBot.record.losses) {
          return bBot.record.losses - aBot.record.losses;
        }
        if (bBot.record.draws !== aBot.record.draws) {
          return bBot.record.draws - aBot.record.draws;
        }
        return aBot.record.wins - bBot.record.wins;
      })
      .slice(0, 5);
  }, [bots]);

  const renderLabel = ({ value }: any) => {
    const percent = ((value / TOTAL_GAMES) * 100).toFixed(1);
    return `${percent}%`;
  };

  const MATCH_COLORS: Record<string, string> = {
    "Checkmate": "#4CAF50",
    "Opposing King Death": "#81C784",
    "Moves Without Capture": "#FFC107",
    "Stalemate": "#FFD54F",
    "Repetition": "#FF9800",
  };

  const mapMatchResultToColor = (name: string) => {
    return MATCH_COLORS[name] ?? "#999999";
  };

  return (
    <>
      <PageButton/>
      <h2>Season {id} Dashboard</h2>
      <section id="chartGrid">
        <div>
          <h3 style={{ textAlign: "center" }}>
            Match End Reasons
          </h3>

          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={Object.entries(matchResultData).map(([name, value]) => ({
                  name,
                  value,
                }))}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={130}
                label={renderLabel}
              >
                {Object.entries(matchResultData).map(([name]) => (
                  <Cell
                    key={name}
                    fill={mapMatchResultToColor(name)}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
            Top Pieces
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            >
              <XAxis type="number" />
              <YAxis
                type="category"
                dataKey="piece"
                width={180}
              />
              <Bar dataKey="count" fill="#ffffff80" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
            Top Performers
          </h3>
          <table className="detailsTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Bot</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
              </tr>
            </thead>
            <tbody>
              {topBots?.map(([botName, bot], index) => (
                <tr key={botName}>
                  <td>{index + 1}</td>
                  <td>{botName}</td>
                  <td>{bot.record?.wins}</td>
                  <td>{bot.record?.draws}</td>
                  <td>{bot.record?.losses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
            Bottom Performers
          </h3>
          <table className="detailsTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Bot</th>
                <th>Losses</th>
                <th>Draws</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              {bottomBots?.map(([botName, bot], index) => (
                <tr key={botName}>
                  <td>{index + 1}</td>
                  <td>{botName}</td>
                  <td>{bot.record?.losses}</td>
                  <td>{bot.record?.draws}</td>
                  <td>{bot.record?.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
            Highest Average Turns
          </h3>
          <table className="detailsTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Bot</th>
                <th>Average Turns</th>
              </tr>
            </thead>
            <tbody>
              {longest?.map(([botName, bot], index) => (
                <tr key={botName}>
                  <td>{index + 1}</td>
                  <td>{botName}</td>
                  <td>{bot.averageTurns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
            Lowest Average Turns
          </h3>
          <table className="detailsTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Bot</th>
                <th>Average Turns</th>
              </tr>
            </thead>
            <tbody>
              {shortest?.map(([botName, bot], index) => (
                <tr key={botName}>
                  <td>{index + 1}</td>
                  <td>{botName}</td>
                  <td>{bot.averageTurns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
            Luckiest
          </h3>
          <table className="detailsTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Bot</th>
                <th>Average Starting Points</th>
              </tr>
            </thead>
            <tbody>
              {luckiest?.map(([botName, bot], index) => (
                <tr key={botName}>
                  <td>{index + 1}</td>
                  <td>{botName}</td>
                  <td>{bot.averageStartingPoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
            Unluckiest
          </h3>
          <table className="detailsTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Bot</th>
                <th>Average Starting Points</th>
              </tr>
            </thead>
            <tbody>
              {unluckiest?.map(([botName, bot], index) => (
                <tr key={botName}>
                  <td>{index + 1}</td>
                  <td>{botName}</td>
                  <td>{bot.averageStartingPoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default SeasonDetails;