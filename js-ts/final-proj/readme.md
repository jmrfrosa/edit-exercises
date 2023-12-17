# Blog - Exercício Final

## Descrição

Vamos construír um blog com várias funcionalidades implementadas através de Javascript.
A nossa aplicação vai receber uma lista de posts com comentários associados, bem como uma lista de utilizadores: ambas através de um endpoint remoto.

Os endpoints para receber os dados são os seguintes:

```bash
# Utilizadores:
GET https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json

# Posts:
GET https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json
```

Os dados seguem o formato dos seguintes exemplos:

### Utilizadores

<!-- prettier-ignore -->
```js
[
  {
    id: 14254,
    name: 'João',
    picture: 'https://placehold.co/400?text=J',
  },
  // ...
]
```

### Posts

<!-- prettier-ignore -->
```js
[
  {
    title: 'Diário de Férias',
    body: 'Este verão estive de férias no Algarve e diverti-me imenso. Visitámos a praia e o campo.',
    createdAt: '2023-12-15T21:13:11.905Z',
    likes: [14254, 24356, 46577],
    comments: [
      {
        userId: 14254,
        body: 'Bom contéudo lol',
        createdAt: '2023-12-15T21:13:11.905Z',
      },
      {
        userId: 24356,
        body: 'Para a próxima tens de ir às dunas',
        createdAt: '2023-12-15T21:13:11.905Z',
      },
    ],
  },
  // ...
]
```

A aplicação deve ser implementada com recurso a HTML, CSS e Typescript, sem recurso a bibliotecas externas de frontend. É permitido, no entanto, (e recomendado) o uso de bibliotecas de desenvolvimento como o Vite ou equivalentes.

### Exemplo

Imagem apresentada apenas a título de exemplo, o estilo não precisa de seguir a mesma convenção! Só importa mesmo o código Javascript 😉

Nota: apesar de imagem só aparecer um post, de forma a caber tudo na mesma imagem, a vossa página inicial (sem pesquisa) deve conter os 10 posts, com respectivos comentários, que o servidor vai retornar no endpoint.

![alt Exemplo](sample.png 'Exemplo')

# O que dever conter a aplicação?

- A página tem design livre, sem necessidade de efeitos ou animações. Não será avaliado o CSS neste exercício, excepto para garantir que o formato é semelhante ao esperado.
- A página deve ter uma barra de pesquisa, em que podemos pesquisar os posts por título.
  - Esta barra de pesquisa consiste num campo de texto e um botão "Pesquisar"
  - Ao premir o botão pesquisar, os posts mostrados na página devem apenas ser aquelas cujo _título_ inclui o texto da caixa de pesquisa
  - Perto da caixa, deve estar o texto "<número> post(s) encontrado(s)", correspondente ao número de posts que a pesquisa encontrou
- A página deve conter os posts filtrados (ou todos, caso a pesquisa esteja vazia), com o título em letra maior e o corpo em letra mais pequena.
- Por baixo de cada post, deve estar um rodapé com:
  - O número de likes que o post teve. Opcionalmente podemos mostrar aqui também a imagem de perfil do utilizador do like
  - A data do post, no formato `dia/mês/ano, horas:minutos`
- Por baixo do rodapé com os likes, deve estar a zona de comentários.
  - Na zona de comentários, deve aparecer a imagem de perfil do autor, o seu nome e o corpo do comentário
  - No rodapé do comentário, deve estar a data do comentário, no formato `dia/mês/ano, horas:minutos`
- Por fim, por baixo da feed de posts, deve estar uma caixa de texto e um botão de submissão. Ao submeter o texto, um novo post deve ser criado e acrescentado à nossa feed\*.

* Nota: o post deve ser apenas acrescentado à feed localmente, não é necessário fazer um fetch de modo a enviá-lo para o servidor

# Recomendações

- É recomendado que desenvolvam o exercício com recurso a branches do Git, servindo cada branch para implementar uma nova funcionalidade
- De forma a juntar os branches ao vosso `master`, devem criar Pull Requests. Não é obrigatório, mas podem pedir aos vossos colegas que façam code review antes de fazer merge do código.
- Apesar de não ser obrigatório, é recomendado que utilizem ferramentes como o Vite, o Rollup ou o Parcel para iniciar a pasta do vosso trabalho com as configurações certas.

## Passos recomendados para a resolução do exercício

1. Comecem por desenhar uma versão rascunho da página em HTML, em que todo o conteúdo é estático
2. Chamem os endpoints referentes aos utilizadores e aos posts para ver o seu conteúdo. Qual o formato? Podemos definir tipos com este formato para que o TS nos ajude.
3. "Desenhem" os vossos posts a partir de uma função. Assim, podem utilizar esta função quando alterarem a pesquisa!
4. Consultem livremente o Google, o MDN e o Stack Overflow para qualquer questão que tenham! Estas 3 ferramentas são uma grande parte do nosso dia-a-dia enquanto developers.

# Entrega final

- As aulas de 3 e 5 de Janeiro servirão para tirar dúvidas acerca do exercício, bem como trabalhar em aula.
- O exercício deve ser entregue após a aula de dia 5, através do link para um repositório Git.
