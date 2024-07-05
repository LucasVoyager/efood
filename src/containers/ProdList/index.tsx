import CardProduct from '../../components/Product'
import FoodPizza from '../../models/pizza'

import { ProdListContent } from './styles'

type Props = {
  food: FoodPizza[]
}

const ProdList = ({ food }: Props) => {
  return (
    <ProdListContent>
      {food.map((f) => (
        <CardProduct
          description={f.description}
          image={f.picture}
          title={f.title}
          key={f.id}
        />
      ))}
    </ProdListContent>
  )
}

export default ProdList
