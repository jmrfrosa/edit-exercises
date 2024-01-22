import { Dispatch, FC } from 'react'
import { User, UserAction, UserActionType } from './UserList'

type Props = {
  user: User
  dispatch: Dispatch<UserAction>
}

export const Card: FC<Props> = ({ user, dispatch }) => {
  return (
    <div className="flex-v padded">
      <div className="flex-h padded align-v-center bordered">
        <img
          className="profile-pic"
          src={user.picture}
        ></img>
        <div className="flex-v">
          {user.isAdmin && <strong>ADMIN</strong>}
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
        </div>
      </div>
      <div className="flex-h">
        <button
          onClick={() => dispatch({ type: UserActionType.PROMOTE, payload: { id: user.id } })}
        >
          Promote
        </button>
        <button onClick={() => dispatch({ type: UserActionType.DEMOTE, payload: { id: user.id } })}>
          Demote
        </button>
        <button onClick={() => dispatch({ type: UserActionType.DELETE, payload: { id: user.id } })}>
          Delete
        </button>
      </div>
    </div>
  )
}
