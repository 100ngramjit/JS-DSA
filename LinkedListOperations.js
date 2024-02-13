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
}

const LL1 = new LinkedList(4);
LL1.push(88);
LL1.push(1000);
console.log(LL1);
