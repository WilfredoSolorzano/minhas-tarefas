import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { agregarContacto, editarContacto } from '../../store/reducers/contato'
import { BotaoSalvar } from '../../containers/Formulario/style'

type Props = {
  id?: number
  nombreInicial?: string
  emailInicial?: string
  telefonoInicial?: string
  onSubmit?: () => void
}

const ContactoForm = ({
  id,
  nombreInicial = '',
  emailInicial = '',
  telefonoInicial = '',
  onSubmit
}: Props) => {
  const [nombre, setNombre] = useState(nombreInicial)
  const [email, setEmail] = useState(emailInicial)
  const [telefono, setTelefono] = useState(telefonoInicial)
  const dispatch = useDispatch()

  const manejarSubmit = () => {
    if (id) {
      dispatch(
        editarContacto({
          id,
          nombre,
          email,
          telefono,
          nome: '',
          grupo: ''
        })
      )
    } else {
      dispatch(
        agregarContacto({
          id: Date.now(),
          nombre,
          email,
          telefono,
          nome: '',
          grupo: ''
        })
      )
    }
    if (onSubmit) onSubmit()
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        manejarSubmit()
      }}
    >
      <input
        type="text"
        placeholder="Nombre completo"
        value={nombre}
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
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <BotaoSalvar type="submit">Guardar</BotaoSalvar>
    </form>
  )
}

export default ContactoForm
