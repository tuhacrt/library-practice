import { Node } from './Node'

export class Queue<T> implements Iterable<T> {
  #head?: Node<T>
  #tail?: Node<T>
  #size: number

  // the functionality of constructor is the same as clear(),
  // but constructor cannot use clear() to prevent error.
  constructor() {
    this.#head = undefined
    this.#tail = undefined
    this.#size = 0
  }

  public enqueue(value: T): Queue<T> {
    const node = new Node(value)

    if (this.#head) {
      // @ts-expect-error the #tail will always be a node if #head exists.
      this.#tail.next = node
    } else {
      this.#head = node
    }

    this.#tail = node
    this.#size++

    return this
  }

  public dequeue() {
    const current = this.#head

    if (!current) {
      return
    }

    this.#head = current.next
    this.#size--

    return current.value
  }

  public clear(): Queue<T> {
    this.#head = undefined
    this.#tail = undefined
    this.#size = 0

    return this
  }

  public get size(): number {
    return this.#size
  }

  * [Symbol.iterator](): IterableIterator<T> {
    let current = this.#head

    while (current) {
      yield current.value
      current = current.next
    }
  }
}
