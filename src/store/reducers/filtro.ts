import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FiltroState {
  termo: string
  criterio: string
  valor: string
}

const initialState: FiltroState = {
  termo: '',
  criterio: '',
  valor: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarCriterio: (state, action: PayloadAction<string>) => {
      state.criterio = action.payload
    },
    alterarValor: (state, action: PayloadAction<string>) => {
      state.valor = action.payload
    }
  }
})

export const { alterarTermo, alterarCriterio, alterarValor } =
  filtroSlice.actions
export default filtroSlice.reducer
