import React, { useState, useEffect } from "react";
import { Matrix } from "./Matrix.component";
import { getInitialPos } from "../util/utils";

export const Game = ({ start, games, row, column }) => {
  let initialPos = getInitialPos(row, column);
  const [liveCells, setLiveCells] = useState(initialPos);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLiveCells(games.data[index]);
      index < games.data.length && setIndex(index + 1);
    }, 200);
  }, [games, index]);

  return <Matrix liveCells={liveCells} row={row} column={column} />;
};
