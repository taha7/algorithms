const { Node, Tree } = require("./binarySearchTree");

const tree = new Tree();
tree.insert(20);
tree.insert(15);
tree.insert(10);
tree.insert(18);
tree.insert(5);
tree.insert(7);
tree.insert(2);
tree.insert(25);
tree.insert(23);
tree.insert(28);

/**
 *
 * @param {Node} root
 */
const treeRightSideRecursive = (root) => {
  const result = [];

  /**
   *
   * @param {Array<Node>} level
   */
  const BFSLevelRecursive = (level) => {
    if (level.length > 0) {
      result.push(level[level.length - 1].value);
      const nextLevel = [];
      for (let i = 0; i < level.length; i++) {
        const currentNode = level[i];
        if (currentNode.left) nextLevel.push(currentNode.left);
        if (currentNode.right) nextLevel.push(currentNode.right);
      }
      BFSLevelRecursive(nextLevel);
    }
  };

  if (root) {
    BFSLevelRecursive([root]);
  }

  return result;
};

console.log(treeRightSideRecursive(tree.root));

const treeRightSide = (root) => {
  const result = [];
  let queue = [];

  if (root != null) queue.push(root);

  while (queue.length > 0) {
    result.push(queue[queue.length - 1].value);
    const nextLevel = [];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode.left) nextLevel.push(currentNode.left);
      if (currentNode.right) nextLevel.push(currentNode.right);
    }
    queue = nextLevel;
  }

  return result;
};

console.log(treeRightSide(tree.root));

