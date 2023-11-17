// 1.

class CalendarEvent {
  name: string
  start: Date
  end: Date

  constructor(name: string, start: Date, end: Date) {
    this.name = name
    this.start = start
    this.end = end
  }

  // 2.

  get timeRange() {
    return `${this.start.toLocaleString()} - ${this.end.toLocaleString()}}`
  }

  // 3.

  set from(dateStr: string) {
    const newDate = new Date(dateStr)
    if (newDate > this.end) {
      throw new Error('Data inicial não pode ser posterior a data final')
    }

    this.start = newDate
  }

  set to(dateStr: string) {
    const newDate = new Date(dateStr)
    if (newDate < this.start) {
      throw new Error('Data final não pode ser anterior a data inicial')
    }

    this.end = newDate
  }

  // 4.

  postpone(minutes: number) {
    const msToAdd = 1000 * 60 * minutes

    this.start = new Date(this.start.getTime() + msToAdd)
    this.end = new Date(this.end.getTime() + msToAdd)
  }
}
