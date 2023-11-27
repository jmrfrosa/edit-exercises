Vamos agora aplicar os conhecimentos que temos da manipulação de listas e da construção do DOM para transformar uma lista de encomendas em elementos visíveis no site.

Partindo da seguinte lista de encomendas:

```typescript
const orders = [
  { id: 'A658', status: 'draft', products: ['T-Shirt', 'Polo'] },
  { id: 'A446', status: 'processing', products: ['T-Shirt'] },
  { id: 'A883', status: 'draft', products: ['Polo', 'Polo'] },
  { id: 'A234', status: 'processing', products: ['Camisa', 'Saia'] },
  { id: 'A754', status: 'cancelled', products: ['Saia'] },
  { id: 'A236', status: 'shipped', products: ['Sweatshirt', 'Vestido'] },
  { id: 'A467', status: 'processing', products: ['Camisa', 'Saia'] },
  { id: 'A213', status: 'cancelled', products: ['Vestido', 'Top'] },
  { id: 'A783', status: 'processing', products: ['T-Shirt', 'Polo'] },
  { id: 'A364', status: 'shipped', products: ['T-Shirt', 'Polo'] },
]
```

1. Cria uma página web simples em HTML e CSS. Esta página deve ter o título "As minhas encomendas" e uma tabela com os respectivos cabeçalhos correspondentes aos dados das nossas encomendas.
2. Transforma cada encomenda numa linha da tabela, e adiciona estes elementos à página.
3. Vamos mostrar os estados da encomenda com diferentes cores: o estado "draft" deve ser azul, o "processing" amarelo, o "shipped" verde e o "cancelled" vermelho.
4. Vamos mostrar a lista de produtos como uma lista HTML `<ul>`.
