import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react'
import { expect } from 'vitest'
import { AgeForm } from '../AgeForm'

const propsMock = {
  warningMessage: 'sample warning',
}

const setup = () => {
  render(<AgeForm {...propsMock} />)

  const nameInput = screen.getByPlaceholderText('Name')
  const ageInput = screen.getByPlaceholderText('Age')
  const submitButton = screen.getByText('Submit')

  return {
    nameInput,
    ageInput,
    submitButton,
  }
}

test('renders form', () => {
  render(<AgeForm />)
  const nameInput = screen.getByPlaceholderText('Name')
  const ageInput = screen.getByPlaceholderText('Age')
  const button = screen.getByText('Submit')

  expect(nameInput).toBeInTheDocument()
  expect(ageInput).toBeInTheDocument()
  expect(button).toBeInTheDocument()
})

test('form can be filled', () => {
  const { nameInput, ageInput } = setup()

  fireEvent.change(nameInput, {
    target: { value: 'Test name' },
  })
  fireEvent.change(ageInput, {
    target: { value: '3' },
  })

  expect(nameInput.value).toBe('Test name')
  expect(ageInput.value).toBe('3')
})

test('form can be submitted when age is over 18', () => {
  const { nameInput, ageInput, submitButton } = setup()

  fireEvent.change(nameInput, {
    target: { value: 'Test name' },
  })
  fireEvent.change(ageInput, {
    target: { value: '20' },
  })

  fireEvent.click(submitButton)

  const successDiv = screen.getByText('Form submitted!')

  expect(successDiv).toBeInTheDocument()
  expect(nameInput).not.toBeInTheDocument()
  expect(ageInput).not.toBeInTheDocument()
  expect(submitButton).not.toBeInTheDocument()
})

test('form can not be submitted when age is under 18', () => {
  const { nameInput, ageInput, submitButton } = setup()

  fireEvent.change(nameInput, {
    target: { value: 'Test name' },
  })
  fireEvent.change(ageInput, {
    target: { value: '10' },
  })

  fireEvent.click(submitButton)

  const successDiv = screen.queryByText('Form submitted!')
  const warningText = screen.getByText(
    propsMock.warningMessage
  )

  expect(submitButton.disabled).toBeTruthy()
  expect(warningText).toBeInTheDocument()
  expect(successDiv).not.toBeInTheDocument()
})
