/* N represents a node in a list */
class LinkedNode {
  data: number
  next: LinkedNode
  constructor(data: number) {
    this.data = data
    this.next = null
  }
}

class LinkedList {

  head: LinkedNode
  length: number

  constructor() {
    this.head = null
    this.length = 0
  }

  /* append is a function that appends
    an element to the tail of a linkedlist */
  appendNode(data: number): void {
    var end = new LinkedNode(data)

    if (this.length === 0) {
      this.head = end
    } else {
      var n = this.head
      while(n.next !== null) {
        n = n.next
      }
      n.next = end
    }
    this.length++
  }

  /* print is a function that prints
    all elements in a linked list */
  printList(): void {
    var n = this.head
    var i = this.length - 1
    var string = `${n.data}`
    while(i > 0) {
      n = n.next
      string += `-->${n.data}`
      i--
    }
    console.log(string)
  }

} // end LinkedList

var list = new LinkedList()
list.appendNode(1)
list.appendNode(2)
list.appendNode(3)
list.appendNode(4)
list.appendNode(5)
list.printList()
