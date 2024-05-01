import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalCss } from './styles'
import RoutesCP from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
        <RoutesCP />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
