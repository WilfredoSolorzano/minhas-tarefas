import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/reducers'
import { useState } from 'react'
import * as S from './styles'
import { Contato } from '../../types'
import { seleccionarContato } from '../../store/reducers/contato'
import { alterarTermo } from '../../store/reducers/filtro'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const { items: contactos } = useSelector(
    (state: RootReducer) => state.contatos
  )
  const [termo, setTermo] = useState('')

  const filtrarContatos = () => {
    return contactos.filter((contacto: Contato) =>
      contacto.nome.toLowerCase().includes(termo.toLowerCase())
    )
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
    dispatch(alterarTermo(e.target.value)) // Dispatch the action to update the term in the Redux store
  }

  return (
    <S.Aside>
      <div>
        {mostrarFiltros && (
          <>
            <S.InputBuscar
              type="text"
              placeholder="Buscar contatos"
              value={termo}
              onChange={handleSearch}
            />
            <S.ListaContactos>
              {filtrarContatos().map((contato) => (
                <S.ContactoItem
                  key={contato.id}
                  onClick={() => dispatch(seleccionarContato(contato.id))}
                >
                  <p>{contato.nome}</p>
                  <small>{contato.email}</small>
                </S.ContactoItem>
              ))}
            </S.ListaContactos>
          </>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
