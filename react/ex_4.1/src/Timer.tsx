import { FC } from 'react'

type Props = {
  seconds: number
}

export const Timer: FC<Props> = ({ seconds }) => {
  return <h2>{seconds.toFixed(3)}</h2>
}
