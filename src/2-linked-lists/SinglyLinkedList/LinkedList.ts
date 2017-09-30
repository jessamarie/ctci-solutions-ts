import { LinkedNode } from './LinkedNode'

/** Class representing a LinkedList */
export class LinkedList<K, V> {

  private _head: LinkedNode<K, V>
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
   * @return {LinkedNode<K, V>} A LinkedNode object
   */
  get head(): LinkedNode<K, V> {
    return this._head
  }

  /** sets the head of this LinkedList
   *
   * @param {LinkedNode<K, V>} head - A LinkedNode object
   */
  set head(head: LinkedNode<K, V>) {
    this._head = head
  }

  /** returns the length of this LinkedList
   *
   * @return {LinkedNode<K, V>} A LinkedNode object
   */
  get length(): number {
    return this._length
  }

  /** sets the lenth of this LinkedList
   *
   * @param {LinkedNode<K, V>} head - A LinkedNode object
   */
  set length(len: number) {
    this._length = len
  }

  /** appendNode is a function that appends
   * an element to the tail of a linkedlist
   *
   * @param {T} value T.
   */
  public appendNode(value: V, key: K = null): void {
    const end = new LinkedNode<K, V>(value, key)

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

  /** prependNode is a function that prepends
   * an element to the head of the LinkedList
   *
   * @param {T} value T.
   */
  public prependNode(value: V, key: K = null): void {
    const newHead = new LinkedNode<K, V>(value, key)

    if (this.length !== 0) {
      newHead.next = this.head
    }

    this.head = newHead
    this.length++
  }

  /** deleteNode is a function that looks for an element in
   * a LinkedList and removes it from the list.
   *
   * @param {T} value - A value to be stored in a node
   */
  public deleteNode(value: V): void {
      let n = this.head

      /* if n is null then the list is empty */
      if (!n) { return }

      /* if the head is the element to remove
       * move head to next element */
      if (n.value === value) {
          this.head = this.head.next
          this.length--
          return
      }

      /* For all other elements in the list
       * just shift left if the element exists */
      while (n.next !== null) {

        if (n.next.value === value) {
          n.next = n.next.next
          this.length--
          return
        }
        n = n.next
     }
  }

  /** weave is a function that weaves a LinkedList
   * with itself using the 'runner' technique
   *
   * @return {LinkedList<K, V>} A new LinkedList
   */
  public weave(): LinkedList<K, V> {
    let p1 = this.head.next /* p1 is the fast pointer */
    let p2 = this.head /* p2 is the slow pointer */

   /* move p1 by 2 and p2 by 1 until p1 reaches the end of the list */
    while (p1.next !== null && p1.next.next !== null)  {
      p1 = p1.next.next
      p2 = p2.next
    }

    p1 = this.head /* Move p1 back to the head. */
    p2 = p2.next /* Advance p2 - this is the first element to weave */

    /* Start weaving */

    const weavedList: LinkedList<K, V> = new LinkedList<K, V>()

    while (p1 !== null && p2 !== null ) {
      /* Take element pointed by p2 and move it after p1.
      Advance p1 after inserted element. */

      if (weavedList.length === this.length - 1) { /* The last element of odd lists */
        weavedList.appendNode(p2.value)
        p2 = p2.next
      } else {
        weavedList.appendNode(p1.value)
        weavedList.appendNode(p2.value)
        p1 = p1.next
        p2 = p2.next
      }
    }

    return weavedList
  }

  /** removeDups is a function that removes
   * duplicates from an unsorted list. It keeps
   * the LAST duplicated element
   *
   * @return {LinkedList<K, V>} A new LinkedList
   */
   public removeDups(): LinkedList<K, V> { /* Exercise 2.1 - W/O storing */
     const uniqueList = new LinkedList<K, V>()

     let p1 = this.head

     while (p1 !== null) {
       let p2 = p1.next /* p2 iterates over rest of the list */
       let duped = false

       while (p2 !== null) {
         if (p1.value === p2.value) {
           duped = true
         }

         p2 = p2.next
       }

       if (!duped) {
         uniqueList.appendNode(p1.value)
       }

       p1 = p1.next
     }

     return uniqueList
   }

  /** toString returns a string representation of a
   * LinkedList
   *
   * @return {String} A String object
   */
  public toString(): string {
    let n = this.head
    let i = this.length - 1
    let str = n ? `${n.value}` : ''
    while (i > 0) {
      n = n.next
      str += `->${n.value}`
      i--
    }
    return `[${str}]`
  }

  /* Remove after finished */
  public debugHelper(p1: LinkedNode<K, V>, p2: LinkedNode<K, V>, list: LinkedList<K, V>): void {
    let debugString = ''
    if (p1) {
      const next = p1.next ? `${p1.next.value}` : 'none'
      debugString += `p1: ${p1.value} -- p1.next: ${next}`
    }

    if (p2) {
      const next = p2.next ? `${p2.next.value}` : 'none'
      debugString += ` -- p2: ${p2.value} -- p2.next: ${next} `
    }

    console.log(debugString + ` ${list.toString()}`)
  }

} // end LinkedList
