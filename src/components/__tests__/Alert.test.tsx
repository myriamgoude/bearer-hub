import * as React from 'react'
import renderer from 'react-test-renderer'
import { Alert, AlertType } from '../Alert/Alert'

describe('Alert', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Alert alertType={AlertType.LoginError} dismissAlert={() => {}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the default correctly', () => {
    const tree = renderer.create(<Alert dismissAlert={() => {}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
