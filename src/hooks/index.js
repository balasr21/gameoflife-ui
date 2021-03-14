import { useState, useEffect } from "react";
import axios from "axios";

export const useMatrixPosition = (row, column, initialPos) => {
  const [response, setResponse] = useState([]);

  const fetchData = () => {
    axios
      .create()
      .post("http://localhost:8080/start/", {
        row: row,
        column: column,
        position: initialPos,
      })
      .then((res) => {
        setResponse(res);
      });
  };

  useEffect(fetchData, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { response, setResponse };
};
