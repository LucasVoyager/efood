import { Description } from '../../styles/index'
import { ButtonProd, CardDF, TitleCard } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const CardProduct = ({ description, image, title }: Props) => {
  return (
    <CardDF>
      <img src={image} alt="" />
      <TitleCard>{title}</TitleCard>
      <Description>{description}</Description>
      <ButtonProd>Adicionar ao carrinho</ButtonProd>
    </CardDF>
  )
}

export default CardProduct
