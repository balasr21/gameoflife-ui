import React, { useState, useEffect } from "react";
import { Interface } from "./Interface.component";

export const Control = () => {
  const [row, setRow] = useState(20);
  const [column, setColumn] = useState(20);

  useEffect(() => {
    const timer = setTimeout(() => {}, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="control__container">
      <form className="input__form">
        <label>Row:</label>
        <input
          type="text"
          name="Row"
          placeholder="Row"
          value={row}
          onChange={(e) => {
            setRow(e.target.value);
          }}
        ></input>
        <label>Column:</label>
        <input
          type="text"
          name="Column"
          placeholder="Column"
          value={column}
          onChange={(e) => setColumn(e.target.value)}
        ></input>
      </form>
      {<Interface row={row} column={column} />}
    </div>
  );
};
