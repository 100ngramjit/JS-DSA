//node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  //ENQUEUE (adding a node to the first/start)

  enqueue(value) {
    let newNode = new Node(value);
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.length++;
    return this;
  }
}

const myQueue = new Queue(25);
myQueue.enqueue(99);
console.log(myQueue);
