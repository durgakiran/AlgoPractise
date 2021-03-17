export function SelectionSort(array: Array<number>): Array<number> {
    for (let i = 0; i < array.length; i += 1) {
        const currentElement = array[i];
        let minIndexInRemainingArray = i;
        for (let j = i + 1; j < array.length; j += 1) {
            const newElement = array[j];
            if (newElement < array[minIndexInRemainingArray]) {
                minIndexInRemainingArray = j;
            }
        }
        const minElement = array[minIndexInRemainingArray];
        array[i] = minElement;
        array[minIndexInRemainingArray] = currentElement;
    }
    return array;
}
