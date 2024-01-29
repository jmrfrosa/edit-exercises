import { UserList } from './UserList'
import { UserContextProvider } from './contexts/UserContext'
import userData from '../data.json'

export const App = () => {
  return (
    <UserContextProvider initialUsers={userData}>
      <UserList />
    </UserContextProvider>
  )
}
