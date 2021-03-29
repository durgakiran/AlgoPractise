/**
 * Given an array of integers, change it in such a way that it follows 
 * a zig-zag pattern. A zig-zag array is one where for each integer, 
 * its adjacent integers are both greater than or less than itself.
 * In other words, using L to mean a lower value and H to mean higher, 
 * the array follows either the pattern  [ L, H, L, H..] OR [H, L, H,L]. 
 * To make the array a zig-zag array, you can replace any element with 
 * any other integer(positive, negative or zero)
 * 
 * What is the minimum number of replacements required to accomplish this?
 * 
 * 
 * Example: [1, 2, 3, 4, 5]
 * 
 * [1, 2, 3, 4, 5]
 * [L, H, L, H, L]
 *        -     -
 * [H, L, H, L, H]
 *     -     -  
 * 
 * 1  +  2  - 3  +  4  - 5
 * 
 * - for index => i of arr
 *  - if i != 0
 *      -  diff = arr[i] - arr[i-1]
 *      -  if i => odd
 *          - diff > 0 otherwise operation needed on i
 *      -  if i => even
 *          - diff < 0 otherwise operation needed on i
 * 
 * [0, 0, 0, 0, 0]
 * [L, H, L, H, L]
 *     +     + 
 * 
 */


export default function minimumNumberOfOperationsNeeded(arr: Array<number>): number {
    const leftFirst = lowFirstOrder(arr);
    const highFirst = hightFirstOrder(arr);

    return Math.min(leftFirst, highFirst);
}



 function hightFirstOrder(arr: Array<number>): number {
    if(arr.length <= 1 ) return 0;

    let numberOfOperations = 0;

    for (let i = 1; i < arr.length; i += 1) {
        const diff = arr[i] - arr[i - 1];
        if ((i % 2) === 0) {
            if(diff > 0) {
                continue;
            } else {
                numberOfOperations += 1;
                i += 1;
            }
        } else {
            if (diff < 0) {
                continue;
            } else {
                numberOfOperations += 1;
                i += 1;
            }
        }
    }

    return numberOfOperations;
}


function lowFirstOrder(arr: Array<number>): number {
    if(arr.length <= 1 ) return 0;

    let numberOfOperations = 0;

    for (let i = 1; i < arr.length; i += 1) {
        const diff = arr[i] - arr[i - 1];
        if ((i % 2) === 0) {
            if(diff < 0) {
                continue;
            } else {
                numberOfOperations += 1;
                i += 1;
            }
        } else {
            if (diff > 0) {
                continue;
            } else {
                numberOfOperations += 1;
                i += 1;
            }
        }
    }

    return numberOfOperations;
}

