Vamos criar uma galeria de fotografias:

- Vamos partir de uma lista de fotografias, em que para cada fotografia temos o URL da imagem, o autor e também a sua descrição. Estes são os nossos dados iniciais:

```js
const images = [
  {
    id: 1,
    author: 'jorge404',
    src: 'city.jpg',
    description: 'Selva urbana 🏙',
  },
  {
    id: 2,
    author: 'xXx_marta_xXx',
    src: 'mountains.jpg',
    description: 'Viagem a Yosemite',
  },
  {
    id: 3,
    author: 'power-puff-girlz',
    src: 'tropical.jpg',
    description: 'Férias de verão',
  },
]
```

- O comportamento desejado é que a lista apareça como uma galeria apenas com cada imagem e autor. Só ao clicar numa determinada imagem é que vamos expandir e mostrar a sua descrição.
- Apenas uma descrição poderá ser mostrada de cada vez. Se expandirmos uma segunda imagem, a primeira descrição deve desaparecer.
