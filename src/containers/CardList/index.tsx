import Card from '../../components/Card'

import { Food } from '../../pages/Home'

import { ListCardContainer } from './styles'

export type Props = {
  foods: Food[]
}

const ListCard = ({ foods }: Props) => {
  const getFoodTags = (food: Food) => {
    const tags = []

    if (food.destacado) {
      tags.push('Destaque da Semana')
    }

    if (food.tipo) {
      tags.push(food.tipo)
    }

    return tags
  }

  return (
    <>
      <ListCardContainer>
        {foods.map((food) => (
          <li key={food.id}>
            <Card
              infos={getFoodTags(food)}
              rank={food.avaliacao}
              description={food.descricao}
              image={food.capa}
              title={food.titulo}
              id={food.id}
            />
          </li>
        ))}
      </ListCardContainer>
    </>
  )
}

export default ListCard
