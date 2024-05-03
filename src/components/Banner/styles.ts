import styled from 'styled-components'
import { Colors } from '../../styles/variables'

export const Image = styled.div`
  width: 100%;
  height: 400px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000000 50%;
  color: ${Colors.textColor};
  position: relative;
`
export const TextBanner = styled.h3`
  font-size: 32px;
  font-weight: 100;
  top: 80px;
  left: 180px;
  position: absolute;
`
export const ProductName = styled(TextBanner)`
  font-weight: bold;
  top: 280px;
  left: 180px;
`
