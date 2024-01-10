import { FC } from 'react'

interface Props {
  picture: string
  name: string
  bio: string
}

export const Card: FC<Props> = ({ picture, name, bio }) => {
  return (
    <div className="flex-h padded align-v-center bordered">
      <img
        className="profile-pic"
        src={picture}
        alt={name}
      ></img>
      <div className="flex-v">
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
    </div>
  )
}
