// 1.

let mutableVar = 10
mutableVar = 5

console.log(mutableVar) // 5

const immutableVar = 10

/* TypeError: Assignment to constant variable. */
// immutableVar = 5


// 2.

console.log(
  hoistedFunction('Hoist me up!')
)

/* ReferenceError: Cannot access 'arrowFunction' before initialization */
// console.log(
//   arrowFunction("I'll throw an error")
// )

function hoistedFunction(text) {
  console.log(text)
}

const arrowFunction = (text) => {
  console.log(text)
}

console.log(
  arrowFunction("I can't be hoisted!")
)
