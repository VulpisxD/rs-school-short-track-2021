/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const minesMatrix = [];
  const shape = [matrix[0].length, matrix.length];
  for (let i = 0; i < shape[1]; i++) {
    const arr = Array(shape[0]);
    minesMatrix.push(arr);
  }
  for (let i = 0; i < shape[1]; i++) {
    for (let j = 0; j < shape[0]; j++) {
      if (matrix[i][j]) {
        minesMatrix[i][j] = 1;
      } else {
        let num = 0;
        if (matrix[i - 1]) {
          if (matrix[i - 1][j - 1]) num += 1;
          if (matrix[i - 1][j]) num += 1;
          if (matrix[i - 1][j + 1]) num += 1;
        }
        if (matrix[i][j - 1]) num += 1;
        if (matrix[i][j]) num += 1;
        if (matrix[i][j + 1]) num += 1;
        if (matrix[i + 1]) {
          if (matrix[i + 1][j - 1]) num += 1;
          if (matrix[i + 1][j]) num += 1;
          if (matrix[i + 1][j + 1]) num += 1;
        }
        minesMatrix[i][j] = num;
      }
    }
  }
  return minesMatrix;
}

module.exports = minesweeper;
