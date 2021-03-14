import React from "react";
import { getMatrix } from "../util/utils";

export const Matrix = ({ liveCells, row, column }) => {
  let data = getMatrix(row, column);

  return (
    <div className="game">
      <table className="main-table">
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cellId) => {
                let isCellAlive = liveCells && liveCells.includes(cellId);
                return (
                  <th
                    className={`${isCellAlive && "cell__live"}`}
                    key={cellId}
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
