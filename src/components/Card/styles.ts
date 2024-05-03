import styled from 'styled-components'
import { Colors } from '../../styles/variables'
import { ButtonContainer } from '../../styles/index'
import { TagContainer } from '../Tag/styles'

export const CardContainer = styled.div`
  width: 440px;
  border: 2px solid ${Colors.primaryColor};
  color: ${Colors.primaryColor};
  position: relative;

  ${ButtonContainer} {
    margin: 8;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    max-width: 100%;
  }
`
export const TitleStar = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;

  h2 {
    margin-right: 40px;
  }
`

export const ContentCard = styled.div`
  margin: 8px;
`
export const Rank = styled.div`
  align-items: center;

  span {
    margin-right: 4px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
