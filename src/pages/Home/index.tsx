import { useEffect, useState } from 'react'

import ListCard from '../../containers/CardList'

import Header from '../../components/Header'

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [home, setHome] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setHome(res))
    )
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <ListCard foods={home} />
      </div>
    </>
  )
}

export default Home
