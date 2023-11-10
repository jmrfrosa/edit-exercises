// 1.
const symbolToCurrency: Record<string, string> = {
  '€': 'EUR',
  '$': 'USD',
  '£': 'GBP',
}

const getPriceFromString = (formattedPrice: string) => {
  const sanitizedPrice = formattedPrice.trim()

  const currency = sanitizedPrice.charAt(0)
  const price = sanitizedPrice.slice(1).trim().replace(',', '.')

  return {
    currency: symbolToCurrency[currency],
    price: Number.parseFloat(price)
  }
}

console.log(getPriceFromString('€ 11,23'))
console.log(getPriceFromString('$ 9.99'))
console.log(getPriceFromString('£ 30,00'))
console.log(getPriceFromString('  € 11,23  '))

// 2.
const currencyValues: Record<string, number> = {
  'EUR': 1,
  'USD': 1.07,
  'GBP': 0.87,
}

// 3.
const currencyToSymbol: Record<string, string> = {
  'EUR': '€',
  'USD': '$',
  'GBP': '£',
}

const convertCurrency = (
  value: number,
  fromCurrency: string,
  toCurrency: string,
) => {
  const conversionRate = currencyValues[toCurrency] / currencyValues[fromCurrency]
  const convertedValue = value * conversionRate

  return `${currencyToSymbol[toCurrency]} ${convertedValue.toFixed(2)}`
}

console.log(convertCurrency(10, 'EUR', 'USD'))
console.log(convertCurrency(10, 'USD', 'EUR'))
console.log(convertCurrency(10, 'GBP', 'EUR'))
console.log(convertCurrency(10, 'GBP', 'USD'))
