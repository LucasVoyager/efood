import styled from 'styled-components'
import { Colors } from '../../styles/variables'

export const Image = styled.div`
  width: 100%;
  height: 280px;
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
  position: absolute;
  padding-top: 25px;
  opacity: 0.5;
`
export const ProductName = styled(TextBanner)`
  font-weight: bold;
  padding-top: 214.8px;
  opacity: 1;
`
