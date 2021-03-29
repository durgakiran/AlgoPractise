/**
 * Non-Constructible Change
 * ------------------------
 * Problem: Given an array of positive integers representing the values of coins in your possession,
 * write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create.
 * The given coins can have any positive integer value and aren't necessarily unique 
 * (i.e., you can have multiple coins of the same value).
 * 
 * 
 * For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. If you're given no coins, 
 * the minimum amount of change that you can't create is 1.
 * 
 * Sample Input
 * coins = [5, 7, 1, 1, 2, 3, 22]
 * Sample Output
 * 20
 * 
 * 
 * Example:
 * [1, 2, 5]
 * 
 * 1,
 *  2, 3,
 *     5, 6, 7 
 * 
 * [5, 7, 1, 1, 2, 3, 22]
 * [1, 1, 2, 3, 5, 7, 22]
 * 
 * 1
 *  1  2
 *      2   3   3   4
 *                   4  4   5
 *                          6   6   7   7   8   8   9
 *                                                  7   8   8   9   9   10  10  11  11  11  12  13  13  14  14  15  15  16
 *                                                                                     
 * 
 * 
 */

export function NonConstructableChange(array: Array<number>): number {

    // T: O(nlogn) S: O(1) only array reference stored sort function mutates data
    array.sort((a, b) => a - b);

    // S: O(1)
    let minSum = 0;

    for (const c of array) {
        if ( c > minSum + 1) return minSum + 1;

        minSum += c;
    }

    return minSum + 1;
}


