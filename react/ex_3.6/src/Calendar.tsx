import { useState } from 'react'
import { Event } from './typings'
import { AddEvent } from './AddEvent'
import { EventList } from './EventList'

export const Calendar = () => {
  const [events, setEvents] = useState<Event[]>([])

  const sortedEvents = events
    .map((ev) => ({ ...ev }))
    .sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <>
      <EventList events={sortedEvents} />
      <AddEvent setEvents={setEvents} />
    </>
  )
}
