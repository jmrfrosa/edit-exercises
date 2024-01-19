import { ChangeEvent, FC } from 'react'
import { TemperatureScales } from './typings'

type Props = {
  value?: string | undefined
  scale: TemperatureScales
  onChange: (e: ChangeEvent<HTMLInputElement>) => unknown
}

export const TemperatureInput: FC<Props> = ({ value, scale, onChange }) => {
  return (
    <div
      style={{
        width: '400px',
        border: '1px solid #FFF',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        padding: '1rem',
      }}
    >
      <label>
        {scale === TemperatureScales.CELSIUS ? 'Celsius' : 'Fahrenheit'}
      </label>
      <input
        value={value ?? ''}
        onChange={onChange}
      />
    </div>
  )
}
