/**
 * Insertion Sort: you take an element of the given array at a time linearly, insert it into correct position
 * in the sorted subarray.
 * 
 * Pseudo Code:
 * - array => input
 * - for ele, index in array
 *     - while e, i in array and i < index
 *         - if ele < e
 *              swap ele at e
 * - return array
 * 
 * 
 */

export function InsertionSort(array: Array<number>): Array<number> {
    for (let i = 0; i < array.length; i += 1) {
        let currentIndex = i;
        for (let j = i - 1; j >= 0; j -= 1) {
            const rightElement = array[currentIndex];
            const leftElement = array[j];
            if (leftElement > rightElement) {
                array[currentIndex] = leftElement;
                array[j] = rightElement;
                currentIndex = j;
            }
        }
    }
    return array;
}
