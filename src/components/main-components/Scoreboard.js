import React from "react";
const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div id="scoreboard">
      <div>Current Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
};

export default Scoreboard;
