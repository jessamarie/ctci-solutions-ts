/** Class representing a LinkedNode */
export class LinkedNode<K, V> {
  private _key: K
  private _value: V
  private _next: LinkedNode<K, V>

  /**
   * Represents a LinkedNode.
   * @constructor
   * @param {T} value - the node's content
   * @param {T} key - the node's key (optional)
   */
  constructor(value: V, key: K = null) {
      this._value = value
      this._next = null
      this._key = key
  }

  /** returns the key of a LinkedNode object.
   *
   * @return {K} A key
   */
  get key(): K {
    return this._key
  }

  /** returns the value of a LinkedNode object.
   *
   * @return {V} A value
   */
  get value(): V {
    return this._value
  }

  /** returns the LinkedNode this LinkedNode is pointing to
   *
   * @return {LinkedNode} A LinkedNode object
   */
  get next(): LinkedNode<K, V> {
    return this._next
  }

  /** sets the LinkedNode this LinkedNode is pointing to
   *
   * @param {LinkedNode} next - A LinkedNode object
   */
  set next(next: LinkedNode<K, V>) {
    this._next = next
  }
}
