import {describe, it} from 'mocha'

import {expect} from 'chai'

import {HashTable} from './HashTable.js'

describe('HashTable', function () {
  context('class', function () {
    it('exists', function () {
      expect(HashTable).to.be.a('function')
    })
  })

  context('basic', function () {
    var table = new HashTable()
    it('node is an instance of LinkedNode', function () {
      expect(table.__proto__.constructor.name).to.equal('HashTable')
    })

    it('has a count property', function () {
      expect(table.count).to.be.a('number')
    })

    it('has a table property', function () {
      expect(table.table).to.be.an('Array')
    })

    it('empty toString', function () {
      expect(table.toString()).to.equal('')
    })

    it('can set count', function () {
      table.count = table.count + 1
      expect(table.count).to.equal(1)
    })
  })

  context('insert nodes with same keys', function () {
    var table = new HashTable()

    it('insert items', function () {
      table.insert('1', 'cool')
      table.insert('1', 'string')
      table.insert('1', 'you')
      table.insert('1', 'got')
    })

    it('All items exist in table', function () {
      expect(table.toString()).to.have.string('<1,got>')
      expect(table.toString()).to.have.string('<1,string>')
      expect(table.toString()).to.have.string('<1,you>')
      expect(table.toString()).to.have.string('<1,cool>')
    })
  })

  context('insert some different keys', function () {
    var table = new HashTable()

    it('insert items', function () {
      table.insert('two', 'cool')
      table.insert('two', 'string')
      table.insert('one', 'you')
      table.insert('one', 'got')
    })

    it('All items exist in table', function () {
      expect(table.toString()).to.have.string('<one,got>')
      expect(table.toString()).to.have.string('<two,string>')
      expect(table.toString()).to.have.string('<one,you>')
      expect(table.toString()).to.have.string('<two,cool>')
    })
  })
  context('find a node', function () {
    var table = new HashTable()

    it('insert items', function () {
      table.insert('one', 'cool')
      table.insert('two', 'string')
      table.insert('three', 'you')
      table.insert('one', 'got')
    })

    it('find node with key "two"', function () {
      var node = table.search('two')
      expect(node.key).to.equal('two')
      expect(node.value).to.equal('string')
    })

    it('find node with key "one"', function () {
      var node = table.search('one')
      expect(node.key).to.equal('one')
    })
  })
})
