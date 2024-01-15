export const DarkModeButton = () => {
  const toggleDarkMode = () => {
    const isDarkMode = document.body.style.backgroundColor === 'black'

    if (isDarkMode) {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    } else {
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    }
  }

  return <button onClick={toggleDarkMode}>Toggle dark mode</button>
}
