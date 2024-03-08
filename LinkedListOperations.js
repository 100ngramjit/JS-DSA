//node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Linked List class and operations

class LinkedList {
  //Initializing a Linked List with a Node

  constructor(value) {
    const NewNode = new Node(value);
    this.head = NewNode;
    this.length = 1;
    this.tail = this.head;
  }

  //PUSH (insert a node at the tail/end)

  push(value) {
    if (this.head !== null) {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    } else {
      this.head = new Node(value);
      this.tail = this.head;
    }
    this.length++;
    return this;
  }

  //POP (delete the last/tail element)

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  //UNSHIFT (insert a node at the head/start)

  unshift(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //SHIFT (delete a node from the head/start)

  shift() {
    if (this.head) {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      if (this.length == 0) {
        this.tail = null;
      }
      return temp;
    } else {
      return undefined;
    }
  }

  //GET (retrieve the node from a given index)

  get(index) {
    if (index >= this.length || index < 0) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  //SET (replace the value of a node in a given index with a given value)

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  //INSERT (insert a node at a given index)

  insert(index, value) {
    if (index > this.length || index < 0) {
      return undefined;
    } else if (index == 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    }
    let ele = new Node(value);
    let temp = this.head;
    let pre = {};
    for (let i = 0; i < index; i++) {
      pre = temp;
      temp = temp.next;
    }
    pre.next = ele;
    ele.next = temp;
    this.length++;
    return this;
  }

  //DELETE (delete a node from a given index)

  delete(index) {
    if (index >= this.length || index < 0) {
      return undefined;
    } else if (index == 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    }
    let temp = this.get(index);
    let pre = this.get(index - 1);
    pre.next = temp.next;
    temp.next = null;
    this.length--;
    return this;
  }
}

const LL1 = new LinkedList(4);
LL1.push(88);
LL1.push(1000);
// console.log(LL1);
// console.log("popping");
// console.log("ele popped", LL1.pop());
// console.log("ele popped", LL1.pop());
// console.log("ele popped", LL1.pop());

LL1.unshift(99);
// LL1.shift();
console.log(LL1);
// LL1.insert(2, 0);
LL1.delete(1);
console.log(LL1);
