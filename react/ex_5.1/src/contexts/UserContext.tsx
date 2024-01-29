import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react'
import { User, UserAction, UserActionType } from './typings'

const reducer = (
  users: User[],
  action: UserAction
): User[] => {
  switch (action.type) {
    case UserActionType.ADD: {
      const newUser = {
        ...action.payload,
        id: crypto.randomUUID(),
      }

      return [...users, newUser]
    }
    case UserActionType.DELETE: {
      return users.filter((u) => u.id !== action.payload.id)
    }
    case UserActionType.PROMOTE: {
      const userToPromote = users.find(
        (u) => u.id === action.payload.id
      )

      if (!userToPromote)
        throw Error('Cannot find user to promote')

      const listWithoutUser = users.filter(
        (u) => u.id !== action.payload.id
      )

      const promotedUser = {
        ...userToPromote,
        isAdmin: true,
      }

      return [...listWithoutUser, promotedUser]
    }
    case UserActionType.DEMOTE: {
      const userToDemote = users.find(
        (u) => u.id === action.payload.id
      )

      if (!userToDemote)
        throw Error('Cannot find user to demote')

      const listWithoutUser = users.filter(
        (u) => u.id !== action.payload.id
      )

      const demotedUser = {
        ...userToDemote,
        isAdmin: false,
      }

      return [...listWithoutUser, demotedUser]
    }
  }
}

type ContextValue = {
  users: User[]
  dispatch: Dispatch<UserAction>
}

const UserContext = createContext<ContextValue | null>(null)

type ProviderProps = PropsWithChildren & {
  initialUsers: User[]
}

export const UserContextProvider: FC<ProviderProps> = ({
  initialUsers,
  children,
}) => {
  const [userList, dispatch] = useReducer(
    reducer,
    initialUsers
  )

  return (
    <UserContext.Provider
      value={{ users: userList, dispatch }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)

  if (!context) throw new Error('Missing context!')

  return context
}
