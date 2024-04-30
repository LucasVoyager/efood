import { HeaderContainer, TitleHeader } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <img src={logo} alt="efood logo" />
        <TitleHeader>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </TitleHeader>
      </HeaderContainer>
    </header>
  )
}

export default Header
