import * as React from 'react'
import { css } from '@emotion/core'

import { isAuthenticated, isSSOAuthenticated, lockLogin } from '../../services/Auth'
import { isBrowser } from '../../services/Browser'
import { Link, Button } from '../index'

import styles from './Navigation.style'

interface INavigationState {
  isAuthenticated: boolean
  isOpened: boolean
}
interface INavigationProps {}

interface INavLinkProps {
  children?: any
  trackLink?: boolean
  to: any
}

const NavLink = (props: INavLinkProps) => (
  <li>
    <Link
      to={props.to}
      trackLink={props.trackLink}
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
    lockLogin(this.onLogin, this.onError)
  }

  private doSignup = () => {
    lockLogin(this.onLogin, this.onError, true)
  }

  private onLogin = () => {
    this.setState({ isAuthenticated: true })
  }

  private onError = () => {
    const currentWindow = window as any
    const errorMessage = 'Login via Navigation failed'

    if (isBrowser && currentWindow.bugsnagClient !== undefined) {
      currentWindow.bugsnagClient.notify(errorMessage)
    } else {
      console.log(errorMessage)
    }
  }

  private renderLoggedIn = () => <NavLink to="https://app.bearer.sh">Go to dashboard</NavLink>

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
          <NavLink to="/explore">INTEGRATIONS TEMPLATES</NavLink>
          <NavLink to="/product">PRODUCT</NavLink>
          <NavLink trackLink to="https://docs.bearer.sh">
            DOCUMENTATION
          </NavLink>
          <NavLink to="/pricing">PRICING</NavLink>
          {this.state.isAuthenticated ? this.renderLoggedIn() : this.renderLogin()}
        </ul>
      </div>
    )
  }

  public componentDidMount() {
    isSSOAuthenticated(this.onLogin)
  }
}
