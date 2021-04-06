/**
 *             1
 *         2        3
 *      4     5 6      7
 * 
 * maxSum = -Infinity;
 * maxSum = max(leftSum + rightSum, maxSum)
 * return max(leftSum, rightSum)
 * 
 * branchSum (node, maxSum)
 *  - if no left and right return [node.value, node.value]
 *  - let [left, max1] = branchSum(node.left, maxSum)
 *  - let [right, max2] = branchSum(node.right, maxSum)
 *  - return  [max(left + node.value, right + node.value), max(left + right + node.value, maxSum, max1, max2)]
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

export default function maxPathSum(tree: BinaryTree | null, maxSum = -Infinity): [number | null, number] {
    if (!tree) return [null, maxSum];
    if (!tree.left && !tree.right) return [tree.value, Math.max(maxSum, tree.value)];

    let [left, max1] = maxPathSum(tree.left, maxSum);
    let [right, max2] = maxPathSum(tree.right, maxSum);

    left = left ? left + tree.value : tree.value;
    right = right ? right + tree.value : tree.value;
    const maxBranchValue = Math.max(left, right);
    const valueWithBranch = left + right - tree.value;
    const tmpMaxSum = Math.max(valueWithBranch, maxBranchValue, max1, max2);

    return [maxBranchValue, tmpMaxSum];
}
