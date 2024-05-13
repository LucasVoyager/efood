import { Cart, HeroContainer, TitleHero } from './styles'

import logo from '../../assets/images/logo.png'

const Hero = () => {
  return (
    <HeroContainer>
      <div className="container">
        <TitleHero to="/">Restaturantes</TitleHero>
        <img src={logo} alt="" />
        <Cart>0 produtos(s) no carrinho</Cart>
      </div>
    </HeroContainer>
  )
}

export default Hero
