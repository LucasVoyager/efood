import {
  ButtonMore,
  CardContainer,
  ContentCard,
  DescrButton,
  ImgCard,
  Infos,
  Rank,
  TitleCard,
  TitleStar
} from './styles'
import { Description } from '../../styles'

import star from '../../assets/images/estrela.svg'
import Tag from '../Tag'

type Props = {
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
      <ImgCard src={image} />
      <ContentCard>
        <TitleStar>
          <TitleCard>{title}</TitleCard>
          <Rank>
            <span>{rank}</span>
            <img src={star} alt="estrela" />
          </Rank>
        </TitleStar>
        <DescrButton>
          <Description>{description}</Description>
          <ButtonMore to={`/perfil`}>saiba mais</ButtonMore>
        </DescrButton>
      </ContentCard>
    </CardContainer>
  )
}

export default Card
