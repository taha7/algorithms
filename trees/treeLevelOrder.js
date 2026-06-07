const { Tree } = require("./binarySearchTree");

const tree = new Tree();
tree.fromArray([9, 3, 15, 7, 20]);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  let queue = [];
  if (root != null) queue.push(root);
  while (queue.length) {
    result.push(queue.map((n) => n.value));
    const nextLevel = [];
    for (let i = 0; i < queue.length; i++) {
      const currentNode = queue[i];
      if (currentNode.left) nextLevel.push(currentNode.left);
      if (currentNode.right) nextLevel.push(currentNode.right);
    }
    queue = nextLevel;
  }

  return result;
};

var levelOrder2 = function (root) {
  const result = [];
  const queue = [];
  if (root != null) queue.push(root);
  while (queue.length) {
    result.push(queue.map((n) => n.value));
    let levelSize = queue.length;
    let counter = 0;
    while (levelSize > counter) {
      //FIXME: try to find an alternative to shift as it takes => O(n)
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      counter++;
    }
  }

  return result;
};

var levelOrderR = function (root) {
  const result = [];

  /**
   *
   * @param {Array<Node>} level
   */
  const BFSLevelRecursive = (level) => {
    if (level.length) {
      result.push(level.map((n) => n.value));
      const nextLevel = [];
      for (let i = 0; i < level.length; i++) {
        const currentNode = level[i];
        if (currentNode.left) nextLevel.push(currentNode.left);
        if (currentNode.right) nextLevel.push(currentNode.right);
      }
      BFSLevelRecursive(nextLevel);
    }
  };

  if (root) BFSLevelRecursive([root]);
  return result;
};

console.log(levelOrderR(tree.root));
console.log(levelOrder(tree.root));
console.log(levelOrder2(tree.root));

