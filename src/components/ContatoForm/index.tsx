import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { agregarContato, editarContato } from '../../store/reducers/contato'
import { BotaoSalvar } from '../../styles'
import { TipoContato } from '../../utils/enums/Contatos'
import { useNavigate } from 'react-router-dom'

type Props = {
  id?: number
  nomeInicial?: string
  emailInicial?: string
  telefonoInicial?: string
  grupoInicial?: TipoContato
  onSubmit?: () => void
}

const ContatoForm = ({
  id,
  nomeInicial = '',
  emailInicial = '',
  telefonoInicial = '',
  grupoInicial = TipoContato.FAMILIAR,
  onSubmit
}: Props) => {
  const [nome, setNombre] = useState(nomeInicial)
  const [email, setEmail] = useState(emailInicial)
  const [telefono, setTelefono] = useState(telefonoInicial)
  const [grupo, setGrupo] = useState<TipoContato>(grupoInicial)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const manejarSubmit = (evento: FormEvent) => {
    evento.preventDefault()

    if (id) {
      dispatch(
        editarContato({
          id,
          nome,
          email,
          telefono,
          grupo
        })
      )
    } else {
      dispatch(
        agregarContato({
          id: Date.now(),
          nome,
          email,
          telefono,
          grupo
        })
      )
    }

    if (onSubmit) onSubmit()

    navigate('/')
  }

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="nome completo"
        value={nome}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <div>
        <p>Grupo</p>
        {Object.values(TipoContato).map((grupoOption) => (
          <label key={grupoOption}>
            <input
              type="radio"
              value={grupoOption}
              checked={grupo === grupoOption}
              onChange={() => setGrupo(grupoOption)}
            />
            {grupoOption}
          </label>
        ))}
      </div>
      <BotaoSalvar type="submit">Guardar</BotaoSalvar>
    </form>
  )
}

export default ContatoForm
