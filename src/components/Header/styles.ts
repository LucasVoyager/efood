import styled from 'styled-components'
import { Colors } from '../../styles/variables'

export const HeaderContainer = styled.header`
  background: ${Colors.headerColor};
  display: flex;
  flex-direction: column;
  column-gap: 240px;
  align-items: center;

  img {
    margin-top: 64px;
    margin-bottom: 140px;
  }
`

export const TitleHeader = styled.h2`
  font-size: 36px;
  font-weight: bold;
  line-height: 40px;
  color: ${Colors.primaryColor};
  margin-bottom: 40px;
  width: 539px;
`
