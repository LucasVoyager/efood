import { useState } from 'react'

import Hero from '../../components/Hero'

import ListPizza from '../../containers/ProdList'

import pizza from '../../assets/images/pizza.png'
import Banner from '../../components/Banner'
import { Food } from '../Home'

const Perfil = () => {
  const [pizza, setPizza] = useState<Food[]>()
  return (
    <>
      <Hero />
      <Banner />
      <div className="container">
        {/* <ListPizza pizzas={pizzaPerfil} /> */}
      </div>
    </>
  )
}

export default Perfil
