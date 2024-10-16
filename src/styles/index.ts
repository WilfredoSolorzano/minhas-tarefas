import styled, { createGlobalStyle } from 'styled-components'
import variaveis from '../styles/variaveis'

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
  padding: 40px;
  display: flex;
  height: 100vh;
  width: 950px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 20px;
    width: 80%;
    height: 0%;
  }

  @media (max-width: 768px) {
    padding: 10px;
    width: 80%;
    height: 0%;
  }
`

export const BarraLateralContainer = styled.div`
  width: 250px;
  background-color: ${variaveis.corFundo1};
  padding: 20px;
  height: 100%;
  border-right: 1px solid ${variaveis.corBorde};

  @media (max-width: 1000px) {
    width: 70%;
    border-right: none;
    border-bottom: 1px solid ${variaveis.corBorde};
  }

  @media (max-width: 768px) {
    padding: 10px;
    height: 100%;
  }
`

export const ListaDeContatosContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${variaveis.corFundo2};
  overflow-y: auto;
  border-left: 1px solid ${variaveis.corBorde};

  @media (max-width: 1000px) {
    border-left: none;
    border-top: 1px solid ${variaveis.corBorde};
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const Card = styled.div`
  background-color: ${variaveis.corFundo3};
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2px;
    margin-bottom: 2px;
  }
`

export const BarraAcoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 6px;
  }
`

export const Circulo = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: white;
  border-radius: 50%;
  font-size: 24px;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 48px;
    width: 48px;
    top: 91px;
    bottom: 20px;
    right: 20px;
    font-size: 20px;
  }
`

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.corFundoForm};

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
export const BotaoSalvar = styled.button`
  padding: 10px 20px;
  background-color: ${variaveis.verde};
  margin-top: 15px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${variaveis.verdeHouver};
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
  background-color: ${variaveis.corFundo1};
  height: 100vh;
  overflow-y: auto;
`

export const ListaContactos = styled.ul`
  list-style: none;
  padding: 0;
`

export const ContactoItem = styled.li`
  padding: 12px;
  border: 1px solid ${variaveis.corBorde};
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${variaveis.corHouver};
  }

  p {
    margin: 0;
    font-weight: bold;
  }

  small {
    color: ${variaveis.cor001};
  }
`
export default Styleglobal
