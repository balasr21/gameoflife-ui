import React, { useState } from "react";
import { Game } from "./Game.component";
import { getInitialPos } from "../util/utils";
import axios from "axios";

export const Interface = ({ row, column }) => {
  const [start, setStart] = useState(false);

  //let { games } = useMatrixPosition(row, column, getInitialPos(row, column));
  const [games, setGames] = useState([]);

  console.log("Rendering Interface...", JSON.stringify(games));

  const fetchData = () => {
    console.log("Making Request....");
    axios
      .create()
      .post(
        "https://gameoflifeapi-env.eba-xvhqsdpp.eu-west-2.elasticbeanstalk.com/start/",
        {
          row: row,
          column: column,
          position: getInitialPos(row, column),
        }
      )
      .then((res) => {
        console.log("Received data from API");
        setGames(res);
      });
  };

  return (
    <>
      <button
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
