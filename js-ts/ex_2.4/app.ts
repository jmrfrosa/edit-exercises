// 1.
const workers = ['Pedro', 'Ana', 'Rute']

console.log(workers)

// 2.
workers.push('Tiago')

console.log(workers)

// 3.
console.log(
  workers.join(', ')
)

// 4.
console.log(
  workers.includes('Ana')
)

// 5.
const indexToRemove = workers.indexOf('Ana')

workers.splice(indexToRemove, 1)

console.log(workers.includes('Ana'))
