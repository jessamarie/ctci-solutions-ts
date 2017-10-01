/** Class representing a HashTable using an array of linked lists
 *  and hash code function
 */
import {LinkedList} from './../../2-linked-lists/SinglyLinkedList/LinkedList'

export class HashTable {

  /* The hash table, represented as an array of linked tables. */
  private _table: Array<LinkedList<string, string>>
  private _count: number /* The number of k,v pairs in the table */
  private _size: number /* The number of slots in the table */

  /**
   * Represents a HashTable.
   * @constructor
   * @param {number} size - the size of the table
   */
  constructor(size: number = 20) {
      this._size = size
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

  /** returns the table size
   *
   * @return {number} A number
   */
  get size(): number {
    return this._size
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
   *
   * It places the node at the list index = hash(key) % table_size
   *
   * @constructor
   * @param {string} key - the key
   * @param {string} value - the node's content
   */
   public insert(key: string, value: string) {

     /* 1-2. compute the key's hash code and map it to an index in the array */
     const index = this.hash(key) % this.size
     /* 3. At this index, there is a linked list of keys and values */
     const list: LinkedList<string, string> = this.table[index] || new LinkedList<string, string>()

     /* store the key and value in this index */
     list.prependNode(key, value) // fastest

     this.table[index] = list
   }

   /**
    * insert is a function that puts a new key, value
    * pair into a hash table
    *
    * It places the node at the list index = hash(key) % table_size
    *
    * @constructor
    * @param {string} key - the key
    */
    public search(key: string) {

      /* Get the index */
      const index = this.hash(key) % this.size

      const list: LinkedList<string, string> = this.table[index]

      if (!list) { return } /* element doesn't exist */

      const node = list.find(key)
      /* return element with key */
      return node
    }

   /**
    * toString function that returns a string rep of
    * the table
    *
    * @return {string} A string
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
   * @param {string} key - the key
   */
   public hash(key: string): number {

     /* A hashing function should be designed to be a unique as possible
      * as to avoid collisions
      *
      * Possible formulas, for each i in key:
      * * sum = sum + ord(i) * i
      * * product = R * product + ord(i) * i, where R is a small prime number
      *
      * multiplying by i helps to avoid anagrams having the same hash
     */

     const hash = key.split('').reduce( (acc, value, i) => {
       return (31 * acc + Math.abs(value.charCodeAt(0)) * i)
     }, 1)

     return hash
   }
}
