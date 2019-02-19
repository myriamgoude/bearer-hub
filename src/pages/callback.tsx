import * as React from 'react'

import { lockCallback, redirectPath } from '../services/Auth'
import { navigate } from 'gatsby'

export default class Login extends React.Component {
  public render() {
    return null
  }

  public componentDidMount() {
    lockCallback(() => navigate(redirectPath()))
  }
}
