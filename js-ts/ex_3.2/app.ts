// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
const generateRandomNumber = (minNumber: number, maxNumber: number) => {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
}

const chosenNumber = generateRandomNumber(1, 100)

// 1.
const userChoice = prompt('Escolhe um número entre 0 e 100')
const userNumber = Number(userChoice || 0)

if (userNumber < chosenNumber) {
  console.log('Demasiado baixo!')
} else if (userNumber > chosenNumber) {
  console.log('Demasiado alto!')
} else {
  console.log('Certo!')
}

// 2.
let guesses = 0

while (guesses < 10) {
  const userChoice = prompt('Escolhe um número entre 1 e 100')
  const userNumber = Number(userChoice || 1)

  guesses += 1
  const remainingGuesses = 10 - guesses

  if (userNumber < chosenNumber) {
    alert(`Demasiado baixo! Faltam ${remainingGuesses} palpites`)
  } else if (userNumber > chosenNumber) {
    alert(`Demasiado alto! Faltam ${remainingGuesses} palpites`)
  } else if (userNumber === chosenNumber) {
    alert(`Certo! Ganhaste com ${guesses} palpites`)
    break
  }

  if (guesses === 10) {
    alert(`Perdeste! O número certo era ${chosenNumber}`)
  }
}
