import Card from '../../components/Card'
import { FoodHome } from '../../models/food'

import { ListCardContainer } from './styles'

export type Props = {
  foods: FoodHome[]
}

const ListCard = ({ foods }: Props) => {
  return (
    <ListCardContainer>
      {foods.map((food) => (
        <Card
          infos={food.infos}
          rank={food.rank}
          key={food.id}
          description={food.description}
          image={food.image}
          title={food.title}
        />
      ))}
    </ListCardContainer>
  )
}

export default ListCard
