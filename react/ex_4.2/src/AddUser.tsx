import { ChangeEvent, Dispatch, FC, useState } from 'react'
import { UserAction, UserActionType } from './UserList'

const initialForm = {
  name: '',
  picture: '',
  bio: '',
  isAdmin: false,
}

type Props = {
  dispatch: Dispatch<UserAction>
}

export const AddUser: FC<Props> = ({ dispatch }) => {
  const [form, setForm] = useState(initialForm)

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    return setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleFormChange}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <label>Picture URL</label>
        <input
          type="text"
          name="picture"
          value={form.picture}
          onChange={handleFormChange}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <label>Bio</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleFormChange}
        />
      </div>
      <button
        type="button"
        onClick={() => dispatch({ type: UserActionType.ADD, payload: form })}
      >
        Create User
      </button>
    </>
  )
}
