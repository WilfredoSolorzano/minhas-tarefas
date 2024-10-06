import { useState } from 'react'
import ContactoForm from '../ContatoForm'
import { Circulo } from '../../styles'

const BotaoAdicionar = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  return (
    <>
      {mostrarFormulario ? (
        <ContactoForm onSubmit={() => setMostrarFormulario(false)} />
      ) : (
        <Circulo onClick={() => setMostrarFormulario(true)}>+</Circulo>
      )}
    </>
  )
}

export default BotaoAdicionar
