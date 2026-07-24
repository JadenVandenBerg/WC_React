import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PageButton() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const pages = [
    { name: "Elo", route: "/" },
    { name: "Victors", route: "/Victors" },
    { name: "Trophies", route: "/Trophies" },
    { name: "Season 1", route: "/Season1" },
    { name: "Season 2", route: "/Season2" },
    { name: "Season 3", route: "/Season3" },
    { name: "Season 4", route: "/Season4" },
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
        }}
      >
        {visible ? "−" : "+"}
      </button>

      {visible &&
        pages.map((page) => (
          <button
            key={page.route}
            onClick={() => navigate(page.route)}
            style={{
              width: "120px",
            }}
          >
            {page.name}
          </button>
        ))}
    </div>
  );
}

export default PageButton;