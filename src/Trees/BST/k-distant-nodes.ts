/**
 * Given Binary Search Tree, a target value, and k. Find, nodes at k distance from 
 * the node with target value from root node
 * 
 * Example:
 *                  1
 *             2         3
 *         4       5         6
 *                         7   8
 * 
 * node => 3
 * node => child1 => 6
 * node => child2 => 1
 * 
 */
 class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;


    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    parent: TreeNode | null;
    
    constructor(value: number) {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

// Time: O(nd) Space: O(n)
function findNodesDistanceK(tree: BinaryTree, target: number, k: number): Array<number> {
    const treeNode = createBidirectionalTree(tree); // O(n) space O(n)

    if(!treeNode) return [];

    const targetNode = findTarget(treeNode, target); // O(n)

    if(!targetNode) return [];

    const values = kDistanceNodes(targetNode, k); // O(n)

    // for parent nodes
    let currentParent = targetNode.parent;
    let count = 1;
    if (currentParent?.left === targetNode) currentParent.left = null;
    else if (currentParent?.right === targetNode) currentParent.right = null;

    while(currentParent) { // O(d)
        const vls = kDistanceNodes(currentParent, k - count); // O(n)
        values.push(...vls);
        let previousParent = currentParent;
        currentParent = currentParent.parent;
        if (currentParent?.left === previousParent) currentParent.left = null;
        else if (currentParent?.right === previousParent) currentParent.right = null;
        count += 1; 
    }

    return values;
}

function kDistanceNodes(tree: TreeNode | null, k: number): Array<number> {
    if (!tree) return [];
    if (k === 0) return [tree.value];

    const leftValues = kDistanceNodes(tree.left, k - 1);
    const rightValue = kDistanceNodes(tree.right, k - 1);

    return leftValues.concat(rightValue);

}

function createBidirectionalTree(tree: BinaryTree | null): TreeNode | null {
    if (!tree) return null;
    const { value, left, right } = tree;

    const t = new TreeNode(value);

    const leftTNode = createBidirectionalTree(left);
    const rightTNode = createBidirectionalTree(right);

    if (leftTNode) leftTNode.parent = t;
    if (rightTNode) rightTNode.parent = t;

    t.left = leftTNode;
    t.right = rightTNode;

    return t;
}

function findTarget(tree: TreeNode | null, target: number): TreeNode | null {
   
    if (!tree) return null;
    if (tree.value === target) return tree;

    let res = findTarget(tree.left, target);
    if(!res) {
        res = findTarget(tree.right, target);
    }

    return res;
}
