import { describe, it } from 'mocha'

import { expect } from 'chai'

import { LinkedNode } from './LinkedNode.js'

describe('LinkedNode', function () {
  context('class', function () {
    it('exists', function () {
      expect(LinkedNode).to.be.a('function')
    })
  })

  var testNode = new LinkedNode(1)

  context('constructor', function () {
    it('node is an instance of LinkedNode', function () {
      expect(testNode.__proto__.constructor.name).to.equal('LinkedNode')
    })

    it('has a value property', function () {
      expect(testNode.value).to.be.a('number')
    })

    it('has a next property', function () {
      expect(testNode.next).to.be.a('null')
    })
  })

  context('accessors', function () {
    it('has a value accessor', function () {
      expect(testNode.value).to.be.a('number')
    })

    it('has a next node accessor', function () {
      expect(testNode.next).to.be.a('null')
    })

    it('has a next node mutator', function () {
      var nextNode = new LinkedNode(2)
      testNode.next = nextNode
      expect(testNode.next).to.equal(nextNode)
    })

    it('has a key accessor', function () {
      expect(testNode.key).to.be.a('null')
    })
  })

  context('node can have a key', function () {
    var node = new LinkedNode('string', 2)

    it('has a key', function () {
      expect(node.key).to.equal(2)
    })

    it('has a value', function () {
      expect(node.value).to.equal('string')
    })
  })
})
