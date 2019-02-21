import * as React from 'react'

import styled from '@emotion/styled'
import { isAuthenticated, isSSOAuthenticated, lockLogin } from '../services/Auth'
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
interface INavigationState {
  isAuthenticated: boolean
}
interface INavigationProps {}

export default class Navigation extends React.Component<INavigationProps, INavigationState> {
  constructor(props: INavigationProps) {
    super(props)
    this.state = {
      isAuthenticated: isAuthenticated()
    }
  }

  private doLogin = () => {
    lockLogin(this.onLogin)
  }

  private doSignup = () => {
    lockLogin(this.onLogin, true)
  }

  private onLogin = () => {
    this.setState({ isAuthenticated: true })
  }

  private renderLoggedIn = () => <StyledNavigationLink to="https://app.bearer.sh">GO TO DASHBOARD</StyledNavigationLink>

  private renderLogin = () => (
    <>
      <StyledNavigationLink onClick={this.doLogin} to="#">
        LOGIN
      </StyledNavigationLink>
      <StyledNavigationLink onClick={this.doSignup} to="#">
        SIGNUP
      </StyledNavigationLink>
    </>
  )

  public render() {
    return (
      <StyledNavigation>
        <StyledNavigationLink to="/explore">EXPLORE INTEGRATIONS</StyledNavigationLink>
        <StyledNavigationLink to="/how-it-works">HOW IT WORKS</StyledNavigationLink>
        <StyledNavigationLink to="/native-integrations">MANIFESTO</StyledNavigationLink>
        <StyledNavigationLink to="https://docs.bearer.sh">DOCS</StyledNavigationLink>
        {this.state.isAuthenticated ? this.renderLoggedIn() : this.renderLogin()}
      </StyledNavigation>
    )
  }

  public componentDidMount() {
    isSSOAuthenticated(this.onLogin)
  }
}
