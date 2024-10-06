import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
`
export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
export const MainContainer = styled.div`
  padding: 1.5rem;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  background-color: ${variaveis.cor002};
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.2);
  height: 90vh;
  overflow-y: auto;
  @media (max-width: 768px) {
    border-radius: 0.25rem;
    box-shadow: none;
    background-color: ${variaveis.cor0};
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`
export const BotaoSalvar = styled.button`
  padding: 10px 20px;
  background-color: #4caf50; /* Color verde */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049; /* Color verde más oscuro en hover */
  }
`
export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`
