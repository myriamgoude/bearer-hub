import * as React from 'react'
import renderer from 'react-test-renderer'
import Button from '../Buttons/Button'

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button link="/foo" text="hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders primary colours', () => {
    const tree = renderer.create(<Button primary link="/foo" text="hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders secondary colours', () => {
    const tree = renderer.create(<Button secondary link="/foo" text="hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders onClick when trackLink is set', () => {
    const tree = renderer.create(<Button trackLink link="/foo" text="hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
