import React from 'react'

interface ContatoProps {
  id: number
  nome: string
  email: string
  grupo: string
}

const Contato: React.FC<ContatoProps> = ({ id, nome, email, grupo }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Email: {email}</p>
      <p>Grupo: {grupo}</p>
      <p>ID: {id}</p>
    </div>
  )
}

export default Contato
