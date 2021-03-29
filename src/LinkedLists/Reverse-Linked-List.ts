export class LinkedList {
    value: number;
    next: LinkedList | null;


    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}


/**
 * 
 * 1 -> 2 -> 3 -> 4 -> 5
 * 
 * 5 -> 4 -> 3 -> 2 -> 1
 * 
 * head => 1
 * 
 * => tree => null
 * => tmp => head
 * 
 * => current => tmp // 1 -> 2 -> 3 -> 4 -> 5
 * => previous => current.next //  2 -> 3 -> 4 -> 5
 * => current.next => tree // 1
 * => tmp => previous.next // 3 -> 4 -> 5
 * => previous.next => current // 2 -> 1
 * => tree => previous
 * 
 * => current => tmp // 3 -> 4 -> 5
 * => previous => current.next // 4 -> 5
 * => current.next => tree // 3 -> 2 -> 1
 * => tmp => previous.next // 5
 * => previous.next => current // 4 -> 3
 * => tree => 4 -> 3 -> 2 -> 1
 */


export function reverseLinkedList(head: LinkedList) {
    let tree:  LinkedList | null = null;
    let tmp: LinkedList | null = head;

    while (tmp) {
        let current: LinkedList | null = tmp; // 1 -> 2 -> 3 | 3
        let previous: LinkedList | null = current.next; // 2 -> 3 | null
        tmp = previous ?  previous?.next : null; // 3 | null
        current.next = tree; // 1 -> null | 3 -> 2 -> 1 -> null
        if(previous)  {
            previous.next = current; // 2 -> 1 -> null
            tree = previous // 2 -> 1
        } else {
            tree = current;
        }
    }

    return tree;
}

