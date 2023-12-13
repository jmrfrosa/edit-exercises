// 1.

function typelessSum(a, b) {
  return a + b
}

// 2.

const sum = typelessSum(1, '1')

console.log(sum)

// 3.

function typedSum(a: number, b: number) {
  return a + b
}

const sum = typedSum(1, '1')

console.log(sum)
