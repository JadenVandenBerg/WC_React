import { useEffect, useState } from "react";

type Data = {
  bot_rankings: any[];
  top_pieces: any[];
  turns: any[];
  upsets: any[];
  longest_games: any[];
  shortest_games: any[];
};

export default function Dashboard() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/stats.json")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div style={{ padding: 20 }}>Loading...</div>;

  const tableStyle: React.CSSProperties = {
    borderCollapse: "collapse",
    width: "100%",
    marginBottom: "30px"
  };

  const thtd: React.CSSProperties = {
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "left"
  };

  const headerStyle: React.CSSProperties = {
    color: "black",
    backgroundColor: "#f5f5f5",
    fontWeight: "bold"
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Chess Bot Analytics</h1>

      {/* Bot Rankings */}
      <h2>Bot Rankings</h2>
      <table style={tableStyle}>
        <thead>
          <tr style={headerStyle}>
            <th style={thtd}>#</th>
            <th style={thtd}>Bot</th>
            <th style={thtd}>Wins</th>
            <th style={thtd}>Draws</th>
            <th style={thtd}>Losses</th>
          </tr>
        </thead>
        <tbody>
          {data.bot_rankings.map((b, i) => (
            <tr key={i}>
              <td style={thtd}>{i + 1}</td>
              <td style={thtd}>{b.bot}</td>
              <td style={thtd}>{b.wins}</td>
              <td style={thtd}>{b.draws}</td>
              <td style={thtd}>{b.losses}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Top Pieces */}
      <h2>Top Pieces</h2>
      <table style={tableStyle}>
        <thead>
          <tr style={headerStyle}>
            <th style={thtd}>#</th>
            <th style={thtd}>Piece</th>
            <th style={thtd}>Count</th>
          </tr>
        </thead>
        <tbody>
          {data.top_pieces.map((p, i) => (
            <tr key={i}>
              <td style={thtd}>{i + 1}</td>
              <td style={thtd}>{p.piece}</td>
              <td style={thtd}>{p.count}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Average Turns */}
      <h2>Average Turns</h2>
      <table style={tableStyle}>
        <thead>
          <tr style={headerStyle}>
            <th style={thtd}>#</th>
            <th style={thtd}>Bot</th>
            <th style={thtd}>Avg Turns</th>
          </tr>
        </thead>
        <tbody>
          {data.turns.map((t, i) => (
            <tr key={i}>
              <td style={thtd}>{i + 1}</td>
              <td style={thtd}>{t.bot}</td>
              <td style={thtd}>{t.avg_turns.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Upsets */}
      <h2>Upset Wins</h2>
      <table style={tableStyle}>
        <thead>
          <tr style={headerStyle}>
            <th style={thtd}>#</th>
            <th style={thtd}>Winner</th>
            <th style={thtd}>Loser</th>
            <th style={thtd}>Winner Pts</th>
            <th style={thtd}>Loser Pts</th>
            <th style={thtd}>Diff</th>
          </tr>
        </thead>
        <tbody>
          {data.upsets.map((u, i) => (
            <tr key={i}>
              <td style={thtd}>{i + 1}</td>
              <td style={thtd}>{u.winner}</td>
              <td style={thtd}>{u.loser}</td>
              <td style={thtd}>{u.winner_pts}</td>
              <td style={thtd}>{u.loser_pts}</td>
              <td style={thtd}>{u.diff.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Longest Games */}
      <h2>Longest Games</h2>
      <table style={tableStyle}>
        <thead>
          <tr style={headerStyle}>
            <th style={thtd}>#</th>
            <th style={thtd}>Match</th>
            <th style={thtd}>Turns</th>
            <th style={thtd}>Winner</th>
            <th style={thtd}>Result</th>
          </tr>
        </thead>
        <tbody>
          {data.longest_games.map((g, i) => (
            <tr key={i}>
              <td style={thtd}>{i + 1}</td>
              <td style={thtd}>{g.match}</td>
              <td style={thtd}>{g.turns}</td>
              <td style={thtd}>{g.winner}</td>
              <td style={thtd}>{g.result}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Shortest Games */}
      <h2>Shortest Games</h2>
      <table style={tableStyle}>
        <thead>
          <tr style={headerStyle}>
            <th style={thtd}>#</th>
            <th style={thtd}>Match</th>
            <th style={thtd}>Turns</th>
            <th style={thtd}>Winner</th>
            <th style={thtd}>Result</th>
          </tr>
        </thead>
        <tbody>
          {data.shortest_games.map((g, i) => (
            <tr key={i}>
              <td style={thtd}>{i + 1}</td>
              <td style={thtd}>{g.match}</td>
              <td style={thtd}>{g.turns}</td>
              <td style={thtd}>{g.winner}</td>
              <td style={thtd}>{g.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}