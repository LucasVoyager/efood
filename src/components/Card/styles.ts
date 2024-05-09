import styled from 'styled-components'

import { Colors } from '../../styles/variables'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../../styles'

export const CardContainer = styled.div`
  width: 480px;
  color: ${Colors.primaryColor};
  display: flex;
  flex-direction: column;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const ImgCard = styled.img`
  width: 480px;
  max-width: 100%;
`

export const ContentCard = styled.div`
  border: 1px solid ${Colors.primaryColor};
  border-top: none;
  padding: 8px;
`
export const TitleCard = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
export const TitleStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Rank = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 4px;
    font-size: 18px;
  }

  img {
    width: 21px;
    height: 18px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const ButtonMore = styled(ButtonLink)``
export const DescrButton = styled.div`
  margin-bottom: 8px;
`
