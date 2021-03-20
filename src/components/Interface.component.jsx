import React, { useState, useEffect } from "react";
import { Game } from "./Game.component";
import axios from "axios";
import { getInitialPos } from "../util/utils";

export const Interface = ({ row, column }) => {
  const [start, setStart] = useState(false);

  let [games, setGames] = useState([]);

  if (start && games.length === 0) {
    setGames(getInitialPos(row, column));
  }

  const fetchData = (games) => {
    axios
      .create()
      .post("http://localhost:8080/start/", {
        row: row,
        column: column,
        position: games,
      })
      .then((res) => {
        setGames(res.data);
      })
      .catch((e) => {
        alert("Invalid Input Parameters", e);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      start && fetchData(games);
    }, 100);
    // eslint-disable-next-line
  }, [start, games]);

  return (
    <>
      <button
        className="btn__submit"
        onClick={() => setStart(!start)}
        type="submit"
      >
        {start ? "Stop" : "Start"}
      </button>
      {games && (
        <Game
          start={start}
          setStart={setStart}
          games={games}
          row={row}
          column={column}
        />
      )}
    </>
  );
};
