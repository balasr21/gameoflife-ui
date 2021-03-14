import React, { useState, useEffect } from "react";
import { Matrix } from "./Matrix.component";
import { getInitialPos } from "../util/utils";

export const Game = ({ setStart, games, row, column }) => {
  let initialPos = getInitialPos(row, column);
  const [liveCells, setLiveCells] = useState(initialPos);
  const [index, setIndex] = useState(0);

  console.log("Games data ", JSON.stringify(games));

  useEffect(() => {
    setTimeout(() => {
      console.log("Games data inside ", JSON.stringify(games.data));
      games && games.data && setLiveCells(games.data[index]);
      games && games.data && index < games.data.length && setIndex(index + 1);
      games && games.data && index >= games.data.length && setStart(false);
    }, 100);
  }, [games, index, setStart]);

  return <Matrix liveCells={liveCells} row={row} column={column} />;
};
