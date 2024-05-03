import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import { GlobalCss } from './styles'
import RoutesCP from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <RoutesCP />
      <Footer />
    </BrowserRouter>
  )
}

export default App
