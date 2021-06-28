/**
 * Search In Sorted Matrix
 * You're given a two-dimensional array (a matrix) of distinct integers and a target integer.
 * Each row in the matrix is sorted, and each column is also sorted; the matrix 
 * doesn't necessarily have the same height and width.
 * Write a function that returns an array of the row 
 * and column indices of the target integer if it's 
 * contained in the matrix, otherwise [-1, -1].
 * 
 * 
 * 
 * matrix = [
        [1, 4, 7, 12, 15, 1000],
        [2, 5, 19, 31, 32, 1001],
        [3, 8, 24, 33, 35, 1002],
        [40, 41, 42, 44, 45, 1003],
        [99, 100, 103, 106, 128, 1004],
    ]

    middle row, middle element => 33
    33 < 44
    startIndex at = 33
    new submatrix => row 3, 4, 5; column: 4, 5, 6
    3, 4
    4, 5


    startIndex = [0, 0];
    endIndex = [row.length - 1, column.length - 1]


    while((endIndex[0] - startIndex[0]) < 2 && (endIndex[1] - startIndex[1]) < 2)) {
        middleIndex = [Math.flor((endIndex[0] - startIndex[0]) / 2), Math.flor((endIndex[1] - startIndex[1]) / 2)];
        if (element at middleIndex > target) {
            endIndex = middleIndex;
        }

        if (element at middleIndex < target) {
            startIndex = middleIndex;
        }

        if (element at middleIndex === target) {
            return middleIndex;
        }
    }


    if (element at startIndex === target) return startIndex;
    if (element at endOfStartRow === target) return startIndex with plus column
    if (element at endIndex === target ) return endIndex;
    if (element at start of last row === target) return rowIndex;

    return [-1, -1]
 
 */

type Range = [number, number];
export default function searchInSortedMatrix(
  matrix: number[][],
  target: number
): Range {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return [row, col];
    }
  }
  return [-1, -1];
}

console.log(
  searchInSortedMatrix(
    [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ],
    44
  )
);
