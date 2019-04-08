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
    <Link to={props.to} trackLink={props.trackLink} css={[styles.link]} partiallyActive activeClassName="active">
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

  private renderLoggedIn = () => <Button small secondary text="Go to dashboard" link="https://app.bearer.sh" />

  private renderLogin = () => (
    <>
      <Button onClick={this.doLogin} small primary text="Login" link="#login" />
      <Button onClick={this.doSignup} small secondary text="Signup" link="#signup" />
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
      <div css={[styles.root, !this.state.isOpened && styles.mobileList]}>
        {this.renderToggleButton()}
        <ul css={styles.list}>
          <NavLink to="/integrations">INTEGRATIONS TEMPLATES</NavLink>
          <NavLink to="/product/">PRODUCT</NavLink>
          <NavLink trackLink to="https://docs.bearer.sh">
            DOCUMENTATION
          </NavLink>
          <NavLink to="/pricing">PRICING</NavLink>
        </ul>
        {this.state.isAuthenticated ? this.renderLoggedIn() : this.renderLogin()}
      </div>
    )
  }

  public componentDidMount() {
    isSSOAuthenticated(this.onLogin)
  }
}
