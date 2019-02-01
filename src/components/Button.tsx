import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors } from '../styles/variables'

const StyledButton = styled.button<{primary: boolean}>`
  background-color: ${props => props.primary ? colors.accent : colors.dark};
  color: ${props => (props as any).primary ? colors.dark : colors.white};
  padding: .5rem 1rem;
  margin-right: 1rem;
  border-radius: 4px;
`

interface IButtonProps {
  link: string,
  text: string,
  primary?: boolean,
  className?: string
}

const Button: React.SFC<IButtonProps> = (props) => (
  <Link to={props.link}>
    <StyledButton primary={props.primary || false}>
      {props.text}
    </StyledButton>
  </Link>
)

export default Button