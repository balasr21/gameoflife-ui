import React from "react";
import { Interface } from "./Interface.component";
import { useMatrixDimensionValue } from "../context/index";

export const Control = () => {
  const { dimension, setDimension } = useMatrixDimensionValue();

  return (
    <div className="control__container">
      <form className="input__form">
        <label>Row:</label>
        <input
          type="text"
          name="Row"
          placeholder="Row"
          value={dimension.row}
          onChange={(e) => {
            setDimension({
              column: dimension.column,
              row: e.target.value,
            });
          }}
        ></input>
        <label>Column:</label>
        <input
          type="text"
          name="Column"
          placeholder="Column"
          value={dimension.column}
          onChange={(e) => {
            setDimension({
              row: dimension.row,
              column: e.target.value,
            });
          }}
        ></input>
      </form>
      {<Interface row={dimension.row} column={dimension.column} />}
    </div>
  );
};
