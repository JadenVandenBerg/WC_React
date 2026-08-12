import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PageButton() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const pages = [
    { name: "Elo", route: "/" },
    { name: "Victors", route: "/Victors" },
    { name: "Trophies", route: "/Trophies" },
    { name: "Ranking", route: "/TotalRanking" },
    { name: "Database", route: "/GameTable" },
    { name: "Season LB", route: "/SeasonTable" },
    { name: "Combined Elo", route: "/CombinedElo" },
    { name: "Season 1", route: "/Season1" },
    { name: "Season 2", route: "/Season2" },
    { name: "Season 3", route: "/Season3" },
    { name: "Season 4", route: "/Season4" },
    { name: "Season 5", route: "/Season5" },
  ];

  const seasons = [
    { id: 1, name: "Season 1" },
    { id: 2, name: "Season 2" },
    { id: 3, name: "Season 3" },
    { id: 4, name: "Season 4" },
    { id: 5, name: "Season 5" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        left: 10,
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        zIndex: 1000000,
      }}
    >
      <button
        onClick={() => setVisible(!visible)}
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          padding: 0,
          zIndex: 1000000,
        }}
      >
        {visible ? "-" : "+"}
      </button>

      {visible && (
        <>
          {pages.map((page) => (
            <button
              key={page.route}
              onClick={() => navigate(page.route)}
              style={{
                width: "150px",
              }}
            >
              {page.name}
            </button>
          ))}

          <select
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) {
                navigate(`/seasonDetails/${e.target.value}`);
                e.target.value = "";
              }
            }}
            style={{
              width: "150px",
              borderRadius: "8px",
              border: "1px solid transparent",
              borderRight: "8px solid transparent",
              padding: "0.6em",
              fontSize: "1em",
              fontFamily: "inherit",
              backgroundColor: "#1a1a1a",
              color: "white",
              cursor: "pointer",
              textAlign: "center"
            }}
          >
            <option value="" disabled>
              Dashboard
            </option>
            {seasons.map((season) => (
              <option key={season.id} value={season.id}>
                {season.name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

export default PageButton;
