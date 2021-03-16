export const getInitialPos = (row, column) => {
  let firstPos = +column + 2;
  let secondPos = +firstPos + +column + 1;
  let thirdPos = +column * 3 + 1;
  let fourthPos = +thirdPos + 1;
  let fifthPos = +fourthPos + 1;
  let response = [];

  response.push(firstPos);
  response.push(secondPos);
  response.push(thirdPos);
  response.push(fourthPos);
  response.push(fifthPos);

  return response;
};

export const getMatrix = (row, column) => {
  let i,
    j,
    k = 1;
  let data = [];
  let tableData = [];

  for (i = 0; i < row; i++) {
    for (j = 0; j < column; j++) {
      tableData.push(k++);
    }
    data.push(tableData);
    tableData = [];
  }

  return data;
};
