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
}

let myBST = new BST(256);
console.log(myBST);
