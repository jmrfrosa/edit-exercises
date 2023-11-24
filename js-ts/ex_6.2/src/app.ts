import './style.css'

interface CommentFormElements extends HTMLFormControlsCollection {
  author: HTMLInputElement
  comment: HTMLTextAreaElement
}

const commentsDiv = document.querySelector('.comments')!

const formNode: HTMLFormElement = document.querySelector('#comment-form')!

const errorMsgNode = document.querySelector('#error-msg')!

formNode.addEventListener('submit', (event) => {
  event.preventDefault()

  const formElements = formNode.elements as CommentFormElements

  const author = formElements.author.value
  const comment = formElements.comment.value

  try {
    validateComment(author, comment)

    addComment(author, comment)
  } catch (error) {

    if (error instanceof MissingAuthorError) {
      errorMsgNode.textContent = error.message
    }

    if (error instanceof CommentTooShortError) {
      errorMsgNode.textContent = error.message
    }
  }
})

function addComment(author: string, comment: string) {
  const commentNode = document.createElement('div')

  const authorNode = document.createElement('span')
  authorNode.classList.add('author')
  authorNode.textContent = author

  commentNode.appendChild(authorNode)

  const commentBodyNode = document.createElement('p')
  commentNode.classList.add('comment')
  commentBodyNode.textContent = comment
  commentNode.appendChild(commentBodyNode)

  commentsDiv.appendChild(commentNode)

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  commentsDiv.appendChild(deleteButton)

  deleteButton.addEventListener('click', () => {
    commentsDiv.removeChild(commentNode)
    commentsDiv.removeChild(deleteButton)
  })
}

class MissingAuthorError extends Error {
  constructor(message?: string) {
    super(message ?? 'Author is missing')
  }
}
class CommentTooShortError extends Error {
  constructor(message?: string) {
    super(message ?? 'Comment is too short')
  }
}

function validateComment(author: string, comment: string) {
  console.log({ author, comment })

  if (author === '') {
    throw new MissingAuthorError()
  }

  if (comment.length < 10) {
    throw new CommentTooShortError()
  }
}
