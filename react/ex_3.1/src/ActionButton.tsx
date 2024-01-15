import { FC } from 'react'

type Props = {
  alertMessage: string
}

export const ActionButton: FC<Props> = ({ alertMessage }) => {
  const handleClick = () => {
    alert(alertMessage)
  }

  return <button onClick={handleClick}>Press me!</button>
}
