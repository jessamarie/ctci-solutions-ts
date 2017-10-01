/** Class representing a LinkedNode */
export class LinkedNode<K, V> {
  private _key: K
  private _value: V
  private _next: LinkedNode<K, V>

  /**
   * Represents a LinkedNode.
   * @constructor
   * @param {K} [key] - the node's key
   * @param {V} value - the node's content
   */
  constructor(...args: any[]) {
      if (args.length === 2) {
        const [ key, value ] = args
        this._value = value
        this._key = key
      } else if (args.length === 1) {
        const [ value ] = args
        this._value = value
        this._key = null
    } else {
      throw new Error('invalid arguments: (key, value) or (value) only')
    }
      this._next = null
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

  /** set the value of a LinkedNode object.
   *
   * @param {V} value A value
   */
  set value(value: V) {
    this._value = value
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
