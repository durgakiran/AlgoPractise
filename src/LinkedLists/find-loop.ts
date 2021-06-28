/**
 * Write a function that takes in the head of a Singly Linked List that
 * contains a loop (in other words, the list's tail node points to
 * some node in the list instead of None / null). The function should
 * return the node (the actual node--not just its value) from which the loop
 * originates in constant space.
 * Each LinkedList node has an integer value as well as a
 * next node pointing to the next node in the list
 *
 */

export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export default function FindLoop(head: LinkedList): LinkedList | null {
  const nodeMap = new Map<LinkedList, boolean>();
  let currentNode: LinkedList | null = head;

  while (currentNode) {
    if (nodeMap.has(currentNode)) {
      break;
    }
    nodeMap.set(currentNode, true);
    currentNode = currentNode.next;
  }

  return currentNode;
}
