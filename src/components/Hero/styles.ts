import styled from 'styled-components'
import { Link } from 'react-router-dom'

import vector from '../../assets/images/Vector.png'
import { Colors } from '../../styles/variables'

export const HeroHeader = styled.header`
  background-image: url(${vector});
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px;

  a {
    color: ${Colors.primaryColor};
    text-decoration: none;
    font-weight: bold;
  }
`

export const CartLink = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 4px;
  }
`

export const TitleHero = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.primaryColor};
`
