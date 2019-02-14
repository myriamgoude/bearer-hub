import * as React from 'react'

import styled from '@emotion/styled'
import { isAuthenticated, login } from '../services/Auth'
import Link from './Link'

const StyledNavigation = styled.nav`
  margin-left: auto;
`

const StyledNavigationLink = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
  }
  padding: 0 0.75rem;
  min-width: 2rem;
`
export default class Navigation extends React.Component {
  private doLogin = () => {
    login()
  }

  private renderLoggedIn = () => <StyledNavigationLink to="https://app.bearer.sh">GO TO DASHBOARD</StyledNavigationLink>

  private renderLogin = () => (
    <StyledNavigationLink onClick={this.doLogin} to="#">
      LOGIN/SIGNUP
    </StyledNavigationLink>
  )

  public render() {
    return (
      <StyledNavigation>
        <StyledNavigationLink to="/explore">EXPLORE INTEGRATIONS</StyledNavigationLink>
        <StyledNavigationLink to="/how-it-works">HOW IT WORKS</StyledNavigationLink>
        <StyledNavigationLink to="/native-integration">MANIFESTO</StyledNavigationLink>
        <StyledNavigationLink to="/">DOCS</StyledNavigationLink>
        {isAuthenticated() ? this.renderLoggedIn() : this.renderLogin()}
      </StyledNavigation>
    )
  }
}
