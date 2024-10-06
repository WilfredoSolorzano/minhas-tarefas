import { useDispatch, useSelector } from 'react-redux'
import { removerContacto } from '../../store/reducers/contato'
import { RootReducer } from '../../store/reducers'
import ContactoForm from '../ContatoForm'
import { useState } from 'react'
import { Titulo } from '../../containers/ListaDeContatos/style'
import * as S from '../../styles'

const ListaDeContactos = () => {
  const dispatch = useDispatch()
  const { items: contactos } = useSelector(
    (state: RootReducer) => state.contactos
  )
  const [contactoParaEditar, setContactoParaEditar] = useState<number | null>(
    null
  )

  return (
    <>
      {contactos.map((contacto) =>
        contactoParaEditar === contacto.id ? (
          <ContactoForm
            key={contacto.id}
            id={contacto.id}
            nombreInicial={contacto.nombre}
            emailInicial={contacto.email}
            telefonoInicial={contacto.telefono}
            onSubmit={() => setContactoParaEditar(null)}
          />
        ) : (
          <S.Card key={contacto.id}>
            <Titulo>{contacto.nombre}</Titulo>
            <p>{contacto.email}</p>
            <p>{contacto.telefono}</p>
            <S.BarraAcoes>
              <button onClick={() => setContactoParaEditar(contacto.id)}>
                Editar
              </button>
              <button onClick={() => dispatch(removerContacto(contacto.id))}>
                Eliminar
              </button>
            </S.BarraAcoes>
          </S.Card>
        )
      )}
    </>
  )
}

export default ListaDeContactos
