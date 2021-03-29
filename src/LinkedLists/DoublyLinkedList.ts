export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

const map = new Map<string, number>();


export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node: Node) {
    this.head = node;
  }

  setTail(node: Node) {
    this.tail = node;
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    let prevNode = node.prev;
    node.prev = null;
    nodeToInsert.next = node;
    node.prev = nodeToInsert;
    if(prevNode) prevNode.next = nodeToInsert;
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    // Write your code here.
    let nextNode = node.next;
    node.next = nodeToInsert;
    nodeToInsert.prev = node;
    nodeToInsert.next = nextNode;
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    // Write your code here.
    let currentPosition = 0;
    let currentNode = this.head;
    while(currentPosition < position) {
        if(currentNode && currentNode.next) {
            currentNode = currentNode.next;
        } else {
            return;
        };
        currentPosition += 1;
    }

    if(currentNode) {
        let prevNode = currentNode.prev!;
        let nextNode = currentNode.next;
        prevNode.next = nodeToInsert;
        nodeToInsert.prev = prevNode;
        nodeToInsert.next = nextNode;
    } else {
        this.tail = nodeToInsert;
    }

  }

  removeNodesWithValue(value: number) {
    // Write your code here.
    
  }

  remove(node: Node) {
    // Write your code here.
  }

  containsNodeWithValue(value: number) {
    // Write your code here.
    return false;
  }
}
