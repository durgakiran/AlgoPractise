/**
 * You're given a non-empty array of positive integers
 * where each integer represents the maximum number of
 * steps you can take forward in the array. For example,
 * if the element at index 1 is 3, you can go from index 1 to index 2, 3, or 4.
 * Write a function that returns the minimum number of jumps needed
 * to reach the final index.
 * Note that jumping from index i to index i + x always
 * constitutes one jump, no matter how large x is.
 *
 *
 * array = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
 *
 * maxApproachableIndex => array[0]
 * maxJumps => 1
 * jumps => []
 *
 * for i in array start from jumps.length
 *  - tmpMaxApproachableIndex => maxApproachableIndex
 *  -  for start from i ele <= maxApproachableIndex in array
 *      - jumps.push(maxJumps)
 *      - tmpMaxApproachableIndex => max(ele + index, maxApproachableIndex)
 *  - jumps += 1;
 *  - maxApproachableIndex => tmpMaxApproachableIndex
 *
 */

export default function MinNumberOfJumps(arr: Array<number>) {
  let maxApproachableIndex = 0;
  let currentJumps = 0;
  let lastJump = 0;

  let currentIndex = 0;

  while (currentIndex < arr.length) {
    let tmpMaxApproachableIndex = maxApproachableIndex;
    let upto = Math.min(maxApproachableIndex, arr.length - 1);
    for (let j = currentIndex; j <= upto; j += 1) {
      lastJump = currentJumps;
      currentIndex += 1;
      tmpMaxApproachableIndex = Math.max(arr[j] + j, tmpMaxApproachableIndex);
    }
    currentJumps += 1;
    maxApproachableIndex = tmpMaxApproachableIndex;
  }

  return lastJump;
}

console.log(
  MinNumberOfJumps([3, 12, 2, 1, 2, 3, 15, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 1])
);
