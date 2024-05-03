import Card from '../../components/Card'
import Food from '../../models/food'

import { ListCardContainer } from './styles'

export type Props = {
  foods: Food[]
}

const ListCard = ({ foods }: Props) => {
  return (
    <ListCardContainer>
      {foods.map((food) => (
        <Card
          key={food.id}
          description={food.description}
          image={food.image}
          infos={food.infos}
          rank={food.rank}
          title={food.title}
        />
      ))}
    </ListCardContainer>
  )
}

export default ListCard
