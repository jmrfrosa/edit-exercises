import { FC } from 'react'

type Props = {
  src: string
  caption: string
}

export const Image: FC<Props> = ({ src, caption }) => {
  return (
    <div
      key={src}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        gap: '1rem',
        border: '1px solid #777',
        borderRadius: '0.3rem',
        overflow: 'clip',
        backgroundColor: '#FFF',
      }}
    >
      <img
        style={{ height: '150px' }}
        src={src}
      ></img>
      <span
        style={{
          fontSize: '0.7rem',
          color: '#777',
          paddingLeft: '.5rem',
          paddingBottom: '1rem',
        }}
      >
        {caption}
      </span>
    </div>
  )
}
