/**
 * Write a function that takes in two non-empty arrays of integers, 
 * finds the pair of numbers (one from each array) whose absolute difference is closest to zero, 
 * and returns an array containing these two numbers, with the number from the first array in the first position.
 * Note that the absolute difference of two integers is the distance between them on the real number line. 
 * For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.
 * You can assume that there will only be one pair of numbers with the smallest difference.
 * 
 * Example: 
 * arrayOne = [-1, 5, 10, 20, 28, 3]
 * arrayTwo = [26, 134, 135, 15, 17]
 * output: [28, 26]
 * 
 * - [-3, -2, 1, 10, 20, 28]
 * - [-1, 1]
 * - [16, 18]
 * 
 * Pseudo Code:
 * pointer1 => -3
 * pointer2 => -1
 * currentDiff => 2
 * currentMinDiff => 
 * currentMinDiffEleOne => 
 * currentMinDiffEleTwo =>
 * 
 * - for ele in arrayOne
 *  - pointer1 => ele
 *      - for e in arrayTwo
 *          - pointer2 => e
 *          - if no currentDiff or abs(pointer1 - pointer2) < currentDiff
 *              - currentDiff = abs(pointer1 - pointer2) 
 *          - else
 *              - break
 *      - if no currentMinDiff or currentDiff < currentMinDiff
 *          - currentMinDiff => currentDiff
 * 
 * 
 */

export function MinimumDifference(arrayOne: Array<number>, arrayTwo: Array<number>): Array<number> {

    arrayOne.sort((a, b) => a-b);
    arrayTwo.sort((a, b) => a-b);

    let pointer1: number = NaN;
    let pointer2: number = NaN;

    let currentDiff: number = NaN;
    let currentMinDiff: number = NaN;
    let currentMinFirstEle: number = NaN;
    let currentMinSecondEle: number = NaN;


    for (const ele of arrayOne) {
        for (const ele2 of arrayTwo) {
            if (!currentDiff || Math.abs(ele - ele2) < currentDiff) {
                currentDiff =  Math.abs(ele - ele2);
                pointer1 = ele;
                pointer2 = ele2;
            } else {
                break;
            }
        }

        if (!currentMinDiff || currentMinDiff > currentDiff) {
            currentMinDiff = currentDiff;
            currentMinFirstEle = pointer1;
            currentMinSecondEle = pointer2;
        }
    }

    return [currentMinFirstEle, currentMinSecondEle];
}
