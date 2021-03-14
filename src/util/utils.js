export const getInitialPos = (row, column) => {
  let firstPos = column + 2;
  let secondPos = firstPos + column + 1;
  let thirdPos = column * 3 + 1;
  let fourthPos = thirdPos + 1;
  let fifthPos = fourthPos + 1;
  let response = [];

  response.push(firstPos);
  response.push(secondPos);
  response.push(thirdPos);
  response.push(fourthPos);
  response.push(fifthPos);
  return response;
};
