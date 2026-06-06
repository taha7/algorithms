/**
 *
 * @param {number} val
 */
export function Node(val) {
  this.value = val;
  /**
   * @type {Node | null}
   */
  this.right = null;
  /**
   * @type {Node | null}
   */
  this.left = null;
}

Node.prototype.insert = function (val) {
  if (val < this.value) {
    if (this.left == null) {
      const node = new Node(val);
      this.left = node;
      return node;
    }
    return this.left.insert(val);
  }

  if (this.right == null) {
    const node = new Node(val);
    this.right = node;
    return node;
  }

  return this.right.insert(val);
};

export function Tree() {
  this.root = null;
  this.size = 0;
}

Tree.prototype.insert = function (val) {
  if (this.root == null) {
    this.root = new Node(val);
    return this.root;
  }
  return this.root.insert(val);
};

/**
 *
 * @param {Array<any>} arr
 */
Tree.prototype.fromArray = function (arr) {
  arr.forEach(this.insert.bind(this));
};

