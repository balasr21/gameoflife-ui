import React from "react";
import { getMatrix } from "../util/utils";

export const Matrix = ({
  start,
  setLiveCells,
  liveCells,
  row,
  column,
  handleChange,
}) => {
  let data = getMatrix(row, column);

  return (
    <div className="game">
      <table className="main-table">
        <tbody className={`${start && "click__disabled"}`}>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cellId) => {
                let isCellAlive = liveCells && liveCells.includes(cellId);

                return (
                  <th
                    className={`${isCellAlive && "cell__live"}`}
                    key={cellId}
                    onClick={(e) => handleChange(e, cellId, isCellAlive)}
                  ></th>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
