import { Card } from './Card'
import { AddUser } from './AddUser'
import { useUserContext } from './contexts/UserContext'

export const UserList = () => {
  const { users } = useUserContext()

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        style={{
          margin: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {users.map((u) => (
          <Card
            key={u.id}
            user={u}
          />
        ))}
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <AddUser />
      </div>
    </div>
  )
}
