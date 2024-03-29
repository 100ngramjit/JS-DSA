class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    const rootNode = new Node(value);
    this.root = rootNode;
  }

  //INSERT (insert a node in the BST)

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  //CONTAINS (if BST has a given specific value / node)

  contains(value) {
    if (!this.root) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  //MINIMUM VALUE

  minValue(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}

let myBST = new BST(25);
myBST.insert(6);
myBST.insert(44);
myBST.insert(78);

console.log(myBST);
console.log(myBST.minValue(myBST.root));
