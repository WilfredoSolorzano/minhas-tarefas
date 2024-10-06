import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux' // Importa Provider
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store' // Asegúrate de que la ruta a tu store sea correcta

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {' '}
      {/* Envuelve App con Provider */}
      <App />
    </Provider>
  </React.StrictMode>
)

// Si deseas comenzar a medir el rendimiento de tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envía a un endpoint de análisis. Aprende más en: https://bit.ly/CRA-vitals
reportWebVitals()
