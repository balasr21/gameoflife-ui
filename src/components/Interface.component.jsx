import React, { useState } from "react";
import { Game } from "./Game.component";
import { getInitialPos } from "../util/utils";
import axios from "axios";

export const Interface = ({ row, column }) => {
  const [start, setStart] = useState(false);

  const [games, setGames] = useState([]);

  const fetchData = () => {
    axios
      .create()
      .post("https://www.gameoflife.balasr.com/start/", {
        row: row,
        column: column,
        position: getInitialPos(row, column),
      })
      .then((res) => {
        setGames(res);
      })
      .catch((e) => {
        alert("Invalid Input Parameters", e);
      });
  };

  return (
    <>
      <button
        className="btn__submit"
        onClick={() => {
          setStart(true);
          fetchData();
        }}
        type="submit"
      >
        Start
      </button>
      {start && games && (
        <Game setStart={setStart} games={games} row={row} column={column} />
      )}
    </>
  );
};
