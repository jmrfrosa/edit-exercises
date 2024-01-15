import { Image } from './Image'

const images = [
  { src: 'city.jpg', caption: 'Selva urbana 🏙' },
  { src: 'mountains.jpg', caption: 'Viagem a Yosemite' },
  { src: 'tropical.jpg', caption: 'Férias de verão' },
]

export const Gallery = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      {images.map((image) => (
        <Image
          key={image.src}
          image={image}
        />
      ))}
    </div>
  )
}
