import * as React from 'react'
import { css } from '@emotion/core'

import { isAuthenticated, isSSOAuthenticated, lockLogin } from '../../services/Auth'
import { Link, Button } from '../index'

import { isBrowser } from '../../services/Browser'

import styles from './Navigation.style'

interface INavigationState {
  isAuthenticated: boolean
  isOpened: boolean
}
interface INavigationProps {}

interface INavLinkProps {
  children?: any
  to: any
}

const NavLink = (props: INavLinkProps) => (
  <li>
    <Link
      to={props.to}
      css={[styles.link, isBrowser() && window.location.pathname.indexOf(props.to) === 0 && styles.linkActive]}
    >
      {props.children}
    </Link>
  </li>
)

export default class Navigation extends React.Component<INavigationProps, INavigationState> {
  constructor(props: INavigationProps) {
    super(props)
    this.state = {
      isAuthenticated: isAuthenticated(),
      isOpened: false
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

  renderToggleButton = () => (
    <button onClick={() => this.setState({ isOpened: !this.state.isOpened })} css={styles.mobileButton}>
      <img
        src={require('../../images/shared/icon-burger.svg')}
        css={css`
          width: 32px;
        `}
      />
      {this.state.isOpened}
    </button>
  )

  public render() {
    return (
      <div css={styles.root}>
        {this.renderToggleButton()}
        <ul css={[styles.list, !this.state.isOpened && styles.mobileList]}>
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
