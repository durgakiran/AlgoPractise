/**
 * 
 */

export default function MergeSort(array: Array<number>): Array<number> {
    const sortedArray = mergeSortHelper(array);
    return sortedArray;
}

function mergeSortHelper(array: Array<number>): Array<number> {
    if (array.length < 2) {
        return array;
    }

    const middleIndex = Math.ceil(array.length / 2); // space : 1

    const subArray1 = mergeSortHelper(array.splice(0, middleIndex)); // space: k
    const subArray2 = mergeSortHelper(array); // space: n - k
    // console.log(array, subArray1, subArray2);
    const mergedArray = []; // n

    let currentFirstArrayIndex = 0; // 1
    let currentSecondArrayIndex = 0; // 1

    while (currentFirstArrayIndex < subArray1.length && currentSecondArrayIndex < subArray2.length) {
        if (subArray2[currentSecondArrayIndex] < subArray1[currentFirstArrayIndex]) {
            mergedArray.push(subArray2[currentSecondArrayIndex]);
            currentSecondArrayIndex += 1;
        } else {
            mergedArray.push(subArray1[currentFirstArrayIndex]);
            currentFirstArrayIndex += 1;
        }
    }

    return mergedArray.concat(subArray1.splice(currentFirstArrayIndex)).concat(subArray2.splice(currentSecondArrayIndex));
}

