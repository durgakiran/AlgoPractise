/**
 * 
    [
        [5, 3, -1, 5],
        [-7, 3, 7, 4],
        [12, 8, 0, 0],
        [1, -8, -8, 2],
    ]
    [[8, 2, 4], [-4, 10, 11], [20, 8, 0], [-7, -16, -6]]
    [4, 12, 15, 16, 18, 11, 13, -8, -6]
 */

function maxSumSubMatrix(matrix: number[][], size: number) {
  const subSums: number[][] = [];
  const sums: number[] = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const tmpSums: number[] = [];
    for (let j = 0; j < matrix[i].length - size + 1; j += 1) {
      if (tmpSums.length) {
        tmpSums.push(
          tmpSums[j - 1] - matrix[i][j - 1] + matrix[i][j + size - 1]
        );
        // tmpSums.push(matrix[i].slice(j, size + j).reduce((a, c) => a + c, 0));
      } else {
        tmpSums.push(matrix[i].slice(0, size).reduce((a, c) => a + c, 0));
      }
    }

    subSums.push(tmpSums);
  }

  let maxLength = Math.max(...subSums.map((val) => val.length));
  for (let i = 0; i < subSums.length - size + 1; i += 1) {
    const sliceToConsider = subSums.slice(i, size + i);
    for (let j = 0; j < maxLength; j += 1) {
      const num = sliceToConsider
        .map((arr) => arr[j] || 0)
        .reduce((a, c) => a + c, 0);
      sums.push(num);
    }
  }
  console.log(subSums);
  return Math.max(...sums);
}

console.log(
  maxSumSubMatrix(
    [
      [22, 24, -9, 23],
      [12, 10, -19, 35],
      [45, -20, -20, 99],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [-100, 200, -50, 5],
      [5, 6, 7, 8],
    ],
    3
  )
);
