module.exports = function countCats(matrix) {
  let numberOfCats = 0;

  for (const arr of matrix) {
    for (let i = 0; i <= arr.length; i++) {
      numberOfCats += (arr[i] === '^^') ? 1 : 0;
    }
  }

  return numberOfCats;
};
