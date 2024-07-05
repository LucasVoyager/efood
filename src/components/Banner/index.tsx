import { Image, ProductName, TextBanner } from './styles'

import capa from '../../assets/images/pasta.png'

type Props = {
  type: string
  name: string
}

const Banner = ({ name, type }: Props) => {
  return (
    <Image style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <TextBanner>{type}</TextBanner>
        <ProductName>{name}</ProductName>
      </div>
    </Image>
  )
}

export default Banner
