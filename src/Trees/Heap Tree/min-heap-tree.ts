/**
 * construct a heap tree
 *      
 *              1
 *      3               10
 * 17       12      23      32
 * 
 * - min heap tree is binary tree
 * - all child of parent node should be grater than parent node
 * - order among is siblings is not guaranteed
 * - can be represented with an array [1, 3, 10, 17, 12, 23, 32]
 * - for node at index n it's child would be at index (2n + 1) and (2n + 2)
 * - for node at index n it's parent would be at index math.floor((n-1) / 2)
 * 
 */
export class MinHeap {

    heap: Array<any>;

    constructor(array: Array<any>) {
        this.heap = this.buildTree(array);
    }


    buildTree(array: Array<any>): Array<any> {
        const firstParentIndex = Math.floor((array.length - 2) / 2);
        for (let i = firstParentIndex; i >= 0  ; i-- ) {
            array = this.siftDown(i, array);
        }
        return array;
    }

    // o(logn)
    siftUp(currentIndex: number, hArray = this.heap): Array<any> {
        /**
         * given an index in the heap array
         * we need to shift the value position to upwards until min heap
         * tree condition satisfies
         * 
         * pseudo code:
         *  - take a pointer to currentIndex
         *  - while => true
         *      - compare currentIndex value in heap array with parentIndex value
         *      - if value at currentIndex < value at Math.floor(currentIndex - 1 / 2) and parent exists
         *             - swap values
         *             - new currentIndex would be parentIndex
         *      - else
         *             - break the while loop 
         */
        let tmpCurrentIndex = currentIndex;
        while(true) {
            const parentIndex = Math.floor(tmpCurrentIndex - 1 )/ 2;
            if (parentIndex < 0) break;
            if (hArray[tmpCurrentIndex] >= hArray[parentIndex]) {
                break;
            }
            this.swap(tmpCurrentIndex, parentIndex, hArray);
            tmpCurrentIndex = parentIndex;
        }

        return hArray;
    }

    // o(logn)
    siftDown(currentIndex: number, hArray = this.heap): Array<any> {
        /**
         * given an index in the heap array
         * we need to shift the value position to downwards until min heap
         * tree condition satisfies
         * 
         * pseudo code:
         *  - take a pointer to currentIndex
         *  - while => true
         *      - compare currentIndex value in heap array with children values
         *
         *      - if value at currentIndex > children's value at (2n+1) (2n + 2) and children exists
         *             - swap values with lowest children
         *             - new currentIndex would be lowest child
         *      - else
         *             - break the while loop 
         */
         let tmpCurrentIndex = currentIndex;
         while(true) {
             const child1Index = 2 * (tmpCurrentIndex) + 1;
             const child2Index = 2 * (tmpCurrentIndex) + 2;
             let lowestChildIndex = child1Index;

             if ( child1Index >= hArray.length) {
                 break;
             }

             if ( child2Index < hArray.length && hArray[child1Index] > hArray[child2Index] ) {
                lowestChildIndex = child2Index;
             }

             if (hArray[tmpCurrentIndex] < hArray[lowestChildIndex]) {
                 break;
             }

             this.swap(tmpCurrentIndex, lowestChildIndex, hArray);
             tmpCurrentIndex = lowestChildIndex;
         }
         return hArray;
    }

    insert(value: number): void {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
        
    }

    peek(): number {
        return this.heap[0];
    }

    remove() {
        this.swap(0, this.heap.length - 1);
        const valueToRemove = this.heap.pop();       
        this.siftDown(0);
        return valueToRemove;
    }

    swap(index1: number, index2: number, hArray = this.heap): void {
        const index1Value = hArray[index1];
        hArray[index1] = hArray[index2];
        hArray[index2] = index1Value;
    }
}
