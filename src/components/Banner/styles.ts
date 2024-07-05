import styled from 'styled-components'
import { Colors } from '../../styles/variables'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${Colors.textColor};
  position: relative;
  z-index: 1;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    z-index: 0;
  }
`

export const TextBanner = styled.h3`
  font-size: 32px;
  font-weight: 100;
  position: absolute;
  padding-top: 25px;
  opacity: 0.5;
  z-index: 1;
`
export const ProductName = styled(TextBanner)`
  font-weight: bold;
  padding-top: 214.8px;
  opacity: 1;
`
