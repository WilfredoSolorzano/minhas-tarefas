import { combineReducers } from 'redux'
import contatosReducer from './contato'
import filtroReducer from './filtro'

// Combina tus reductores en un reductor raíz
const rootReducer = combineReducers({
  contatos: contatosReducer,
  filtro: filtroReducer
})

export type RootReducer = ReturnType<typeof rootReducer>
export default rootReducer
