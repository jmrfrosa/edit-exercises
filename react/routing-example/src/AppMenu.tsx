import { FC } from 'react'
import { pageList } from './constants/pageList'

type Props = {
  selectedPage: string
  handlePageChange: (pageId: string) => void
}

export const AppMenu: FC<Props> = ({ selectedPage, handlePageChange }) => {
  return (
    <nav>
      <ul>
        {pageList.map((page) => (
          <a
            // Aqui criamos um link normal, mas não vamos utilizar a propriedade href como habitual,
            // porque não estamos a lidar com URLs na nossa aplicação, o que seria mais complicado.
            // Utilizamos apenas o evento de click para mudar de página, de forma a simplificar
            key={page.id}
            href="#"
            onClick={() => handlePageChange(page.id)}
          >
            <li>{selectedPage === page.id ? <strong>{page.label}</strong> : page.label}</li>
          </a>
        ))}
      </ul>
    </nav>
  )
}
