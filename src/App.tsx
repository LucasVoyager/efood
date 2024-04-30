import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
        <Footer />
      </div>
    </>
  )
}

export default App
