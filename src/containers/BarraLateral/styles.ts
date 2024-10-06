import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr; /* Barra lateral de 250px y contenido principal */
  height: 100vh; /* Altura completa de la vista */
`

export const Aside = styled.aside`
  padding: 1rem;
  background-color: ${variaveis.cor003};
  border-radius: 0.5rem 0 0 0.5rem;
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    border-radius: 0.25rem;
    box-shadow: none;
    background-color: ${variaveis.cor0};
  }
`

export const ListaContactos = styled.ul`
  list-style: none; /* Elimina los puntos de la lista */
  padding: 0;
`

export const ContactoItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd; /* Borde para cada contacto */
  border-radius: 5px;
  margin-bottom: 10px; /* Espacio entre los elementos */
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6e6e6; /* Color de fondo al pasar el ratón */
  }
`

export const InputBuscar = styled.input`
  padding: 10px;
  width: 100%; /* Para que ocupe el 100% del contenedor */
  margin-bottom: 20px; /* Espacio debajo del input */
  border: 1px solid #ccc; /* Borde del input */
  border-radius: 5px;
`
