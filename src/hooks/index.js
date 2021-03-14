import { useState, useEffect } from "react";
import axios from "axios";

export const useMatrixPosition = (row, column, initialPos) => {
  console.log("API Call for ", row, column);

  const [games, setGames] = useState([]);

  const fetchData = () => {
    console.log("Making Request....");
    axios
      .create()
      .post(
        "http://gameoflifeapi-env.eba-afgjpfkt.eu-west-2.elasticbeanstalk.com/start/",
        {
          row: row,
          column: column,
          position: initialPos,
        }
      )
      .then((res) => {
        console.log("Received data from API");
        setGames(res);
      });
  };

  useEffect(fetchData, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { games, setGames };
};
