import * as React from 'react'
import { isAuthenticated, isSSOAuthenticated, lockLogin } from '../../services/Auth'
import { isBrowser } from '../../services/Browser'

import Button from './Button'

interface IButtonToDashboardProps {
  link: string
  text: string
  dashboardUrl?: string
  [key: string]: any
}

interface IButtonToDashboardState {
  isAuthenticated: boolean
}

export default class ButtonToDashboard extends React.Component<IButtonToDashboardProps, IButtonToDashboardState> {
  constructor(props: IButtonToDashboardProps) {
    super(props)
    this.state = {
      isAuthenticated: isAuthenticated()
    }
  }

  private handleClick = (link: string) => {
    lockLogin(this.onLogin, this.onError, true, link)
  }

  private onLogin = () => {
    this.setState({ isAuthenticated: true })
  }

  private onError = () => {
    const currentWindow = window as any
    const errorMessage = 'Login via link to Dashboard failed'

    if (isBrowser && currentWindow.bugsnagClient !== undefined) {
      currentWindow.bugsnagClient.notify(errorMessage)
    } else {
      console.error(errorMessage)
    }
  }

  public render() {
    const { dashboardUrl, link, text, ...remainingProps } = this.props

    if (this.state.isAuthenticated) {
      return <Button link={link} text={text} {...remainingProps} />
    }

    return (
      <Button
        onClick={(e: Event) => {
          e.preventDefault()
          this.handleClick(link)
        }}
        link={link}
        text={text}
        {...remainingProps}
      />
    )
  }

  public componentDidMount() {
    isSSOAuthenticated(this.onLogin)
  }
}
