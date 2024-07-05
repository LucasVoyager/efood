import styled from 'styled-components'

import { Colors } from '../../styles/variables'
import { Description } from '../../styles'
import { ButtonContainer } from '../../styles/index'

export const CardDF = styled.div`
  background-color: ${Colors.primaryColor};
  padding: 8px;
  position: relative;

  ${Description} {
    margin: 8px 0;
    color: ${Colors.secondaryColor};
  }

  img {
    width: 100%;
  }
`
export const TitleCard = styled.h3`
  font-size: 16px;
  color: ${Colors.secondaryColor};
`

export const ButtonProd = styled(ButtonContainer)`
  width: 100%;
  background-color: ${Colors.secondaryColor};
  color: ${Colors.primaryColor};
  font-size: 14px;
  padding: 4px 0;
  border: none;
`
