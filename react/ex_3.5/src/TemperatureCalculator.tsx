import { useState } from 'react'
import { TemperatureInput } from './TemperatureInput'
import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
  interpolateColor,
  valueToRange,
} from './util'
import { TemperatureScales } from './typings'

export const TemperatureCalculator = () => {
  const [baseScale, setBaseScale] = useState<TemperatureScales | undefined>()
  const [baseTemperature, setBaseTemperature] = useState<string | undefined>()

  const handleTemperatureChange = (
    scale: TemperatureScales,
    value?: string
  ) => {
    setBaseScale(scale)
    setBaseTemperature(value)
  }

  let celsiusTemperature
  let fahrenheitTemperature
  switch (baseScale) {
    case TemperatureScales.CELSIUS:
      celsiusTemperature = baseTemperature
      fahrenheitTemperature = baseTemperature
        ? convertCelsiusToFahrenheit(Number(baseTemperature))
        : undefined
      break
    case TemperatureScales.FAHRENHEIT:
      celsiusTemperature = baseTemperature
        ? convertFahrenheitToCelsius(Number(baseTemperature))
        : undefined
      fahrenheitTemperature = baseTemperature
      break
  }

  const percentHot = valueToRange(
    celsiusTemperature ? Number(celsiusTemperature) : 0,
    [-40, 40],
    [0, 1]
  )

  document.body.style.background = interpolateColor(
    '#008eff',
    '#ff6a00',
    percentHot
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <TemperatureInput
        value={String(celsiusTemperature ?? '')}
        scale={TemperatureScales.CELSIUS}
        onChange={(e) =>
          handleTemperatureChange(TemperatureScales.CELSIUS, e.target.value)
        }
      />
      <TemperatureInput
        value={String(fahrenheitTemperature ?? '')}
        scale={TemperatureScales.FAHRENHEIT}
        onChange={(e) =>
          handleTemperatureChange(TemperatureScales.FAHRENHEIT, e.target.value)
        }
      />
    </div>
  )
}
