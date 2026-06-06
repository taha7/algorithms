const { Tree } = require("./binarySearchTree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * O(h) — the call stack holds at most one root-to-leaf path at a time, where h is the tree height. O(log n) for balanced trees, O(n) for
  skewed
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root == null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

const tree = new Tree();
tree.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(tree.root));

const tree2 = new Tree();
tree2.fromArray([1, null, 2]);

console.log(maxDepth(tree2.root));

