import { useDispatch, useSelector } from 'react-redux'
import { removerContato } from '../../store/reducers/contato'
import { RootReducer } from '../../store/reducers'
import ContatoForm from '../ContatoForm'
import { useState } from 'react'
import { Titulo } from '../../containers/ListaCBarraLateral/style'
import * as S from '../../styles'

const ListaDeContato = () => {
  const dispatch = useDispatch()
  const { items: contactos } = useSelector(
    (state: RootReducer) => state.contatos
  )
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const [contactoParaEditar, setContactoParaEditar] = useState<number | null>(
    null
  )

  const filtraContatos = () => {
    let contatosFiltrados = contactos

    if (termo) {
      contatosFiltrados = contatosFiltrados.filter((item) =>
        item.nome.toLowerCase().includes(termo.toLowerCase())
      )
    }

    if (criterio === 'grupo') {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.grupo === valor
      )
    }

    return contatosFiltrados
  }

  const contatos = filtraContatos()

  return (
    <>
      {contatos.length === 0 ? (
        <p>Não tem contatos</p>
      ) : (
        contatos.map((contato) =>
          contactoParaEditar === contato.id ? (
            <ContatoForm
              key={contato.id}
              id={contato.id}
              nomeInicial={contato.nome}
              emailInicial={contato.email}
              telefonoInicial={contato.telefono}
              onSubmit={() => setContactoParaEditar(null)}
            />
          ) : (
            <S.Card key={contato.id}>
              <Titulo>{contato.nome}</Titulo>
              <p>{contato.email}</p>
              <p>{contato.telefono}</p>
              <S.BarraAcoes>
                <button onClick={() => setContactoParaEditar(contato.id)}>
                  Editar
                </button>
                <button onClick={() => dispatch(removerContato(contato.id))}>
                  Eliminar
                </button>
              </S.BarraAcoes>
            </S.Card>
          )
        )
      )}
    </>
  )
}

export default ListaDeContato
