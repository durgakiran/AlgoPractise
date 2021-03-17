export default function QuickSort(array: Array<number>): Array<number> {
    if (array.length <= 1 ) {
        return array;
    }

    QuickSortHelper(array, 0, array.length - 1);

    return array;
}

function QuickSortHelper(array: Array<number>, startIndex: number, endIndex: number): Array<number> {
    if (array.length <= 1 ) {
        return array;
    }

    if ((endIndex - startIndex) < 1) {
        return array;
    }

    const pointerIndex = startIndex;
    let leftPointerIndex = startIndex + 1;
    let rightPointerIndex = endIndex;
    

    for (let i = startIndex; i <= endIndex; i += 1) {
        const pointerValue = array[pointerIndex];
        let leftPointer = array[leftPointerIndex];
        let rightPointer = array[rightPointerIndex];

        if (pointerIndex === rightPointerIndex) {
            break;
        }

        if (leftPointerIndex > rightPointerIndex && rightPointer < pointerValue) {
            array[pointerIndex] = rightPointer;
            array[rightPointerIndex] = pointerValue;
            break;
        }

        if (pointerValue < leftPointer && pointerValue > rightPointer) {
            array[leftPointerIndex] = rightPointer;
            array[rightPointerIndex] = leftPointer;
            [leftPointer, rightPointer] = [rightPointer, leftPointer];
        }

        if (pointerValue >= leftPointer) {
            leftPointerIndex += 1;
        }

        if (pointerValue <= rightPointer) {
            rightPointerIndex -= 1;
        }
    }

    if ((rightPointerIndex - 1) > 0) {
        QuickSortHelper(array, startIndex, rightPointerIndex - 1);
    }
    
    if ((rightPointerIndex + 1) < array.length - 1 ) {
        QuickSortHelper(array, rightPointerIndex + 1, endIndex);
    }
    
    // console.log(array, startIndex);
    return array;
}
