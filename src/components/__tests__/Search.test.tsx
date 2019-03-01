import * as React from 'react'
import renderer from 'react-test-renderer'
import Search from '../Search'

describe('Search', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Search />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('hides providers when given default provider prop', () => {
    const tree = renderer.create(<Search defaultProvider="Foo" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('hides categories when given default category prop', () => {
    const tree = renderer.create(<Search defaultCategory="Bar" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
