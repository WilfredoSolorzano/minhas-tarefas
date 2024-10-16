import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 100%;
  height: 100vh;
`

export const Aside = styled.aside`
  padding: 1rem;
  background-color: ${variaveis.cor003};
  border-radius: 0.5rem 0 0 0.5rem;
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    border-radius: 0.25rem;
    box-shadow: none;
    background-color: ${variaveis.cor003};
    max-width: 100%;
  }
`

export const ListaContactos = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
  margin-top: 25px;
`

export const ContactoItem = styled.li`
  padding: 10px;
  border: 1px solid ${variaveis.corBorde};
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  max-width: 100%;

  p {
    margin: 0;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  small {
    margin-top: 5px;
    font-size: 10px;
    color: gray;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover,
  &:active {
    background-color: ${variaveis.corFundoitemContato};
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
    padding: 8px;

    p,
    small {
      white-space: normal;
      overflow: visible;
      text-overflow: unset;
    }
  }
`

export const InputBuscar = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid ${variaveis.corBorde2};
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 90%;
  }
`
