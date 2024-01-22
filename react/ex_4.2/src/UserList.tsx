import { Card } from './Card'
import userData from '../data.json'
import { useReducer } from 'react'
import { AddUser } from './AddUser'

export type User = {
  id: string
  name: string
  picture: string
  bio: string
  isAdmin: boolean
}

export enum UserActionType {
  ADD = 'add',
  DELETE = 'delete',
  PROMOTE = 'promote',
  DEMOTE = 'demote',
}

type UserAddAction = {
  type: UserActionType.ADD
  payload: Omit<User, 'id'>
}

type UserDeleteAction = {
  type: UserActionType.DELETE
  payload: Pick<User, 'id'>
}

type UserPromoteAction = {
  type: UserActionType.PROMOTE
  payload: Pick<User, 'id'>
}

type UserDemoteAction = {
  type: UserActionType.DEMOTE
  payload: Pick<User, 'id'>
}

export type UserAction = UserAddAction | UserDeleteAction | UserPromoteAction | UserDemoteAction

const reducer = (users: User[], action: UserAction): User[] => {
  switch (action.type) {
    case UserActionType.ADD: {
      const newUser = { ...action.payload, id: crypto.randomUUID() }

      return [...users, newUser]
    }
    case UserActionType.DELETE: {
      return users.filter((u) => u.id !== action.payload.id)
    }
    case UserActionType.PROMOTE: {
      const userToPromote = users.find((u) => u.id === action.payload.id)

      if (!userToPromote) throw Error('Cannot find user to promote')

      const listWithoutUser = users.filter((u) => u.id !== action.payload.id)

      const promotedUser = { ...userToPromote, isAdmin: true }

      return [...listWithoutUser, promotedUser]
    }
    case UserActionType.DEMOTE: {
      const userToDemote = users.find((u) => u.id === action.payload.id)

      if (!userToDemote) throw Error('Cannot find user to demote')

      const listWithoutUser = users.filter((u) => u.id !== action.payload.id)

      const demotedUser = { ...userToDemote, isAdmin: false }

      return [...listWithoutUser, demotedUser]
    }
  }
}

export const UserList = () => {
  const [userList, dispatch] = useReducer(reducer, userData)

  console.log(userList)

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
        {userList.map((u) => (
          <Card
            key={u.id}
            user={u}
            dispatch={dispatch}
          />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <AddUser dispatch={dispatch} />
      </div>
    </div>
  )
}
