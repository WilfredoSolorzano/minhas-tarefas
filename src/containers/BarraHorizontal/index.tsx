import React from 'react'
import * as S from './style'

interface BarraHorizontalProps {
  logo: string
  titulo: string
}

const BarraHorizontal: React.FC<BarraHorizontalProps> = ({ logo, titulo }) => {
  return (
    <S.Header>
      <S.Logo src={logo} alt="Logo" />
      <S.Title>{titulo}</S.Title>
    </S.Header>
  )
}

export default BarraHorizontal
