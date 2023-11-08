// 1. `addToWeek` function

// Easy math!
const MS_IN_SECOND = 1000
const SECONDS_IN_MINUTE = 60
const MINUTES_IN_HOUR = 60
const HOURS_IN_DAY = 24

const MS_PER_DAY = MS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY

const addToWeek = (date?: Date) => {
  date ??= new Date()

  // We can also easily get this by doing just +date
  const numericDate = date.getTime()

  const weekInMs = MS_PER_DAY * 7

  // We can create new dates with the numeric version:
  return new Date(numericDate + weekInMs)
}


// Let's test it!
console.log(
  addToWeek(
    new Date('2023/11/01')
  )
)

console.log(
  addToWeek()
)

// 2. `addDays` and `isFuture` functions

const addDays = (date: Date, days: number) => {
  return new Date(+date + (days * MS_PER_DAY))
}

const isFuture = (date: Date) => {
  const currentDate = new Date()

  return date > currentDate
}

console.log(
  addDays(
    new Date('2023/11/01'),
    1,
  )
)

console.log(
  isFuture(
    new Date('2023/11/15'),
  ),
  isFuture(
    new Date('2023/11/01'),
  ),
)
