import { MouseEvent } from 'react'
import { ActionButton } from './ActionButton'

export const App = () => {
  // 2.
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const buttonText = e.currentTarget.textContent

    alert(`Pressed button with text: ${buttonText}`)
  }

  return <button onClick={handleClick}>Press me!</button>

  // 3.
  return (
    <>
      <ActionButton alertMessage="Um" />
      <ActionButton alertMessage="Dois" />
      <ActionButton alertMessage="Três" />
    </>
  )
}
