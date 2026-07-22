import React from "react";
import { useNavigate } from "react-router-dom";

function PageButton({ Page }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (Page === "Elo") {
      navigate("/Victors");
    } else if (Page === "Victors") {
      navigate("/");
    }
  };

  const buttonText = Page === "Elo" ? "Victors" : "Elo";

  return (
    <button
      onClick={handleClick}
      style={{
        position: "absolute",
        top: "50",
        left: "0",
      }}
    >
      {buttonText}
    </button>
  );
}

export default PageButton;