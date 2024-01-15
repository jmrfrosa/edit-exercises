Vamos utilizar React para criar uma pequena página que vai mostrar os dados de 3 utilizadores:

Os dados que pretendemos mostrar na página são:

```json
[
  {
    "name": "Julieta Antunes",
    "picture": "https://avatars.githubusercontent.com/u/33245227",
    "bio": "Nómada digital, gosto de escalar montanhas de bits e mergulhar em oceanos de código."
  },
  {
    "name": "Daniel Barros",
    "picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/183.jpg",
    "bio": "Tradicionalista puro, sigam-me para dicas de dieta mediterrânea "
  },
  {
    "name": "Roberto Coelho",
    "picture": "https://avatars.githubusercontent.com/u/46840667",
    "bio": "🍿 Sempre pronto para mais drama"
  }
]
```

1. Iniciar uma nova aplicação React através do Vite.
2. Criar um pequeno "cartão" de perfil para cada um dos utilizadores. Este cartão deve ter a foto de perfil, o nome do utilizador e a sua biografia.
3. Utilizar as props de forma a reutilizar o mesmo componente para os vários utilizadores.
