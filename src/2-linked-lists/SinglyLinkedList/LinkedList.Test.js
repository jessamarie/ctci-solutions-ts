import { describe, it } from 'mocha'
import { expect } from 'chai'
import { LinkedList } from './LinkedList.js'

describe('LinkedList', function () {
  context('class', function () {
    it('LinkedList is a class', function () {
      expect(LinkedList).to.be.a('function')
    })
  })

  var list
  describe('constructor', function () {
    it('list is an instance of LinkedList', function () {
      list = new LinkedList()
      expect(list.__proto__.constructor.name).to.equal('LinkedList')
    })
    it('has a head property', function () {
      expect(list.head).to.be.a('null')
    })
    it('has a length property', function () {
      expect(list.length).to.be.a('number')
    })
  })

  describe('append one node', function () {
    it('appendNode exists', function () {
      expect(list.appendNode).to.be.a('function')
    })

    it('add 1 to the list', function () {
      list.appendNode(1)
    })

    it('list head is #1 and length is 1', function () {
      expect(list.length).to.equal(1)
      expect(list.head.value).to.equal(1)
    })

    it('list toString has 1 element', function () {
      expect(list.toString()).to.equal('[1]')
    })
  })

  describe('append more nodes', function () {
    it('add 2,3,4,5 to the list', function () {
      list.appendNode(2)
      list.appendNode(3)
      list.appendNode(4)
      list.appendNode(5)
    })

    it('length is 5 and head next is 2', function () {
      expect(list.length).to.equal(5)
      expect(list.head.next.value).to.equal(2)
    })

    it('list toString has 5 elements', function () {
      expect(list.toString()).to.equal('[1->2->3->4->5]')
    })
  })

  describe('prepend one node', function () {
    var newlist = new LinkedList()
    it('prependNode exists', function () {
      expect(newlist.prependNode).to.be.a('function')
    })

    it('add 1 to the list', function () {
      newlist.prependNode(5)
    })

    it('list head is #1 and length is 1', function () {
      expect(newlist.length).to.equal(1)
      expect(newlist.head.value).to.equal(5)
    })

    it('list toString has 1 element', function () {
      expect(newlist.toString()).to.equal('[5]')
    })
  })

  describe('prepend more nodes', function () {
    var newList = new LinkedList()
    it('add 2,3,4,5 to the list', function () {
      newList.prependNode(5)
      newList.prependNode(4)
      newList.prependNode(3)
      newList.prependNode(2)
      newList.prependNode(1)
    })

    it('length is 5 and head is 1', function () {
      expect(newList.length).to.equal(5)
      expect(newList.head.value).to.equal(1)
      expect(newList.head.next.value).to.equal(2)
    })

    it('list toString has 5 elements', function () {
      expect(newList.toString()).to.equal('[1->2->3->4->5]')
    })
  })

  describe('delete head node', function () {
    it('deleteNode exists', function () {
      expect(list.deleteNode).to.be.a('function')
    })

    it('remove #1 from the list', function () {
      list.deleteNode(1)
    })

    it('has length 4', function () {
      expect(list.length).to.equal(4)
    })

    it('has new head', function () {
      expect(list.head.value).to.equal(2)
    })

    it('toString has 4 nodes', function () {
      expect(list.toString()).to.equal('[2->3->4->5]')
    })
  })

  describe('remove from end of list', function () {
    it('remove #5', function () {
      list.deleteNode(5)
    })

    it('length is 3', function () {
      expect(list.length).to.equal(3)
    })

    it('new tail is #4 has no next', function () {
      expect(list.head.next.next.value).to.equal(4)
      expect(list.head.next.next.next).to.be.a('null')
    })

    it('toString has 3 nodes', function () {
      expect(list.toString()).to.equal('[2->3->4]')
    })
  })

  describe('remove middle node', function () {
    it('remove #3', function () {
      list.deleteNode(3)
    })

    it('length is 2', function () {
      expect(list.length).to.equal(2)
    })

    it('previous node has new next', function () {
      expect(list.head.next.value).to.equal(4)
    })

    it('toString has 2 elements', function () {
      expect(list.toString()).to.equal('[2->4]')
    })
  })

  describe('empty the rest of list', function () {
    it('remove nodes', function () {
      list.deleteNode(2)
      list.deleteNode(4)
    })

    it('length is 0', function () {
      expect(list.length).to.equal(0)
    })

    it('head is null', function () {
      expect(list.head).to.be.a('null')
    })

    it('toString is empty', function () {
      expect(list.toString()).to.equal('[]')
    })
  })

  describe('weave even list', function () {
    let unweavedList = new LinkedList()
    let weavedList = new LinkedList()

    it('create unweavedList list', function () {
      unweavedList.appendNode(1)
      unweavedList.appendNode(3)
      unweavedList.appendNode(5)
      unweavedList.appendNode(2)
      unweavedList.appendNode(4)
      unweavedList.appendNode(6)
    })

    it('toString before weave', function () {
      expect(unweavedList.toString()).to.equal('[1->3->5->2->4->6]')
    })

    it('weave nodes', function () {
      weavedList = unweavedList.weave()
    })

    it('toString after weave should be rearranged', function () {
      expect(weavedList.toString()).to.equal('[1->2->3->4->5->6]')
    })
  })

  describe('weave odd list', function () {
    let unweavedList = new LinkedList()
    let weavedList = new LinkedList()

    it('create unweavedList list', function () {
      unweavedList.appendNode(1)
      unweavedList.appendNode(3)
      unweavedList.appendNode(2)
      unweavedList.appendNode(4)
      unweavedList.appendNode(5)
    })

    it('toString before weave', function () {
      expect(unweavedList.toString()).to.equal('[1->3->2->4->5]')
    })

    it('weave nodes', function () {
      weavedList = unweavedList.weave()
    })

    it('toString after weave should be the same', function () {
      expect(weavedList.toString()).to.equal('[1->2->3->4->5]')
    })
  })

  describe('weave a larger odd list', function () {
    let unweavedList = new LinkedList()
    let weavedList = new LinkedList()

    it('create unweavedList list', function () {
      unweavedList.appendNode(1)
      unweavedList.appendNode(3)
      unweavedList.appendNode(5)
      unweavedList.appendNode(2)
      unweavedList.appendNode(4)
      unweavedList.appendNode(6)
      unweavedList.appendNode(7)
    })

    it('toString before weave', function () {
      expect(unweavedList.toString()).to.equal('[1->3->5->2->4->6->7]')
    })

    it('weave nodes', function () {
      weavedList = unweavedList.weave()
    })

    it('toString after weave should be rearranged', function () {
      expect(weavedList.toString()).to.equal('[1->2->3->4->5->6->7]')
    })
  })

  describe('remove duplicates', function () {
    let dupsList = new LinkedList()

    it('small list', function () {
      dupsList.appendNode(1)
      dupsList.appendNode(2)
      dupsList.appendNode(4)
      dupsList.appendNode(2)
      let uniqueList = dupsList.removeDups()
      expect(uniqueList.toString()).to.equal('[1->4->2]')
    })

    it('large list', function () {
      dupsList.appendNode(1)
      dupsList.appendNode(2)
      dupsList.appendNode(1)
      dupsList.appendNode(4)
      let uniqueList = dupsList.removeDups()
      expect(uniqueList.toString()).to.equal('[2->1->4]')
    })
  })

  describe('replace nodes', function () {
    let replaceList = new LinkedList()

    it('one', function () {
      replaceList.appendNode(1, 1)
      replaceList.appendNode(2, 2)
      replaceList.appendNode(3, 3)
      replaceList.appendNode(4, 4)
      replaceList.replace(1, 2)
      expect(replaceList.toString()).to.equal('[<1,2>-><2,2>-><3,3>-><4,4>]')
    })

    it('more', function () {
      replaceList.replace(2, 3)
      replaceList.replace(3, 4)
      replaceList.replace(4, 5)
      expect(replaceList.toString()).to.equal('[<1,2>-><2,3>-><3,4>-><4,5>]')
    })
  })
})
