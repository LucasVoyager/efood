import { CardContainer, ContentCard, Infos, Rank, TitleStar } from './styles'
import { ButtonLink, Description } from '../../styles'

import star from '../../assets/images/estrela.svg'
import Tag from '../Tag'

export type Props = {
  image: string
  title: string
  rank: number
  description: string
  infos: string[]
}

const Card = ({ description, image, rank, title, infos }: Props) => {
  return (
    <CardContainer>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <img src={image} alt="" />
      <ContentCard>
        <TitleStar>
          <h2>{title}</h2>
          <Rank>
            <span>{rank}</span>
            <img src={star} alt="estrela" />
          </Rank>
        </TitleStar>
        <Description>{description}</Description>
        <ButtonLink to="/perfil">saiba mais</ButtonLink>
      </ContentCard>
    </CardContainer>
  )
}

export default Card
