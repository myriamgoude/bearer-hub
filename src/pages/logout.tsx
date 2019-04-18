import * as React from 'react'

import { logout } from '../services/Auth'

export default class Logout extends React.Component {
  public render() {
    return null
  }

  public componentDidMount() {
    logout()
  }
}
