import { Image, ProductName, TextBanner } from './styles'

import bannerimg from '../../assets/images/pasta.png'

const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${bannerimg})` }}>
      <div className="container">
        <TextBanner>Italiana</TextBanner>
        <ProductName>La Dolce Vita Trattoria</ProductName>
      </div>
    </Image>
  )
}

export default Banner
