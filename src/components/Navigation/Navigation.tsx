import * as React from 'react'

import { isAuthenticated, isSSOAuthenticated, lockLogin } from '../../services/Auth'
import { Link, Button } from '../index'

import { css } from '@emotion/core'

import styles from './Navigation.style'

interface INavigationState {
  isAuthenticated: boolean
}
interface INavigationProps {}

interface INavLinkProps {
  children?: any
  to: any
}

const NavLink = (props: INavLinkProps) => (
  <Link to={props.to} css={styles.link}>
    {props.children}
  </Link>
)

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

  private renderLoggedIn = () => <NavLink to="https://app.bearer.sh">GO TO DASHBOARD</NavLink>

  private renderLogin = () => (
    <>
      <Button onClick={this.doLogin} small primary text="Login" link="#" />
      <Button onClick={this.doSignup} small secondary text="Signup" link="#" />
    </>
  )

  public render() {
    return (
      <div
        css={css`
          align-self: flex-end;
        `}
      >
        <ul css={styles.list}>
          <NavLink to="/explore">EXPLORE INTEGRATIONS</NavLink>
          <NavLink to="/how-it-works">HOW IT WORKS</NavLink>
          <NavLink to="/native-integrations">MANIFESTO</NavLink>
          <NavLink to="https://docs.bearer.sh">DOCS</NavLink>
          {this.state.isAuthenticated ? this.renderLoggedIn() : this.renderLogin()}
        </ul>
      </div>
    )
  }

  public componentDidMount() {
    isSSOAuthenticated(this.onLogin)
  }
}
