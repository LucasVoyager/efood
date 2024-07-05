import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'

import ListPizza from '../../containers/ProdList'

import Banner from '../../components/Banner'
import { Food } from '../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  const [food, setFood] = useState<Food>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setFood(res))
    )
  }, [id])

  if (!food) {
    return <h3>...Carregando</h3>
  }

  return (
    <>
      <Hero />
      <Banner food={food} />
      <div className="container">
        <ListPizza food={food} />
      </div>
    </>
  )
}

export default Perfil
