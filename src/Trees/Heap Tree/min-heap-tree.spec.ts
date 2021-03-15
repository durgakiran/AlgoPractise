import { MinHeap } from "./min-heap-tree";

describe('MinHeap', () => {
    it('swap numbers in array', () => {
        const minHeap = new MinHeap([2, 3, 4]);
        minHeap.swap(0, 2);
        expect(minHeap.heap).toStrictEqual([4, 3, 2]);
    });

    it('siftUp', () => {
        const minHeap = new MinHeap([1, 3, 10, 17, 12, 23, 32]);
        minHeap.heap.push(0);
        minHeap.siftUp(minHeap.heap.length - 1);
        expect(minHeap.heap).toStrictEqual([ 0, 1, 10, 3, 12, 23, 32, 17 ]);
    });

    it('siftDown', () => {
        const minHeap = new MinHeap([1, 3, 10, 17, 12, 23, 32]);
        minHeap.heap.unshift(40);
        // [1, 10, 3, 32, 17, 12, 23, 40]
        minHeap.siftDown(0);
        expect(minHeap.heap).toStrictEqual([1, 10, 3, 32, 17, 12, 23, 40]);
    });

    it('buildTree', () => {
        const minHeap = new MinHeap([3, 1, 10, 17, 12, 23, 32]);
        expect(minHeap.heap).toStrictEqual([1, 3, 10, 17, 12, 23, 32 ]);
    });

    it('testHMap', () => {
        const isMinHeapPropertySatisfied = (array: Array<any>) => {
            for (let currentIdx = 1; currentIdx < array.length; currentIdx++) {
                const parentIdx = Math.floor((currentIdx - 1) / 2);
                if (array[parentIdx] > array[currentIdx]) return false;
            }
            return true;
        };
        const minHeap = new MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]);
        expect(isMinHeapPropertySatisfied(minHeap.heap)).toBe(true);
    });
});
