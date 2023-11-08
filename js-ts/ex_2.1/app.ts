type StringOrNumber = string | number

const showVariable = (a: StringOrNumber) => {
  console.log(a)
}

showVariable('hello')
showVariable(55)
