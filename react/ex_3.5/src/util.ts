export function convertCelsiusToFahrenheit<T extends number | undefined>(
  t: T
): T
export function convertCelsiusToFahrenheit(t?: number | undefined) {
  if (t === undefined) return undefined

  return t * (9 / 5) + 32
}

export function convertFahrenheitToCelsius<T extends number | undefined>(
  t: T
): T
export function convertFahrenheitToCelsius(t?: number | undefined) {
  if (t === undefined) return undefined

  return (t - 32) * (5 / 9)
}

export function valueToRange(
  value: number,
  [minValue, maxValue]: [number, number],
  [minRange, maxRange]: [number, number]
) {
  let v = value
  if (v < minValue) v = minValue
  if (v > maxValue) v = maxValue

  const slope = (v - minValue) / (maxValue - minValue)

  return slope * (maxRange - minRange) + minRange
}

// https://stackoverflow.com/a/76126221
export function interpolateColor(
  color1: string,
  color2: string,
  percent: number
) {
  // Convert the hex colors to RGB values
  const r1 = parseInt(color1.substring(1, 3), 16)
  const g1 = parseInt(color1.substring(3, 5), 16)
  const b1 = parseInt(color1.substring(5, 7), 16)

  const r2 = parseInt(color2.substring(1, 3), 16)
  const g2 = parseInt(color2.substring(3, 5), 16)
  const b2 = parseInt(color2.substring(5, 7), 16)

  // Interpolate the RGB values
  const r = Math.round(r1 + (r2 - r1) * percent)
  const g = Math.round(g1 + (g2 - g1) * percent)
  const b = Math.round(b1 + (b2 - b1) * percent)

  // Convert the interpolated RGB values back to a hex color
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}
