import CardPizza from '../../components/Product'

import { Food } from '../../pages/Home'

import { ListCardPizzaCont } from './styles'

type Props = {
  food: Food[]
}

const ProdList = ({ food }: Props) => {
  return food.map((f) => (
    <>
      <ListCardPizzaCont>
        <CardPizza
          description={f.cardapio.descricao}
          image={f.cardapio.foto}
          title={f.cardapio.nome}
          key={f.cardapio.id}
        />
      </ListCardPizzaCont>
    </>
  ))
}

export default ProdList
