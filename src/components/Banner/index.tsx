import { Image, ProductName, TextBanner } from './styles'

import { Food } from '../../pages/Home'

type Props = {
  food: Food
}

const Banner = ({ food }: Props) => {
  return (
    <Image style={{ backgroundImage: `url(${food.capa})` }}>
      <div className="container">
        <TextBanner>{food.tipo}</TextBanner>
        <ProductName>{food.titulo}</ProductName>
      </div>
    </Image>
  )
}

export default Banner
