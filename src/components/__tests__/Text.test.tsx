import * as React from 'react'
import renderer from 'react-test-renderer'
import Text from '../Text/Text'

describe('Text', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Text text="hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly with className', () => {
    const tree = renderer.create(<Text text="hello" style="foo" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
