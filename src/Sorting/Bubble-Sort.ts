/**
 * Problem: Write a function that takes in an array of integers and returns a sorted version of that array.
 * Use the Bubble Sort algorithm to sort the array.
 * 
 * 
 * Bubble Sort: bubbles  each element  with next element 
 * 
 * Pseudo Code:
 * - array => numbers
 * - lastSortedIndex => array.length
 * - sorted => false
 * - while not sorted
 *      - for let i => 0 to lastSortedIndex - 1
 *          - if (array[i + 1] and array[i] > array[i + 1])
 *              -   swap elements
 *      - lastSortedIndex -= 1
 *      if lastSortedIndex === 0
 *          - sorted = true
 * - time complexity:
 *  - first Loop : n operations
 *  - second loop: n - 1 operations
 *  - third loop: n - 2 operations
 *  - therefore: time Complexity => n + n - 1 + n -2 + ...
 *  - timeComplexity = O(n**2) // n(n - 1) / 2
 */

function BubbleSort(array: Array<number>): Array<number> {

    if (array.length < 2) {
        return array;
    }

    let sorted = false;
    let lastSortedIndex = array.length;

    while (!sorted) {
        for (let i = 0; i < lastSortedIndex - 1; i += 1) {
            const leftElement = array[i];
            const rightElement = array[i + 1];
            if ( leftElement > rightElement ) {
                array[i + 1] = leftElement;
                array[i] = rightElement;
            }   
        }
        lastSortedIndex -= 1;
        if (lastSortedIndex === 0 ) {
            sorted = true;
        }

    }
    return array;
}

