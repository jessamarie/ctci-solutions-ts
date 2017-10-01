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

  context('insert same keys', function () {
    var table = new HashTable()

    it('insert items', function () {
      table.insert('1', 'cool')
      table.insert('1', 'string')
      table.insert('1', 'you')
      table.insert('1', 'got')
    })

    it('toString has an item', function () {
      // no way to test hash function right now
      // test that the hashtable at least has the items
      // that it should
      expect(table.toString()).to.have.string('<1,got>')
    })
  })

  context('insert some different keys', function () {
    var table = new HashTable()

    it('insert items', function () {
      table.insert('2', 'cool')
      table.insert('2', 'string')
      table.insert('1', 'you')
      table.insert('1', 'got')
    })

    it('toString has the right item', function () {
      // no way to test hash function right now
      // test that the hashtable at least has the items
      // that it should
      expect(table.toString()).to.have.string('<2,string>')
      expect(table.toString()).to.have.string('<1,got>')
    })
  })
})
