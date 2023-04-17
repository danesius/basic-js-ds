const { NotImplementedError } = require('../extensions/index.js');

// const { nodenew } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using nodenew from extensions
*/
class nodenew {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootnodenew = null;
  }

  root() { return this.rootnodenew; }

  add(data) {
    const newnodenew = new nodenew(data);
    if (this.rootnodenew === null) {
      this.rootnodenew = newnodenew;
    } else {
      this.insertnodenew(this.rootnodenew, newnodenew);
    }
  }

  insertnodenew(nodenew, newnodenew) {
    if (newnodenew.data < nodenew.data) {
      if (nodenew.left === null) {
        nodenew.left = newnodenew;
      } else {
        this.insertnodenew(nodenew.left, newnodenew);
      }
    } else {
      if (nodenew.right === null) {
        nodenew.right = newnodenew;
      } else {
        this.insertnodenew(nodenew.right, newnodenew);
      }
    }
  }

  has(data) { return this.searchnodenew(this.rootnodenew, data) !== null; }

  find(data) { return this.searchnodenew(this.rootnodenew, data); }

  searchnodenew(nodenew, data) {
    if (nodenew === null) {
      return null;
    } else if (data < nodenew.data) {
      return this.searchnodenew(nodenew.left, data);
    } else if (data > nodenew.data) {
      return this.searchnodenew(nodenew.right, data);
    } else {
      return nodenew;
    }
  }

  remove(data) { this.rootnodenew = this.removenodenew(this.rootnodenew, data); }

  removenodenew(nodenew, key) {
    if (nodenew === null) {
      return null;
    } else if (key < nodenew.data) {
      nodenew.left = this.removenodenew(nodenew.left, key); return nodenew;
    } else if (key > nodenew.data) {
      nodenew.right = this.removenodenew(nodenew.right, key); return nodenew;
    } else {
      if (nodenew.left === null && nodenew.right === null) {
        nodenew = null; return nodenew;
      }
      if (nodenew.left === null) {
        nodenew = nodenew.right; return nodenew;
      } else if (nodenew.right === null) {
        nodenew = nodenew.left; return nodenew;
      }
      const aux = this.findMinnodenew(nodenew.right);
      nodenew.data = aux.data;
      nodenew.right = this.removenodenew(nodenew.right, aux.data); return nodenew;
    }
  }

  findMinnodenew(nodenew) {
    if (nodenew.left === null) {
      return nodenew;
    } else {
      return this.findMinnodenew(nodenew.left);
    }
  }

  min() {
    if (this.rootnodenew === null) {
      return null;
    }
    let currentnodenew = this.rootnodenew;
    while (currentnodenew.left !== null) {
      currentnodenew = currentnodenew.left;
    }
    return currentnodenew.data;
  }

  max() {
    if (this.rootnodenew === null) {
      return null;
    }
    let currentnodenew = this.rootnodenew;
    while (currentnodenew.right !== null) {
      currentnodenew = currentnodenew.right;
    }
    return currentnodenew.data;
  }
}

module.exports = {
  BinarySearchTree
};