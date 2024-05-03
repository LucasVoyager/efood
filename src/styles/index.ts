import { Link } from 'react-router-dom'
import { createGlobalStyle, styled } from 'styled-components'

import { Colors } from './variables'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto,san-serif;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Description = styled.p`
  margin-bottom: 16px;
`
export const ButtonContainer = styled.button`
  background-color: ${Colors.primaryColor};
  color: ${Colors.secondaryColor};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  background-color: ${Colors.primaryColor};
  color: ${Colors.secondaryColor};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  text-decoration: none;
  cursor: pointer;
`
