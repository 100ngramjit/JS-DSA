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

  //PUSH

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

  //POP

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
}

const LL1 = new LinkedList(4);
LL1.push(88);
LL1.push(1000);
console.log(LL1);
console.log("popping");
console.log("ele popped", LL1.pop());

console.log(LL1);
