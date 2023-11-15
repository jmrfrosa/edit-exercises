Vamos utilizar várias formas de iteração para uma operação muito comum, que é a transformação de dados para, por exemplo, cálculo de totais ou de estatísticas.

Considerando a seguinte lista de encomendas:
```typescript
[
  { id: 'A554', price: { amount: 12.99, currency: 'USD' }, products: ['T-Shirt'] },
  { id: 'A222', price: { amount: 22.43, currency: 'EUR' }, products: ['T-Shirt', 'Gravata'] },
  { id: 'A878', price: { amount: 58.13, currency: 'USD' }, products: ['T-Shirt', 'T-Shirt', 'Polo'] },
  { id: 'A192', price: { amount: 10.45, currency: 'GBP' }, products: ['Livro'] },
  { id: 'A032', price: { amount: 12.99, currency: 'EUR' }, products: ['T-Shirt'] },
  { id: 'A333', price: { amount: 99.32, currency: 'EUR' }, products: ['Sweater', 'Polo', 'Camisa'] },
  { id: 'A876', price: { amount: 74.00, currency: 'USD' }, products: ['Sweater', 'Livro', 'Livro'] },
  { id: 'A234', price: { amount: 32.56, currency: 'USD' }, products: ['Polo', 'Sweater'] },
]
```

1. Queremos criar uma função que nos permita facilmente obter uma encomenda através do seu ID.
2. Cada encomenda na lista tem um preço, que consiste num valor e numa moeda. Queremos calcular a soma de todos os preços por moeda no seguinte formato: `{ EUR: xxx, USD: xxx, GBP: xxx }`
   1. Resolver utilizando o "for ... of"
   2. Resolver utilizando o "reduce"
3. Devido a pedidos adicionais do mesmo utilizador, vamos clonar a encomenda 'A032' *4* vezes
