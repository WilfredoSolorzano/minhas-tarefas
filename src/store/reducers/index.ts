import { combineReducers } from 'redux'
import contactosReducer from './contato' // Asegúrate de que la ruta sea correcta
import filtroReducer from './filtro' // Asegúrate de que la ruta sea correcta

// Combina tus reductores
const rootReducer = combineReducers({
  contactos: contactosReducer,
  filtro: filtroReducer
})

export type RootReducer = ReturnType<typeof rootReducer>
export default rootReducer
