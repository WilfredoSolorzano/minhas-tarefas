import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
const Styleglobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
  border-radius: 0.25rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  align-items: start;

  & > div {
    overflow-y: auto;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin-block: 1rem;
    width: 95%;
    border: 1px solid ${variaveis.cor002};
    border-radius: 0.25rem;
    box-shadow: 4px 2px rgba(0, 0, 0, 0.1);
    background-color: ${variaveis.cor004};
    gap: 1rem;
  }
`

export const Card = styled.div`
  background-color: #fcfcfc;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 100%;
  box-sizing: border-box;
`

export const BarraAcoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`

export const Circulo = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 64px;
  width: 64px;
  background-color: green;
  color: white;
  border-radius: 50%;
  font-size: 24px;
  border: none;
  cursor: pointer;
`

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
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
export const DetalleContacto = styled.div`
  margin-top: 16px;
  text-align: center;

  img {
    margin-bottom: 16px;
  }

  p {
    margin: 8px 0;
  }
`
export const Aside = styled.aside`
  padding: 16px;
  background-color: #f0f0f0;
  height: 100vh;
  overflow-y: auto;
`

export const ListaContactos = styled.ul`
  list-style: none;
  padding: 0;
`

export const ContactoItem = styled.li`
  padding: 12px;
  border: 1px solid #ddd;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #eaeaea;
  }

  p {
    margin: 0;
    font-weight: bold;
  }

  small {
    color: #666;
  }
`
export default Styleglobal
