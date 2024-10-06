import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/reducers'
import { useState } from 'react'
import * as S from './styles'
import { Contacto } from '../../types'
import { seleccionarContacto } from '../../store/reducers/contato'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const { items: contactos } = useSelector(
    (state: RootReducer) => state.contactos
  )
  const [termo, setTermo] = useState('')

  const filtrarContactos = () => {
    return contactos.filter((contacto: Contacto) =>
      contacto.nombre.toLowerCase().includes(termo.toLowerCase())
    )
  }

  return (
    <S.Aside>
      <div>
        {mostrarFiltros && (
          <>
            <input
              type="text"
              placeholder="Buscar contactos"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
            />
            <S.ListaContactos>
              {filtrarContactos().map((contacto) => (
                <S.ContactoItem
                  key={contacto.id}
                  onClick={() => dispatch(seleccionarContacto(contacto.id))}
                >
                  <p>{contacto.nombre}</p>
                  <small>{contacto.email}</small>
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
