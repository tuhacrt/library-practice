import { describe, expect, it } from 'vitest'

import { complexArray } from './index'

describe('ts-reset/filter', () => {
  it(`
      given: complexArray
      when: filter(Boolean)
      then: Array<number>`, () => {
    const given = complexArray
    const received = given.filter(Boolean)
    const expected = [1, 2, 3]

    expect(received).toEqual(expected)
  })
})
