import './style.css'

const bodyNode = document.querySelector('body')!
const dropzoneNode = document.querySelector('#dropzone')! as HTMLDivElement
const feedbackNode = document.querySelector('#feedback')!

dropzoneNode.addEventListener('dragenter', () => {
  dropzoneNode.style.borderColor = 'red'

  feedbackNode.textContent = 'Drop your file here'
})

dropzoneNode.addEventListener('dragleave', () => {
  dropzoneNode.style.borderColor = 'black'
})

dropzoneNode.addEventListener('dragover', (event) => {
  event.preventDefault()
})

dropzoneNode.addEventListener('drop', async (event) => {
  event.preventDefault()

  const file = (event as DragEvent).dataTransfer?.files.item(0)

  if (!file) {
    return
  }

  const reader = new FileReader()

  if (file.type.startsWith('image')) {
    reader.readAsDataURL(file)

    reader.addEventListener('load', () => {
      const imgNode = document.createElement('img')
      imgNode.src = reader.result as string

      bodyNode.appendChild(imgNode)
    })
  } else if (file.type.startsWith('text')) {
    reader.readAsText(file)

    reader.addEventListener('load', () => {
      const textNode = document.createElement('div')
      textNode.innerText = reader.result as string
      bodyNode.appendChild(textNode)
    })
  } else {
    feedbackNode.textContent = 'Content type not supported'
  }
})
