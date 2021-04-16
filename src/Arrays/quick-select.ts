/**
 * Write a function that takes in an array of distinct
 * integers as well as an integer k and that returns the
 * kth smallest integer in that array.
 * The function should do this in linear time, on average.
 *
 * array = [8, 5, 2, 9, 7, 6, 3]
   k = 3

   length => 7
   7 third lowest
   5 second lowest
   2 first lowest
   


 *
 */

export function QuickSelect(arr: Array<number>, k: number) {
  let sortedUptoK = arr.slice(0, k).sort((a, b) => a - b);

  for (let i = k; i < arr.length; i += 1) {
    const ele = arr[i];
    sortedUptoK.push(ele);
    for (let j = k; j > 0; j -= 1) {
      if (sortedUptoK[j] < sortedUptoK[j - 1]) {
        sortedUptoK[j] = sortedUptoK[j - 1];
        sortedUptoK[j - 1] = ele;
      } else {
        break;
      }
    }
    sortedUptoK.pop();
  }

  return sortedUptoK.pop();
}

console.log(QuickSelect([8, 5, 2, 9, 7, 6, 3], 3));
