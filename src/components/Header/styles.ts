import styled from 'styled-components'
import { Colors } from '../../styles/variables'

import vector from '../../assets/images/Vector.png'

export const HeaderContainer = styled.header`
  background-image: url(${vector});
  display: flex;
  flex-direction: column;
  gap: 140px;
  justify-content: space-between;
  align-items: center;

  img {
    margin-top: 64px;
  }
`

export const TitleHeader = styled.h2`
  max-width: 540px;
  font-size: 36px;
  font-weight: bold;
  line-height: 40px;
  color: ${Colors.primaryColor};
  margin-bottom: 40px;
  text-align: center;
`
