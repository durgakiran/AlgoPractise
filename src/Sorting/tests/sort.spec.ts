import QuickSort from "../Quick-Sort";
import HeapSort from "../Heap-Sort";
import MergeSort from  "../Merge-Sort";

describe('Quick Sort', () => {

    describe('Quick sort', () => {
        it('should sort the array', () => {
            expect(QuickSort([1, 2])).toStrictEqual([1, 2]);
            expect(QuickSort([1, 3, 2])).toStrictEqual([1, 2, 3]);
            expect(QuickSort([8, 5, 2, 9, 5, 6, 3])).toStrictEqual([2, 3, 5, 5, 6, 8, 9]);
        }); 
    })

    describe('heap sort', () => {
        it('should sort the array', () => {
            expect(HeapSort([1, 2])).toStrictEqual([1, 2]);
            expect(HeapSort([1, 3, 2])).toStrictEqual([1, 2, 3]);
            expect(HeapSort([8, 5, 2, 9, 5, 6, 3])).toStrictEqual([2, 3, 5, 5, 6, 8, 9]);
            expect(HeapSort([5, -2, 2, -8, 3, -10, -6, -1, 2, -2, 9, 1, 1])).toStrictEqual([-10, -8, -6, -2, -2, -1, 1, 1, 2, 2, 3, 5, 9]);
            expect(HeapSort([4, 1, 5, 0, -9, -3, -3, 9, 3, -4, -9, 8, 1, -3, -7, -4, -9, -1, -7, -2, -7, 4])).toStrictEqual([-9, -9, -9, -7, -7, -7, -4, -4, -3, -3, -3, -2, -1, 0, 1, 1, 3, 4, 4, 5, 8, 9]);
        }); 
    });

    describe('merge sort', () => {
        it('should sort the array', () => {
            expect(MergeSort([1, 2])).toStrictEqual([1, 2]);
            expect(MergeSort([1, 3, 2])).toStrictEqual([1, 2, 3]);
            expect(MergeSort([8, 5, 2, 9, 5, 6, 3])).toStrictEqual([2, 3, 5, 5, 6, 8, 9]);
            expect(MergeSort([5, -2, 2, -8, 3, -10, -6, -1, 2, -2, 9, 1, 1])).toStrictEqual([-10, -8, -6, -2, -2, -1, 1, 1, 2, 2, 3, 5, 9]);
            expect(MergeSort([4, 1, 5, 0, -9, -3, -3, 9, 3, -4, -9, 8, 1, -3, -7, -4, -9, -1, -7, -2, -7, 4])).toStrictEqual([-9, -9, -9, -7, -7, -7, -4, -4, -3, -3, -3, -2, -1, 0, 1, 1, 3, 4, 4, 5, 8, 9]);
        }); 
    });
});