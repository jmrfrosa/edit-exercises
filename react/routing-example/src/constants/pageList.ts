import { ReactNode } from 'react'
import { AboutPage } from '../pages/About'
import { HelpPage } from '../pages/Help'
import { PicturesPage } from '../pages/Pictures'

type Page = {
  // O id é utilizado para podermos encontrar cada página quando necessário
  id: string
  // A label é apenas utilizada para ser mostrada na navbar, cada página tem um "texto" correspondente
  label: string
  // O componente é um componente React normal, que tem a zona da página que queremos mudar no seu interior
  component: () => ReactNode
}

// Esta é a nossa lista de páginas existentes na aplicação. Cada página tem um componente correspondente
// Vamos exportar esta lista de forma a que a possamos utilizar em todos os componentes que precisam dela
export const pageList: Page[] = [
  { id: 'about', label: 'About', component: AboutPage },
  { id: 'help', label: 'Help', component: HelpPage },
  { id: 'pics', label: 'Pics', component: PicturesPage },
]

// NOTA: Esta lista não precisa de ser armazenada num estado, porque nunca muda
// Como é uma lista *constante*, podemos simplesmente guardá-la aqui à parte
// e utilizá-la em todo o lado da aplicação conforme necessário
