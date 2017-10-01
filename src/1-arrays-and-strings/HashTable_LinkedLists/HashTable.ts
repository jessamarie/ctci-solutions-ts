/** Class representing a HashTable using an array of linked lists
 *  and hash code function
 */
import {LinkedList} from './../../2-linked-lists/SinglyLinkedList/LinkedList'

export class HashTable {

  /* The hash table, represented as an array of linked tables. */
  private _table: Array<LinkedList<string, string>>
  /* The number of k,v pairs in the table */
  private _count: number

  /**
   * Represents a HashTable.
   * @constructor
   * @param {number} data - the node's content
   */
  constructor() {
      this._table = new Array<LinkedList<string, string>>()
      this._count = 0
  }

  /** returns the HashTable
   *
   * @return {LinkedList} A LinkedList object
   */
  get table(): Array<LinkedList<string, string>> {
    return this._table
  }

  /** returns the count
   *
   * @return {LinkedList} A LinkedList object
   */
  get count(): number {
    return this._count
  }

  /** sets the count
   *
   * @param {LinkedList} len LinkedList object
   */
  set count(count: number) {
    this._count = count
  }

  /**
   * insert is a function that puts a new key, value
   * pair into a hash table
   * @constructor
   * @param {string} key - the key
   * @param {string} value - the node's content
   */
   public insert(key: string, value: string) {

     const hash = this.hash(key) /* 1. compute the key's hash code */
     const index = Math.floor(hash % (this.table.length + 1)) /* 2. map the hash code to an index in the array */

     /* 3. At this index, there is a linked list of keys and values */
     const list: LinkedList<string, string> = this.table[index] || new LinkedList<string, string>()

     /* store the key and value in this index */
     const node = list.replace(key, value)

     /* If the key wasn't found in the list, prepend a new node to the list */
     if (node === null) {
       list.prependNode(key, value)
       this.count++
     }

     this.table[index] = list
   }

   /**
    * toString function that returns a string rep of
    * the table
    */
    public toString(): string {
      let str = ''

      this.table.forEach( (list) => {
        str += list.toString() + '\n'
      })
      return str
    }

  /**
   * hash is a modular hashing function that computes a hash code
   * of a string.
   *
   * @param {number} key - the key
   */
   public hash(key: string): number {

     const hash = key.split('').reduce( (acc, value) => {
       return (31 * acc + (value.charCodeAt(0))) % (this.count + 1)
     }, 1)

     return Math.abs(hash)
   }
}
