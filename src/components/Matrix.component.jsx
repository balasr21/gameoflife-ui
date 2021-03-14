import React from "react";

export const Matrix = ({ liveCells, row, column }) => {
  let data = [];

  let tableData = [];
  let i,
    j,
    k = 1;

  for (i = 0; i < row; i++) {
    for (j = 0; j < column; j++) {
      tableData.push(k++);
    }
    data.push(tableData);
    tableData = [];
  }

  return (
    <div className="game">
      <table className="main-table">
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cellId) => {
                let isCellAlive = liveCells && liveCells.includes(cellId);
                return (
                  <th className={`${isCellAlive && "cell__live"}`} key={cellId}>
                    {cellId}
                  </th>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
