import { useRef, useState } from 'react'
import { Timer } from './Timer'

export const Chronometer = () => {
  const initialTime = new Date().getTime()

  const [startTime, setStartTime] = useState(initialTime)
  const [currentTime, setCurrentTime] = useState(initialTime)

  const timerRef = useRef<number | null>(null)

  const handleStartTimer = () => {
    clearInterval(timerRef.current ?? 0)

    timerRef.current = setInterval(() => {
      setCurrentTime(new Date().getTime())
    }, 10)

    setStartTime(new Date().getTime())
  }

  const handleStopTimer = () => {
    clearInterval(timerRef.current ?? 0)

    setStartTime(initialTime)
    setCurrentTime(initialTime)
  }

  const seconds = (currentTime - startTime) / 1000

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem', border: '2px solid #999' }}>
      <Timer seconds={seconds} />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        <button onClick={handleStartTimer}>Iniciar</button>
        <button onClick={handleStopTimer}>Parar</button>
      </div>
    </div>
  )
}
