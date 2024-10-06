import ListaDeContactos from './components/ListaDeContatos'
import BotaoAdicionar from './components/BotaoAdicionar'
import BarraLateral from './containers/BarraLateral'
import Styleglobal, { Container } from './styles'

const App = () => (
  <Container>
    <Styleglobal />
    <BarraLateral mostrarFiltros={true} /> {/* Renderizar aquí */}
    <ListaDeContactos />
    <BotaoAdicionar />
  </Container>
)

export default App
