export class Node<T> {
  public next?: Node<T> = undefined

  constructor(public value: T) {}
}
