import React, { useState, useEffect } from "react";
import { Game } from "./Game.component";
import { getInitialPos } from "../util/utils";
import { useMatrixPosition } from "../hooks/index";

export const Control = () => {
  const [row, setRow] = useState(20);
  const [column, setColumn] = useState(20);
  const [start, setStart] = useState(false);

  let { response } = useMatrixPosition(row, column, getInitialPos(row, column));

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Initial wait to start...");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="control__container">
      <form>
        <input
          type="text"
          name="Row"
          placeholder="Row"
          value={row}
          onChange={(e) => {
            setRow(e.target.value);
          }}
        ></input>
        <input
          type="text"
          name="Column"
          placeholder="Column"
          value={column}
          onChange={(e) => setColumn(e.target.value)}
        ></input>
        <button onClick={() => setStart(true)} type="submit">
          Start
        </button>
      </form>
      {response && response.data && row > 0 && column > 0 && (
        <Game start={start} games={response} row={row} column={column} />
      )}
    </div>
  );
};
