const codeToSymbols = {
  'EUR': '€',
  'USD': '$',
  'GBP': '£',
}

const symbolsToCode: Record<string, string> = {}

for (const [code, symbol] of Object.entries(codeToSymbols)) {
  symbolsToCode[symbol] = code
}

console.log(symbolsToCode)
