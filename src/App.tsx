import Footer from './components/Footer'
import Header from './components/Header'
import ListCard from './containers/CardList'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
        <ListCard />
        <Footer />
      </div>
    </>
  )
}

export default App
