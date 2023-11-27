export const orderStateToClass: Record<string, string> = {
  processing: 'status-warning',
  shipped: 'status-success',
  cancelled: 'status-error',
  draft: 'status-info',
} as const

export const currencyToSymbol: Record<string, string> = {
  EUR: '€',
  USD: '$',
  GBP: '£',
} as const

export const currencyRates: Record<string, number> = {
  EUR: 1,
  USD: 1.09,
  GBP: 0.87,
} as const

export const tableBodyNode = document.querySelector('#table-body')!
export const tableTotalsNode = document.querySelector('#table-totals')!
export const priceTotalsNode = document.querySelector('#price-totals')!
export const currencySelectorNode =
  document.querySelector('#currency-selector')!

// @ts-expect-error
export const createOrderForm = document.forms['create-order'] as HTMLFormElement
export const addProductButton = document.querySelector('#add-product-btn')!
export const productsToAddNode = document.querySelector('#products-to-add')!
