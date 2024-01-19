import { FC } from 'react'
import { Event } from './typings'

type Props = {
  events: Event[]
}

export const EventList: FC<Props> = ({ events }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        paddingBottom: '2rem',
      }}
    >
      {events.map((ev) => (
        <div
          key={ev.date.getTime()}
          style={{
            padding: '1rem',
            border: '2px solid #CCC',
            borderRadius: '.5rem',
          }}
        >
          <span style={{ fontWeight: '400', color: '#444' }}>
            {ev.date.toLocaleString('en', {
              dateStyle: 'full',
              timeStyle: 'short',
            })}
          </span>
          <h2>{ev.title}</h2>
        </div>
      ))}
    </div>
  )
}
