import React from 'react'
import { ContatoContainer, NomeCont } from './style'

interface ContatoProps {
  id?: number
  nome: string
  email: string
  grupo: string
}

const Contato: React.FC<ContatoProps> = ({ nome, email, grupo }) => {
  return (
    <ContatoContainer>
      <NomeCont>{nome}</NomeCont>
      <p>Email: {email}</p>
      <p>Grupo: {grupo}</p>
    </ContatoContainer>
  )
}

export default Contato
