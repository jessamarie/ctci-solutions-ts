
// A hash table is a data structure that maps keys to values
// for highly efficient lookup

// Implementation #1
// use an array of linked lists and a hash code function

// To insert a key and value:
// 1. Compute the key's hash code
// 2. map the hash code to an index in the array
  // hash(key) % array_length
  // 2 diff hashcodes could map to the same index
// 3. At this index, there is a linked list of keys and values
    // store the key and value in this index.
    // linked list best bc of collisions
    // you could have 2diff keys w/ same hashcode
    // or 2 diff hash codes that map to the same index
// console.log("Hi")

/** Class representing a HashTable */
import {LinkedList} from "./../../2-linked-lists/SinglyLinkedList/LinkedList"

class HashTable {

  public node = new class {
    private key: string
    private value: string
    private next: Node
    constructor(key: string, value: string) {
      this.key = key
      this.value = value
    }
  }(key, value);
  private _lists: LinkedList[] /* Array of linked lists */

  /**
   * Represents a HashTable.
   * @constructor
   * @param {number} data - the node's content
   */
  constructor(data: number) {
      this._lists = new Array<LinkedList>
  }

  /** returns the lists in a HashTable object.
   *
   * @return {LinkedNode} A LinkedNode object
   */
  get lists(): LinkedList[] {
    return this._lists
  }

  /**
   * A function that computes a hash code of a list
   * @constructor
   * @param {number} data - the node's content
   */

}

namespace HashTable {
    export class Node {
    }
}

export {HashTable}
