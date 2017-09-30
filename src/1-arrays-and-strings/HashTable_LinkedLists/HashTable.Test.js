import {describe, it} from 'mocha'

import {expect} from 'chai'

import {LinkedNode} from './HashTable.js'

describe('HashTable', function () {
  describe('class', function () {
    it('exists', function () {
      expect(HashTable).to.be.a('function')
    })
  })

  var testNode = new LinkedNode(1)

  describe('constructor', function () {
    it('node is an instance of LinkedNode', function () {
      expect(testNode.__proto__.constructor.name).to.equal('LinkedNode')
    })

    it('has a data property', function () {
      expect(testNode.data).to.be.a('number')
    })

    it('has a next property', function () {
      expect(testNode.next).to.be.a('null')
    })
  })

  describe('accessors', function () {
    it('has a data accessor', function () {
      expect(testNode.data).to.be.a('number')
    })

    it('has a next node accessor', function () {
      expect(testNode.next).to.be.a('null')
    })

    it('has a next node mutator', function () {
      var nextNode = new LinkedNode(2)
      testNode.next = nextNode
      expect(testNode.next).to.equal(nextNode)
    })
  })
})
