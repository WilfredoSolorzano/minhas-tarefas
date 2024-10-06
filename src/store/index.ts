import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers' // Asegúrate de que la ruta sea correcta

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer> // Define el tipo de RootState
export default store
