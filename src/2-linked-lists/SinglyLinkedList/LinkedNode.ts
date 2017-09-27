/** Class representing a LinkedNode */
export class LinkedNode {
  private _data: number
  private _next: LinkedNode

  /**
   * Represents a LinkedNode.
   * @constructor
   * @param {number} data - the node's content
   */
  constructor(data: number) {
      this._data = data
      this._next = null
  }

  /** returns the data of a LinkedNode object.
   *
   * @return {LinkedNode} A LinkedNode object
   */
  get data(): number {
    return this._data
  }

  /** returns the LinkedNode this LinkedNode is pointing to
   *
   * @return {LinkedNode} A LinkedNode object
   */
  get next(): LinkedNode {
    return this._next
  }

  /** sets the LinkedNode this LinkedNode is pointing to
   *
   * @param {LinkedNode} next - A LinkedNode object
   */
  set next(next: LinkedNode) {
    this._next = next
  }
}
