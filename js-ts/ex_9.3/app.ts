// 1.

const areNumbersSame = (a: number, b: number): boolean => {
  return a === b
}

// 2.

class GenericClass<T> {
  list: T[]

  constructor(elements: T[]) {
    this.list = elements
  }

  firstElement() {
    return this.list[0]
  }
}

const classWithNumbers = new GenericClass([1, 2, 3])

const first = classWithNumbers.firstElement()

// 3.

type TupleWithTwoValues<T, K> = [T, K]

const myTuple: TupleWithTwoValues<string, number> = ['olá', 5]

// 4.

const myStr: `A${string}` = 'A234'
