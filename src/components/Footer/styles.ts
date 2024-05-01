import styled from 'styled-components'
import { Colors } from '../../styles/variables'

export const FooterContainer = styled.footer`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.secondaryColor};

  img {
    margin-top: 40px;
  }
`
export const Links = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-top: 32px;
  margin-bottom: 80px;
`
export const TextFooter = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${Colors.primaryColor};
  margin-bottom: 40px;
  width: 480px;
`
