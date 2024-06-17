import { useState } from 'react'
import { Image } from './Image'

const images = [
  {
    id: 1,
    author: 'jorge404',
    src: 'city.jpg',
    description: 'Selva urbana 🏙',
  },
  {
    id: 2,
    author: 'xXx_marta_xXx',
    src: 'mountains.jpg',
    description: 'Viagem a Yosemite',
  },
  {
    id: 3,
    author: 'power-puff-girlz',
    src: 'tropical.jpg',
    description: 'Férias de verão',
  },
]

export const Gallery = () => {
  const [expandedImageId, setExpandedImageId] = useState<
    number | undefined
  >()

  const handleExpandImage = (imageId: number) => {
    setExpandedImageId(imageId)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        backgroundColor: '#eee',
        padding: '3rem'
      }}
    >
      {images.map((image) => (
        <Image
          image={image}
          expanded={image.id === expandedImageId}
          handleExpandImage={handleExpandImage}
        />
      ))}
    </div>
  )
}
