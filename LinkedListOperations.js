class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const NewNode = new Node(value);
    this.head = NewNode;
    this.length = 1;
    this.tail = this.head;
  }

  //PUSH (insert an element at the tail/end)

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

  //UNSHIFT (insert an element at the head/start)

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

  //SHIFT (delete an element from the head/start)

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
}

const LL1 = new LinkedList(4);
LL1.push(88);
LL1.push(1000);
// console.log(LL1);
console.log("popping");
// console.log("ele popped", LL1.pop());
// console.log("ele popped", LL1.pop());
// console.log("ele popped", LL1.pop());

LL1.unshift(99);
LL1.shift();
console.log(LL1);
console.log(LL1.set(0, 99));
console.log(LL1);
