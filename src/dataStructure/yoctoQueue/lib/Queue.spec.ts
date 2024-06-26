import { describe, expect, it } from 'vitest'

import { Queue } from './Queue'

describe('queue class', () => {
  it('.enqueue()', () => {
    const queue = new Queue()

    queue.enqueue('🦄')

    expect(queue.dequeue()).equals('🦄')

    queue
      .enqueue('🌈')
      .enqueue('❤️')

    expect(queue.dequeue()).equals('🌈')
    expect(queue.dequeue()).equals('❤️')
  })

  it('.dequeue()', () => {
    const queue = new Queue()

    expect(queue.dequeue()).equals(undefined)
    expect(queue.dequeue()).equals(undefined)

    queue.enqueue('🦄')

    expect(queue.dequeue()).equals('🦄')
    expect(queue.dequeue()).equals(undefined)
  })

  it('.clear()', () => {
    const queue = new Queue()

    queue
      .clear()
      .enqueue(1)
      .clear()

    expect(queue.size).equals(0)

    queue
      .enqueue(1)
      .enqueue(2)
      .enqueue(3)
      .clear()

    expect(queue.size).equals(0)
  })

  it('.size', () => {
    const queue = new Queue()

    expect(queue.size).equals(0)

    queue.clear()

    expect(queue.size).equals(0)

    queue.enqueue('🦄')

    expect(queue.size).equals(1)

    queue.enqueue('🦄')

    expect(queue.size).equals(2)

    queue.dequeue()

    expect(queue.size).equals(1)

    queue.dequeue()

    expect(queue.size).equals(0)

    queue.dequeue()

    expect(queue.size).equals(0)
  })

  it('iterable', () => {
    const queue = new Queue()

    queue
      .enqueue('🦄')
      .enqueue('🌈')

    expect([...queue]).toEqual(['🦄', '🌈'])
  })
})
