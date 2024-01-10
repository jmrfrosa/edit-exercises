Vamos utilizar as funcionalidades de JSX que aprendemos para criar uma tabela de encomendas com base numa lista que recebemos (presente em `data.json`).

1. Queremos criar uma tabela que mostre estas encomendas e todos os seus detalhes
2. O estado de cada encomenda vai determinar a cor dessa coluna (ex: `"cancelled"` deverá aparecer a vermelho)
3. Vamos mostrar os produtos separados por vírgula, a não ser que a encomenda tenha mais de 2 produtos (ex: "T-Shirt, Saia, ...")
4. O preço deve ser formatado juntamente com a sua moeda (ex: `{ price: 12.99, currency: 'EUR' }` deve aparecer como `€12.99`)
