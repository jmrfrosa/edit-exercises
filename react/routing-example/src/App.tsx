import { useState } from 'react'
import { AppMenu } from './AppMenu'
import { pageList } from './constants/pageList'

export const App = () => {
  // Utilizamos este estado de forma a que a nossa App se lembre da página em que estamos
  const [selectedPage, setSelectedPage] = useState('about')

  const handlePageChange = (pageId: string) => {
    setSelectedPage(pageId)
  }

  // Sempre que escolhemos uma página nova, vamos consultar a lista das páginas e encontrar o componente correspondente
  // ATENÇÃO: Os nomes das variáveis dos componentes têm sempre que começar por letra maiúscula
  const PageComponent = pageList.find((page) => page.id === selectedPage)?.component

  return (
    <>
      <AppMenu
        selectedPage={selectedPage}
        handlePageChange={handlePageChange}
      />
      {/* Case exista um componente para a página escolhida, vamos mostrá-lo por baixo do menu */}
      {PageComponent ? <PageComponent /> : null}
    </>
  )
}
