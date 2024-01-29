import { ChangeEvent, useState } from 'react'
import { useUserContext } from './contexts/UserContext'
import { UserActionType } from './contexts/typings'

const initialForm = {
  name: '',
  picture: '',
  bio: '',
  isAdmin: false,
}

export const AddUser = () => {
  const { dispatch } = useUserContext()
  const [form, setForm] = useState(initialForm)

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    return setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleFormChange}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <label>Picture URL</label>
        <input
          type="text"
          name="picture"
          value={form.picture}
          onChange={handleFormChange}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <label>Bio</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleFormChange}
        />
      </div>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: UserActionType.ADD,
            payload: form,
          })
        }
      >
        Create User
      </button>
    </>
  )
}
