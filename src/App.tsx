import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListaDeContatos from './containers/ListaCBarraLateral'
import ListaDeContato from './components/ListaDeContatos'
import ContatoForm from './components/ContatoForm'
import BotaoAdicionar from './components/BotaoAdicionar'
import BarraLateral from './containers/BarraLateral'
import Styleglobal, {
  Container,
  BarraLateralContainer,
  ListaDeContatosContainer
} from './styles'
import BarraHorizontal from './containers/BarraHorizontal'

const App = () => (
  <Router>
    <BarraHorizontal
      logo="https://seeklogo.com/images/E/ebac-logo-CC73A39D07-seeklogo.com.png"
      titulo="Agenda Telefônica"
    />
    <Container>
      <Styleglobal />
      <Routes>
        {}
        <Route
          path="/"
          element={
            <>
              <BarraLateralContainer>
                <BarraLateral mostrarFiltros={true} />
                <ListaDeContatosContainer>
                  <ListaDeContatos />
                </ListaDeContatosContainer>
              </BarraLateralContainer>
              <ListaDeContatosContainer>
                <ListaDeContato />
                <BotaoAdicionar />
              </ListaDeContatosContainer>
            </>
          }
        />
        {}
        <Route path="/add" element={<ContatoForm />} />
      </Routes>
    </Container>
  </Router>
)

export default App
