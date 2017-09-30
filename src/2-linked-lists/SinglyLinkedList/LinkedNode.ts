/** Class representing a LinkedNode */
export class LinkedNode<T> {
  private _key: T
  private _value: T
  private _next: LinkedNode<T>

  /**
   * Represents a LinkedNode.
   * @constructor
   * @param {T} value - the node's content
   * @param {T} key - the node's key (optional)
   */
  constructor(value: T, key: T = null) {
      this._value = value
      this._next = null
      this._key = key
  }

  /** returns the key of a LinkedNode object.
   *
   * @return {T} A key
   */
  get key(): T {
    return this._key
  }

  /** returns the value of a LinkedNode object.
   *
   * @return {T} A value
   */
  get value(): T {
    return this._value
  }

  /** returns the LinkedNode this LinkedNode is pointing to
   *
   * @return {LinkedNode} A LinkedNode object
   */
  get next(): LinkedNode<T> {
    return this._next
  }

  /** sets the LinkedNode this LinkedNode is pointing to
   *
   * @param {LinkedNode} next - A LinkedNode object
   */
  set next(next: LinkedNode<T>) {
    this._next = next
  }
}
