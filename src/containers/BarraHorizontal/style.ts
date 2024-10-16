import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky; /* Se quedará en la parte superior al hacer scroll */
  top: 0; /* Fija la posición en la parte superior */
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
`

export const Logo = styled.img`
  height: 50px; /* Ajusta según el tamaño deseado del logo */
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
`
