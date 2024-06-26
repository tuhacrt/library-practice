import { describe, expect, it } from 'vitest'

import { Node } from './Node'

describe('node class', () => {
  it(`
      given: a number: 1
      when: create new Node with given value
      then: value of node is 1, next of node is undefined`, () => {
    const given = 1
    const received = new Node(given)
    const expectedValue = 1
    const expectedNext = undefined

    expect(received.value).toEqual(expectedValue)
    expect(received.next).toEqual(expectedNext)
  })

  it(`
      given: a Node(1), and a Node(2)
      when: setup Node(2) as next of Node(1)
      then: value of Node(1) is 1, next of Node(1) is Node(2)`, () => {
    const first = new Node(1)
    const second = new Node(2)

    first.next = second

    const received = first

    const expectedValue = 1
    const expectedNext = second

    expect(received.value).toEqual(expectedValue)
    expect(received.next).toEqual(expectedNext)
  })
})
