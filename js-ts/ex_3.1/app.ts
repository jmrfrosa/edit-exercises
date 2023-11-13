// 1.

const getNumberParity = (n: number) => {
  if (n % 2 === 0) {
    return 'Par'
  }

  return "Ímpar"
}

console.log(`getNumberParity(${1}):`, getNumberParity(1))
console.log(`getNumberParity(${2}):`, getNumberParity(2))
console.log(`getNumberParity(${1845}):`, getNumberParity(1845))
console.log(`getNumberParity(${2366}):`, getNumberParity(2366))

// 2.

const getNumberParityTernary = (n: number) => n % 2 === 0 ? 'Par' : 'Ímpar'

console.log(`getNumberParityTernary(${1}):`, getNumberParityTernary(1))
console.log(`getNumberParityTernary(${2}):`, getNumberParityTernary(2))
console.log(`getNumberParityTernary(${1845}):`, getNumberParityTernary(1845))
console.log(`getNumberParityTernary(${2366}):`, getNumberParityTernary(2366))
