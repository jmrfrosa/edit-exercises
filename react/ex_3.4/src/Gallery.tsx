import { useState } from 'react'
import { Image } from './Image'

const images = [
  { src: 'city.jpg', caption: 'Selva urbana 🏙' },
  {
    src: 'mountains.jpg',
    caption: 'Viagem a Yosemite',
  },
  { src: 'tropical.jpg', caption: 'Férias de verão' },
]

export const Gallery = () => {
  const [showDescription, setShowDescription] =
    useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const image = images[selectedIndex]

  const handleBefore = () => {
    const nextImage = images[selectedIndex - 1]

    if (nextImage) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  const handleNext = () => {
    const nextImage = images[selectedIndex + 1]

    if (nextImage) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const handleHideCaption = () => {
    setShowDescription(!showDescription)
  }

  return (
    <>
      <Image
        key={image.src}
        src={image.src}
        caption={showDescription ? image.caption : ''}
      />
      <button onClick={handleHideCaption}>
        {showDescription ? 'Esconder' : 'Mostrar'}{' '}
        descrição
      </button>
      <button onClick={handleBefore}>Anterior</button>
      <button onClick={handleNext}>Próximo</button>
    </>
  )
}
