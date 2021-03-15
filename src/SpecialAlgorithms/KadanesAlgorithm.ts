export function kadanesAlgorithm(array: Array<number>): number {
    // Write your code here.
      /**
      * Problem:
      * - max sum of non empty sub array
      * - subarray must only contain adjacent numbers
      *	
      * Pseudo Code:
      * - arr => givenArray
      * - maxSum => arr[0]
      * - sumSoFar => 
      * - currentIndex => 1
      * - while currentIndex < arr.length
      * 	- if sumSoFar + value at currentIndex < value at currentIndex
      *			- sumSoFar = currentValue
      * 	- else
      *			- sumSoFar = maxSum + currentValue
      *		-	if maxSum < SumSoFar
      *			-	maxSum = sumSoFar
      */
      
      let maxSum = array[0];
      const reducer = (acc: number, currentValue: number) => {
          if ( (acc + currentValue) < currentValue) {
              maxSum = Math.max(maxSum, currentValue);
              return currentValue;
          } else {
              maxSum = Math.max(maxSum, acc + currentValue);
              return acc + currentValue;
          }
      };
      array.reduce(reducer, 0);
      return maxSum;
  }