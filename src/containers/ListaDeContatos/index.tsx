import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer, Titulo } from './style'
import { RootReducer } from '../../store/reducers'

const ListaDeContatos = () => {
  const { items } = useSelector((state: RootReducer) => state.contactos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = items

    // Filtrar por termo
    if (termo) {
      contatosFiltrados = contatosFiltrados.filter((item) =>
        item.nome.toLowerCase().includes(termo.toLowerCase())
      )
    }

    // Filtrar por grupo
    if (criterio === 'grupo') {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.grupo === valor
      )
    }

    return contatosFiltrados
  }

  const contatos = filtraContatos()
  const mensagem = `${contatos.length} contato(s) encontrado(s)`

  return (
    <MainContainer>
      <Titulo as={'p'}>{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato id={c.id} nome={c.nome} email={c.email} grupo={c.grupo} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
