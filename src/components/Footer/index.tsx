import { FooterContainer, Links, TextFooter } from './styles'

import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagrams.svg'
import twiter from '../../assets/images/twiter.svg'

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} alt="efood" />
      <Links>
        <li>
          <img src={instagram} alt="logo instagram" />
        </li>
        <li>
          <img src={facebook} alt="logo facebook" />
        </li>
        <li>
          <img src={twiter} alt="logo twiter" />
        </li>
      </Links>
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextFooter>
    </FooterContainer>
  )
}
export default Footer
