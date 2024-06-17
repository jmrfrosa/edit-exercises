import { FC } from 'react'

type Props = {
  expanded?: boolean
  image: {
    id: number
    src: string
    author: string
    description: string
  }
  handleExpandImage: (id: number) => void
}

export const Image: FC<Props> = ({
  image,
  expanded,
  handleExpandImage,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        backgroundColor: '#fff',
        borderRadius: '1rem',
        border: '1px solid #222',
        padding: '2rem',
      }}
    >
      <img
        src={image.src}
        alt={image.description}
        onClick={() => handleExpandImage(image.id)}
        style={{ height: '10rem', width: '10rem', objectFit: 'cover', cursor: 'pointer' }}
      />
      <span
        style={{ fontSize: '1rem', fontWeight: 'bolder' }}
      >
        {image.author}
      </span>
      {expanded && <p>{image.description}</p>}
    </div>
  )
}
