import './style.css'

const timer = 2000 // 2 seconds
const slideNodes = document.querySelectorAll('.slide')

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

let autoPlayerInterval = setInterval(executeSlideshow, timer)

// 1.

const pauseButton = document.querySelector('#btn-pause')!
const forwardButton = document.querySelector('#btn-fwd')!
const autoplayButton = document.querySelector('#btn-auto')!

// 2.

pauseButton.addEventListener('click', () => {
  clearInterval(autoPlayerInterval)

  // 5.

  pauseButton.setAttribute('disabled', 'true')
  autoplayButton.setAttribute('disabled', 'false')
})

// 3.

forwardButton.addEventListener('click', () => {
  executeSlideshow()
})

// 4.

autoplayButton.addEventListener('click', () => {
  autoPlayerInterval = setInterval(executeSlideshow, timer)

  // 5.

  autoplayButton.setAttribute('disabled', 'true')
  pauseButton.setAttribute('disabled', 'false')
})
