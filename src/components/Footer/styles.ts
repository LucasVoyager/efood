import styled from 'styled-components'
import { Colors } from '../../styles/variables'

export const FooterContainer = styled.footer`
  background-color: ${Colors.secondaryColor};
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  align-items: center;

  img {
    margin-top: 40px;
  }
`
export const Links = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-top: 32.5px;
  margin-bottom: 80px;
`
export const TextFooter = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${Colors.primaryColor};
  margin-bottom: 40px;
  max-width: 480px;
  text-align: center;
  margin-bottom: 40px;
`
