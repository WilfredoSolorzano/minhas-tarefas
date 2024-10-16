import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ContatoContainer = styled.div`
  margin-bottom: 8px;
  border: 1px solid ${variaveis.corBorde2};
  border-radius: 2px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 10px;
    margin-bottom: 6px;
  }
`

export const NomeCont = styled.h2`
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`
