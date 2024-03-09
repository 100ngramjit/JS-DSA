//node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  //PUSH (add an element from the top)

  push(value) {
    let newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  //POP (remove an element from the top)

  pop() {
    if (this.length == 0) {
      return undefined;
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

let myStack = new Stack(11);
myStack.push(45);
myStack.pop();
console.log(myStack);
