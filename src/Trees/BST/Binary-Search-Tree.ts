export class BinarySearchTree {

    value: number;
    left: BinarySearchTree | null;
    right: BinarySearchTree | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;    
    }


    getMinValue(): BinarySearchTree {
        let currentNode: BinarySearchTree = this;

        while (currentNode) {
            if (currentNode.left) currentNode = currentNode.left;
            else break;
        }

        return currentNode;
    }


    remove(value: number, parent: BinarySearchTree | null = null) {

        if (value < this.value) {
            if (this.left !== null) {
                this.left.remove(value, this);
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this);
            }
        } else {
            if (this.left !== null && this.right !== null ) {
                this.value = this.right.getMinValue().value;
                this.right.remove(this.value, this);
            } else if (parent === null ) {
                if (this.left !== null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if (this.right !== null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                } else {

                }
            } else if (parent.left === this) {
                parent.left = this.left !== null ? this.left : this.right;
            } else if (parent.right === this) {
                parent.right = this.right !== null ? this.left : this.right;
            }
        }
    }

    find(value: number) {
        let currentNode: BinarySearchTree | null = this;

        while(currentNode) {
            if (currentNode.value < value) {
                currentNode = currentNode.right;
            } else if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else {
                return currentNode;
            }
        }
        
        return null;
    }

    insert(value: number) {
        const bst = new BinarySearchTree(value);

        let currentNode: BinarySearchTree | null = this;


        while (currentNode) {
            if (currentNode.value < value) {
                if (currentNode.right === null) {
                    currentNode.right = bst;
                    break;
                }
                currentNode = currentNode.right;
            } else if (currentNode.value > value) {
                if (currentNode.left === null) {
                    currentNode.left = bst;
                    break;
                }
                currentNode = currentNode.left;
            } else {
                break;
            }
        }

        return this;
    }

}