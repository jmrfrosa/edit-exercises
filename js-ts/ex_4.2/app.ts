class CalendarEvent {
  name: string
  start: Date
  end: Date

  constructor(name: string, start: Date, end: Date) {
    this.name = name
    this.start = start
    this.end = end
  }
}

const TEN_SECONDS_IN_MS = 1000 * 10
const TEN_MINUTES_IN_MS = 1000 * 60 * 10

let currentDate = new Date()
const events: CalendarEvent[] = [
  new CalendarEvent(
    "Aula de Javascript",
    new Date(currentDate.getTime() + TEN_SECONDS_IN_MS),
    new Date(currentDate.getTime() + TEN_MINUTES_IN_MS)
  ),
]

const interval = setInterval(() => {
  const currentDate = new Date()

  console.log(`Verificando em ${currentDate.toLocaleTimeString(["pt"])}`)

  const anyCurrentEvent = events.some(
    (event) => event.start <= currentDate && event.end >= currentDate
  )

  if (anyCurrentEvent) {
    console.log("Evento a acontecer agora!")
    clearInterval(interval)
  }
}, 1000)
