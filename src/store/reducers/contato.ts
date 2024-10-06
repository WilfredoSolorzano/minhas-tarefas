import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contacto {
  id: number
  nombre: string
  email: string
  telefono: string
  nome: string
  grupo: string
}

interface ContactoState {
  items: Contacto[]
  contactoSeleccionado: Contacto | null
}

const initialState: ContactoState = {
  items: [],
  contactoSeleccionado: null
}

const contactoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    // Acción para agregar un nuevo contacto
    agregarContacto: (state, action: PayloadAction<Contacto>) => {
      state.items.push(action.payload)
    },

    // Acción para editar un contacto existente
    editarContacto: (state, action: PayloadAction<Contacto>) => {
      const index = state.items.findIndex(
        (contacto) => contacto.id === action.payload.id
      )
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },

    // Otras acciones como removerContacto
    removerContacto: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contacto) => contacto.id !== action.payload
      )
    },
    seleccionarContacto: (state, action: PayloadAction<number>) => {
      state.contactoSeleccionado =
        state.items.find((c) => c.id === action.payload) || null
    },
    deseleccionarContacto: (state) => {
      state.contactoSeleccionado = null
    },
    cadastrar: (state, action: PayloadAction<Omit<Contacto, 'id'>>) => {
      const novoContato = {
        id: state.items.length + 1, // Generación de un ID sencillo, puedes cambiarlo
        ...action.payload
      }
      state.items.push(novoContato)
    }
  }
})

// Exporta las acciones para poder usarlas en tus componentes
export const {
  agregarContacto,
  editarContacto,
  removerContacto,
  seleccionarContacto,
  deseleccionarContacto,
  cadastrar
} = contactoSlice.actions

export default contactoSlice.reducer
