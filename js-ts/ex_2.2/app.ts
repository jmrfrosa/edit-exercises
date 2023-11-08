const firstName = prompt('What is your first name?')

const lastName = prompt('What is your last name?')

const capitalizeName = (name: string | null) => {
  name ??= ''

  const firstLetter = name.charAt(0)
  const restOfTheName = name.slice(1)

  return `${firstLetter.toUpperCase()}${restOfTheName.toLowerCase()}`
}

alert(`Your name is: ${capitalizeName(firstName)} ${capitalizeName(lastName)}`)
