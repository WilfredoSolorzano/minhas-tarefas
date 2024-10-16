import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const MainContainer = styled.div`
  max-width: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-wrap: break-word;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${variaveis.amarelo2};
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 6px;
  }
`
export const ContactListItem = styled.li`
  margin: 25px;
  list-style-type: none;
`
