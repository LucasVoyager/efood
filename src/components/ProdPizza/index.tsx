import { ButtonContainer, Description } from '../../styles/index'
import { CardDF, TitleCard } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const CardPizza = ({ description, image, title }: Props) => {
  return (
    <CardDF>
      <img src={image} alt="" />
      <TitleCard>{title}</TitleCard>
      <Description>{description}</Description>
      <ButtonContainer>Adicionar ao carrinho</ButtonContainer>
    </CardDF>
  )
}

export default CardPizza
