import * as React from 'react'
import { css } from '@emotion/core'

import { isAuthenticated, isSSOAuthenticated, lockLogin } from '../../services/Auth'
import { dashboardURL } from '../../services/Dashboard'
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
  target?: string
  title?: string
  trackLink?: boolean
  partiallyActive?: boolean
  to: any
}

const NavLink = (props: INavLinkProps) => (
  <li>
    <Link
      to={props.to}
      trackLink={props.trackLink}
      css={[styles.link]}
      title={props.title}
      partiallyActive={props.partiallyActive}
      activeClassName="active"
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

  private doLogin = (e: Event) => {
    lockLogin(this.onLogin, this.onError, false, dashboardURL())
    e.preventDefault()
  }

  private doSignup = (e: Event) => {
    lockLogin(this.onLogin, this.onError, true, dashboardURL())
    e.preventDefault()
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

  private renderLoggedIn = () => <Button small secondary text="Go to dashboard" link={dashboardURL()} />

  private renderLogin = () => (
    <>
      <Button onClick={this.doLogin} small primary text="Login" link="#login" />
      <Button onClick={this.doSignup} small secondary text="Signup" link="#signup" />
    </>
  )

  renderToggleButton = () => (
    <button
      onClick={() => {
        this.setState({ isOpened: !this.state.isOpened })
        console.log(styles.mobileList)
      }}
      css={styles.mobileButton}
    >
      <img
        src={
          this.state.isOpened
            ? require('../../images/shared/icon-close.svg')
            : require('../../images/shared/icon-burger.svg')
        }
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
        <ul css={styles.list} className={this.state.isOpened ? 'show' : undefined}>
          <NavLink to="/integrations" title="API Integration templates">
            INTEGRATION TEMPLATES
          </NavLink>
          <NavLink partiallyActive to="/product/">
            PRODUCT
          </NavLink>
          <NavLink title="API integration documentation" trackLink to="https://docs.bearer.sh">
            DOCUMENTATION
          </NavLink>
          <NavLink partiallyActive to="/pricing" title="API integration platform pricing">
            PRICING
          </NavLink>
          <div className="mobile-login">{this.state.isAuthenticated ? this.renderLoggedIn() : this.renderLogin()}</div>
        </ul>
        <span className="desktop-login">{this.state.isAuthenticated ? this.renderLoggedIn() : this.renderLogin()}</span>
      </div>
    )
  }

  public componentDidMount() {
    isSSOAuthenticated(this.onLogin)
  }
}
