import './style.css'

// 1.

const timer = 2000 // 2 seconds
const slideNodes = document.querySelectorAll('.slide')

// 2.

let indexer = 1

const findActiveSlideIndex = () => {
  const slideArray = [...slideNodes]

  return slideArray.findIndex((slideNode) =>
    slideNode.classList.contains('active')
  )
}

const findNextSlide = (currentSlideIndex: number) => {
  const nextIndex = currentSlideIndex + indexer

  return slideNodes[nextIndex]
}

const executeSlideshow = () => {
  const activeSlideIndex = findActiveSlideIndex()

  let nextSlide = findNextSlide(activeSlideIndex)

  if (!nextSlide) {
    indexer *= -1

    nextSlide = findNextSlide(activeSlideIndex)
  }

  const currentSlide = slideNodes[activeSlideIndex]

  currentSlide.classList.remove('active')
  nextSlide.classList.add('active')
}

// 1.

setInterval(executeSlideshow, timer)
