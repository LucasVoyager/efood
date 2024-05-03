import CardPizza from '../../components/ProdPizza'
import Food from '../../models/food'
import { ListCardPizzaCont } from './styles'

type Props = {
  pizzas: Food[]
}

const ListPizza = ({ pizzas }: Props) => {
  return (
    <ListCardPizzaCont>
      {pizzas.map((pizza) => (
        <CardPizza
          description={pizza.description}
          image={pizza.image}
          title={pizza.title}
          key={pizza.id}
        />
      ))}
    </ListCardPizzaCont>
  )
}

export default ListPizza
