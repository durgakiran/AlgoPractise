/**
 * [10, 70, 20, 30, 50, 11, 30]
 * [10]
 * [10, 70]
 * [10, 20]
 * [10, 30]
 * [10, 50]
 * [10, 11]
 * [10, 20, 30, 50]
 * 
 * [30]
 * [[11, 30], [11], [30]]
 * [[11, 30], [11], [50], [30]]
 * [[11, 30], [11], [30, 50], [30], [30]]
 * [[11, 30], [11], [20, 30, 50],  [30, 50], [20, 30], [30], ]
 * 
 * */
export function IncreasingSubSequence(arr: Array<number>): number[][] {
    if (arr.length === 1) return [[...arr]];

    const [currentElement, ...remaining] = arr;
    const subSeq = IncreasingSubSequence(remaining);
    const newsubSeqs = [];

    for (const a of subSeq) {
        if (a[0] > currentElement) {
            const newA = [currentElement].concat(a);
            newsubSeqs.push(newA);
        }
        newsubSeqs.push([currentElement]);
        newsubSeqs.push(a);
    }
    return newsubSeqs;
}

function findSums(arr: Array<number>) {
    const subSeqs = IncreasingSubSequence(arr);
    const sums = subSeqs.map((arr) => arr.reduce((a, c) => a + c));
    const max = Math.max(...sums);

    return [max, subSeqs[sums.findIndex((v) => v === max)]];
}

console.log(findSums([10, 70, 20, 30, 50, 11, 30]));


/**
 * ==========================================================
 * Solution 2:
 * ==========================================================
 */

/**
 * 
 */
export function maxSumOfIncreasingSubSequence(array: number[]): [number, number[]] {
    const arr = [];


    

    return [-1, [-1]];
}

