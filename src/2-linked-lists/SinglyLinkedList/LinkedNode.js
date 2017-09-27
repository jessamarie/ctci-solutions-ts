/** Class representing a LinkedNode */
export class LinkedNode {
    /**
     * Represents a LinkedNode.
     * @constructor
     * @param {number} data - the node's content
     */
    constructor(data) {
        this._data = data;
        this._next = null;
    }
    /** returns the data of a LinkedNode object.
     *
     * @return {LinkedNode} A LinkedNode object
     */
    get data() {
        return this._data;
    }
    /** returns the LinkedNode this LinkedNode is pointing to
     *
     * @return {LinkedNode} A LinkedNode object
     */
    get next() {
        return this._next;
    }
    /** sets the LinkedNode this LinkedNode is pointing to
     *
     * @param {LinkedNode} next - A LinkedNode object
     */
    set next(next) {
        this._next = next;
    }
}
