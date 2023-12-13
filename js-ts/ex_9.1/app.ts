const myNumber: number = 44

const myString: string = 'string'

const numArray: number[] = [12, 33, 45]

const multiArray: (string | number | null)[] = ['João', 'Jorge', 89, null, 12]

const objArray: Record<string, number> = {
  firstKey: 12,
  secondKey: 13,
}

console.log({
  myNumber,
  myString,
  numArray,
  multiArray,
  objArray,
})
