import * as React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'

const StyledNavigation = styled.nav`
  margin-left: auto;
`

const StyledNavigationLink = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
  }
  padding: 0 .75rem;
  min-width: 2rem;
`

const Navigation = () => (
  <StyledNavigation>
    <StyledNavigationLink to="/explore">EXPLORE INTEGRATIONS</StyledNavigationLink>
    <StyledNavigationLink to="/how-it-works">HOW IT WORKS</StyledNavigationLink>
    <StyledNavigationLink to="/native-integration">MANIFESTO</StyledNavigationLink>
    <StyledNavigationLink to="/">DOCS</StyledNavigationLink>
    <StyledNavigationLink to="/">LOGIN</StyledNavigationLink>
    <StyledNavigationLink to="/">SIGNUP</StyledNavigationLink>
  </StyledNavigation>
)

export default Navigation
