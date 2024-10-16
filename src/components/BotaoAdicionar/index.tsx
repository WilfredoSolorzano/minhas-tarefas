import React from 'react'
import { Link } from 'react-router-dom'
import { Circulo } from '../../styles'

const BotaoAdicionar = () => {
  return (
    <Link to="/add">
      <Circulo>+</Circulo>
    </Link>
  )
}

export default BotaoAdicionar
