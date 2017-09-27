import { LinkedNode } from "./LinkedNode"

/** Class representing a LinkedList */
export class LinkedList {

  private _head: LinkedNode
  private _length: number

  /**
   * Represents a LinkedList.
   * @constructor
   */
  constructor() {
      this._head = null
      this._length = 0
  }

  /** returns the head of this LinkedList
   *
   * @return {LinkedNode} A LinkedNode object
   */
  get head(): LinkedNode {
    return this._head
  }

  /** sets the head of this LinkedList
   *
   * @param {LinkedNode} head - A LinkedNode object
   */
  set head(head: LinkedNode) {
    this._head = head
  }

  /** returns the length of this LinkedList
   *
   * @return {LinkedNode} A LinkedNode object
   */
  get length(): number {
    return this._length
  }

  /** sets the lenth of this LinkedList
   *
   * @param {LinkedNode} head - A LinkedNode object
   */
  set length(len: number) {
    this._length = len
  }

  /** appendNode is a function that appends
   * an element to the tail of a linkedlist
   *
   * @param {number} data number.
   */
  public appendNode(data: number): void {
    const end = new LinkedNode(data)

    if (this.length === 0) {
      this.head = end
    } else {
      let n = this.head
      while (n.next !== null) {
        n = n.next
      }
      n.next = end
    }
    this.length++
  }

  /** deleteNode is a function that looks for an element in
   * a LinkedList and removes it from the list.
   *
   * @param {number} number - A number
   */
  public deleteNode(data: number): void {
      let n = this.head

      /* if n is null then the list is empty */
      if (!n) { return }

      /* if the head is the element to remove
       * move head to next element */
      if (n.data === data) {
          this.head = this.head.next
          this.length--
          return
      }

      /* For all other elements in the list
       * just shift left if the element exists */
      while (n.next !== null) {

        if (n.next.data === data) {
          n.next = n.next.next
          this.length--
          return
        }
        n = n.next
     }
  }

  /** toString returns a string representation of a
   * LinkedList
   *
   * @return {String} A String object
   */
  public toString(): string {
    let n = this.head
    let i = this.length - 1
    let str = n ? `${n.data}` : ""
    while (i > 0) {
      n = n.next
      str += `->${n.data}`
      i--
    }
    return `[${str}]`
  }

} // end LinkedList
