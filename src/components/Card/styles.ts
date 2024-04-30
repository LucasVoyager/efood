import styled from 'styled-components'
import { Colors } from '../../styles/variables'

export const CardContainer = styled.div`
  width: 480px;
  max-width: 100%;
  border: 2px solid ${Colors.primaryColor};
  color: ${Colors.primaryColor};
`
export const TitleStar = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;

  h2 {
    margin-right: 40px;
  }
`

export const Description = styled.p`
  margin-bottom: 16px;
`
