import { HeaderContainer, TitleHeader } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="efood logo" />
      <TitleHeader>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </TitleHeader>
    </HeaderContainer>
  )
}

export default Header
