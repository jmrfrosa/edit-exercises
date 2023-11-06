// 1.

const a = 5

function myFunction() {
  const b = 10
}

console.log(a) // 5
console.log(b) // ReferenceError: b is not defined

// 2.

function myFunction() {
  const b = 10

  return a + b
}

console.log(myFunction()) // 15

// 3.

function myOtherFunction() {
  const x = 1

  return function() {
    const y = 2

    return x + y + a
  }
}

console.log(
  myOtherFunction()() // 8
)

// 4.

function overridingVariables() {
  let variable = 1

  {
    let variable = 2
    console.log(variable) // 2
  }

  console.log(variable) // 1
}

overridingVariables()

// 5.

function breakingScopeWithVar() {
  var variable = 1

  {
    var variable = 2
    console.log(variable) // 2
  }

  console.log(variable) // 2
}

breakingScopeWithVar()
