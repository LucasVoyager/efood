import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Colors } from '../../styles/variables'

export const ButtonContainer = styled.button`
  background-color: ${Colors.primaryColor};
  color: ${Colors.secondaryColor};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
`
export const ButtonLink = styled(Link)`
  background-color: ${Colors.primaryColor};
  color: ${Colors.secondaryColor};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  text-decoration: none;
`
