import { FC, SetStateAction, useState, ChangeEvent, Dispatch } from 'react'
import { Event } from './typings'

type Props = {
  setEvents: Dispatch<SetStateAction<Event[]>>
}

const initialEvent = {
  date: '',
  title: '',
}

export const AddEvent: FC<Props> = ({ setEvents }) => {
  const [eventForm, setEventForm] = useState(initialEvent)

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEventForm({ ...eventForm, [e.target.name]: e.target.value })
  }

  const handleAddEvent = () => {
    if (eventForm.date && eventForm.title) {
      const newEvent: Event = {
        date: new Date(eventForm.date),
        title: eventForm.title,
      }

      setEvents((prevEvents) => [...prevEvents, newEvent])
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
        <label>Date</label>
        <input
          name="date"
          type="datetime-local"
          value={eventForm.date}
          onChange={handleFormChange}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={eventForm.title}
          onChange={handleFormChange}
        />
      </div>
      <button
        type="button"
        onClick={handleAddEvent}
      >
        Add Event
      </button>
    </div>
  )
}
