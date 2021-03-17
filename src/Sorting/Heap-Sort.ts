/**
 * Time Complexity: O(nlogn + nlogn) => O(nlogn)
 */
export default function HeatSort(array: Array<number>): Array<number> {
    buildHeap(array); // nlogn
    for (let i = array.length - 1; i >= 0; i -= 1) {
        // console.log(array);
        swap(0, i, array); // 1
        siftDown(0, i - 1, array); // logn
    }
    return array;
}

function swap(i: number, j: number, array: Array<number>) {
    [array[i], array[j]] = [array[j], array[i]]
}


function siftDown(startIndex: number, endIndex: number, array: Array<number>) {
    let currentIndex = startIndex;
    while(currentIndex < endIndex ) {
        const firstChildIndex = 2 * currentIndex + 1;
        const secondChildIndex = 2 * currentIndex + 2;

        let childToLookFor = firstChildIndex;
        if (secondChildIndex <= endIndex && 
                Number.isSafeInteger(array[secondChildIndex]) && 
                array[secondChildIndex] > array[childToLookFor] ) {
            childToLookFor = secondChildIndex;
        }

        if (childToLookFor > endIndex || 
                !Number.isSafeInteger(array[childToLookFor]) || 
                array[currentIndex] >= array[childToLookFor]) {
            break;
        }
        
        [array[currentIndex], array[childToLookFor]] = [array[childToLookFor], array[currentIndex]]
        currentIndex = childToLookFor;
    }
}

function buildHeap(array: Array<number>) {

    if (array.length < 2) {
        return;
    }

    const lastParentIndex = Math.floor((array.length - 1 - 1) / 2)
    for (let i = lastParentIndex; i >= 0; i -= 1) {
        siftDown(i, array.length - 1, array);
    }
}
