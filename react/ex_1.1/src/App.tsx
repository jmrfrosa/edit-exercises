import { Card } from './Card'

export const App = () => {
  return (
    <div
      style={{
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Card
        name="Julieta Antunes"
        picture="https://avatars.githubusercontent.com/u/33245227"
        bio="Nómada digital, gosto de escalar montanhas de bits e mergulhar em oceanos de código."
      />
      <Card
        name="Daniel Barros"
        picture="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/183.jpg"
        bio="Tradicionalista puro, sigam-me para dicas de dieta mediterrânea"
      />
      <Card
        name="Roberto Coelho"
        picture="https://avatars.githubusercontent.com/u/46840667"
        bio="🍿 Sempre pronto para mais drama"
      />
    </div>
  )
}
