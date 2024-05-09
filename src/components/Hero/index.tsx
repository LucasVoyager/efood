import { CartLink, ContainerHeader, HeroHeader, TitleHero } from './styles'

import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cartshopping.svg'

const Hero = () => {
  return (
    <HeroHeader>
      <ContainerHeader>
        <TitleHero to="/">Restaurantes</TitleHero>
        <img src={logo} alt="efood" />
        <CartLink href="#">
          0-produtos(s) no carrinho
          <img src={cart} alt="carrinho" />
        </CartLink>
      </ContainerHeader>
    </HeroHeader>
  )
}

export default Hero
