import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contacto {
  id: number
  nome: string
  email: string
  telefono: string
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

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    agregarContato: (state, action: PayloadAction<Contacto>) => {
      state.items.push(action.payload)
    },

    editarContato: (state, action: PayloadAction<Contacto>) => {
      const index = state.items.findIndex(
        (contacto) => contacto.id === action.payload.id
      )
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },

    removerContato: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contacto) => contacto.id !== action.payload
      )
    },
    seleccionarContato: (state, action: PayloadAction<number>) => {
      state.contactoSeleccionado =
        state.items.find((c) => c.id === action.payload) || null
    },
    deseleccionarContato: (state) => {
      state.contactoSeleccionado = null
    },
    cadastrar: (state, action: PayloadAction<Omit<Contacto, 'id'>>) => {
      const novoContato = {
        id: state.items.length + 1,
        ...action.payload
      }
      state.items.push(novoContato)
    }
  }
})

export const {
  agregarContato,
  editarContato,
  removerContato,
  seleccionarContato,
  deseleccionarContato,
  cadastrar
} = contatoSlice.actions

export default contatoSlice.reducer
