import styled from 'styled-components'
import { Link } from 'react-router-dom'

import vector from '../../assets/images/Vector.png'
import { Colors } from '../../styles/variables'

export const HeroContainer = styled.header`
  background-image: url(${vector});
  display: flex;
  justify-content: space-around;
  padding: 60px;
  align-items: center;

  img {
    margin-left: 16px;
  }
`

export const Cart = styled.a`
  color: ${Colors.primaryColor};
  text-decoration: none;
  font-weight: bold;
`

export const CartLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 18px;

  img {
    margin-left: 4px;
  }
`

export const TitleHero = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.primaryColor};
  text-decoration: none;
`
