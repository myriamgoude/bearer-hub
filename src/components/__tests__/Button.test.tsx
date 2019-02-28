import * as React from 'react'
import renderer from 'react-test-renderer'
import Button from '../Buttons/Button'

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button link="/foo" text="hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders primary colours', () => {
    const tree = renderer.create(<Button primary link="/foo" text="hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
