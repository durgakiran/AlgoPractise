/**
 * You're given an array of non-negative integers
 * where each non-zero integer represents the
 * height of a pillar of width 1. Imagine water
 * being poured over all of the pillars; write a
 * function that returns the surface area of the
 * water trapped between the pillars viewed from
 * the front. Note that spilled water should be ignored.
 *
 * [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]
 *
 * [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]
 *
 * [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, -1, 1, 0, 3]
 *
 * [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, -1, -1, 0, 3]
 *
 * [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, -1, -1, 0, -3]
 *
 * [0, 8, 0, 0, -5, 0, 0, 10, 0, 0, -1, -1, 0, -3]
 *
 *
 */

function WaterArea(heights: Array<number>) {
  let totalArea = 0;
  let numbOfPos = heights.reduce((a, c) => (c > 0 ? a + 1 : a), 0); // n

  while (numbOfPos > 1) {
    // n
    const [min, minIndex] = findMinValueAndIndex(heights); // n
    let maxLeftNegative = 0;
    for (let j = minIndex - 1; j >= 0; j -= 1) {
      if (heights[j] > 0) {
        if (min + maxLeftNegative <= 0) {
          break;
        }
        totalArea += (min + maxLeftNegative) * (minIndex - j - 1);
        break;
      } else {
        maxLeftNegative = Math.min(maxLeftNegative, heights[j]);
      }
    }

    let maxRightNegative = 0;
    for (let j = minIndex + 1; j < heights.length; j += 1) {
      if (heights[j] > 0) {
        if (min + maxRightNegative <= 0) {
          break;
        }
        totalArea += (min + maxRightNegative) * (j - minIndex - 1);
        break;
      } else {
        maxRightNegative = Math.min(maxRightNegative, heights[j]);
      }
    }

    heights[minIndex] = -1 * min;
    numbOfPos -= 1;
  }

  return totalArea;
}

function findMinValueAndIndex(arr: Array<number>) {
  if (!arr.length) return [-1, -1];
  let currentPosMin = Infinity;
  let currentMinIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    const currentEle = arr[i];
    if (currentEle > 0 && currentEle < currentPosMin) {
      currentPosMin = currentEle;
      currentMinIndex = i;
    }
  }
  return [currentPosMin, currentMinIndex];
}

console.log(WaterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]));
