import { CardContainer, Description, TitleStar } from './styles'

import star from '../../assets/images/estrela.svg'

type Props = {
  image: string
  title: string
  rank: number
  description: string
}

const Card = ({ description, image, rank, title }: Props) => {
  return (
    <CardContainer>
      <button>Destaque da semana</button>
      <button>categoria da comida</button>
      <img src={image} alt="" />
      <TitleStar>
        <h2>{title}</h2>
        <span>{rank}</span>
        <img src={star} alt="estrela" />
      </TitleStar>
      <Description>{description}</Description>
      <button>saiba mais</button>
    </CardContainer>
  )
}

export default Card
