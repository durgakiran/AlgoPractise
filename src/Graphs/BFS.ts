/**
 * You're given a Node class that has a name and an array of optional children nodes. 
 * When put together, nodes form an acyclic tree-like structure.
 * 
 * Implement the breadthFirstSearch method on the Node class, which takes in an empty array, 
 * traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), 
 * stores all of the nodes' names in the input array, and returns it.
 * 
 * 
 * Sample Input:
 *                                      A
 * 
 *                      B               C                   D
 * 
 *                  E       F                           G       H
 * 
 *                      I       J                           K                                     
 * 
 * 
 * Output: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
 * 
 * - givenArr // S: O(x)
 * - arrayOfNodes // S: O(x)
 * - newArrOfNodes // S: O(y)
 * - if no arrayOfNodes return
 * - for node in arrayOfNodes // n
 *  - push node.value to givenArr
 *  - push destructed node.children to newArrOfNodes // w
 * - repeat // h
 * - return array;
 * 
 * 
 */

 export class Node {
    name: string;
    children: Node[];
  
    constructor(name: string) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name: string): Node {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array: string[]): Array<string> {
      // Write your code here.
      const queue: Array<Node> = [this];
      while (queue.length) {
          const current = queue.shift()!;
          array.push(current.name);
          queue.push(...current.children);
      }

      return array;
    }
  }


