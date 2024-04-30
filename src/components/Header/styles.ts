import styled from 'styled-components'
import { Colors } from '../../styles/variables'

export const HeaderContainer = styled.header`
  height: 400px;
  background: ${Colors.headerFooterColor};
  display: flex;
  flex-direction: column;
  column-gap: 240px;
  align-items: center;

  img {
    width: 125px;
    height: 58px;
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
`
