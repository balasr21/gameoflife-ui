import React, { useState } from "react";
import { Matrix } from "./Matrix.component";

export const Game = ({ start, setStart, games, row, column }) => {
  // eslint-disable-next-line
  const [liveCells, setLiveCells] = useState(games);

  let gamePosition = games;

  const handleChange = (e, cellId, isCellAlive) => {
    e.target.classList.toggle("cell__live");
    handleMatrixPosition(cellId, isCellAlive);
  };

  const handleMatrixPosition = (cellId, isCellAlive) => {
    if (isCellAlive) {
      var index = gamePosition.indexOf(cellId);
      if (index !== -1) {
        gamePosition.splice(index, 1);
      }
    } else {
      gamePosition.push(cellId);
    }
    setLiveCells(gamePosition);
  };

  return (
    <Matrix
      start={start}
      setLiveCells={setLiveCells}
      liveCells={games}
      row={row}
      column={column}
      handleChange={handleChange}
    />
  );
};
