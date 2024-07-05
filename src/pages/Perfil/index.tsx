import Hero from '../../components/Hero'
import Banner from '../../components/Banner'
import { Food } from '../Home'
import ProdList from '../../containers/ProdList'

const pizza = {
  type: 'italiana',
  name: 'La Dolce Vita Trattoria'
}

const Perfil = () => {
  return (
    <>
      <Hero />
      <Banner type={pizza.type} name={pizza.name} />
      <div className="container">{/* <ProdList food={foodPizza} /> */}</div>
    </>
  )
}

export default Perfil
