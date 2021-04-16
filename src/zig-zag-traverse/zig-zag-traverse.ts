/**
 * Write a function that takes in an n x m two-dimensional array
 * (that can be square-shaped when n == m) and returns a one-dimensional array
 * of all the array's elements in zigzag order. Zigzag order starts at the
 * top left corner of the two-dimensional array, goes down by one element,
 * and proceeds in a zigzag pattern all the way to the bottom right corner.
 *
 * ex: 
 *  array = [
        [1,  3,  4, 10],
        [2,  5,  9, 11],
        [6,  8, 12, 15],
        [7, 13, 14, 16],
    ]

    maxRows = array.length;
    maxCols = Math.max(array.map(a => a.length));
    currentElemRow = i;
    currentElemCol = j;
    direction = 'down'

    while(currentElemRow < maxRows && currentElemCol < maxCols ) {
        if (direction === 'down') {
            push currentElem if defined;
            currentElemRow += 1;
            currentElemCol -= 1;

            if (currentElemRow >= maxRows) {
                currentElmRow -= 1;
                currentElemCol += 2;
                direction = 'up';
            }else if (currentElemCol < 0 ) {
                currentElemCol += 1;
                direction = 'up';
            } 

        } else {
            push currentElem if defined;
            currentElemRow -= 1;
            currentElemCol += 1;

            if (currentElemCol >= maxCols) {
                currentElemCol -= 1;
                currentElemRow += 2;
                direction = 'down'
            } else if (currentElemRow < 0 ) {
                currentElemRow = 0;
                direction = 'down'
            }
        }
    }

 *
 */

function zigZagTraverse(array: number[][]) {
  const maxRows = array.length;
  const maxCols = Math.max(...array.map((a) => a.length));
  let currentElemRow = 0;
  let currentElemCol = 0;
  let direction = "down";
  const flattened = [];

  while (currentElemRow < maxRows && currentElemCol < maxCols) {
    if (array[currentElemCol][currentElemRow] != undefined) {
      flattened.push(array[currentElemRow][currentElemCol]);
    }

    if (direction === "down") {
      currentElemRow += 1;
      currentElemCol -= 1;

      if (currentElemRow >= maxRows) {
        currentElemRow -= 1;
        currentElemCol += 2;
        direction = "up";
      } else if (currentElemCol < 0) {
        currentElemCol += 1;
        direction = "up";
      }
    } else {
      currentElemRow -= 1;
      currentElemCol += 1;

      if (currentElemCol >= maxCols) {
        currentElemCol -= 1;
        currentElemRow += 2;
        direction = "down";
      } else if (currentElemRow < 0) {
        currentElemRow = 0;
        direction = "down";
      }
    }
  }

  return flattened;
}

console.log(
  zigZagTraverse([
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
  ])
);
