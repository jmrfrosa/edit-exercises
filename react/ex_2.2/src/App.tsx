import users from '../data.json'
import { Card } from './Card'

const keyedUsers = users.map((u) => {
  const key = crypto.randomUUID()

  return { ...u, id: key }
})

export const App = () => {
  return (
    <div
      style={{
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {keyedUsers.map((u) => {
        const { id, ...userProps } = u

        return (
          <Card
            key={id}
            {...userProps}
          />
        )
      })}
    </div>
  )
}
