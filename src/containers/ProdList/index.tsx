import CardPizza from '../../components/Product'

import { Food } from '../../pages/Home'

import { ListCardPizzaCont } from './styles'

type Props = {
  food: Food
}

const ListPizza = ({ food }: Props) => {
  return (
    <ListCardPizzaCont>
      (
      <CardPizza
        description={food.cardapio.descricao}
        image={food.cardapio.foto}
        title={food.cardapio.nome}
        key={food.id}
      />
      )
    </ListCardPizzaCont>
  )
}

export default ListPizza
