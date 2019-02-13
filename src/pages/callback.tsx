import * as React from 'react'

import { authenticateCallback, redirectPath } from '../services/Auth'
import { navigate } from 'gatsby'

export default class Login extends React.Component {
  public render() {
    return null
  }

  public componentDidMount() {
    authenticateCallback(() => navigate(redirectPath()))
  }
}
