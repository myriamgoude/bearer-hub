import * as React from 'react'
import renderer from 'react-test-renderer'
import Tooltip from '../Tooltip/Tooltip'

describe('Tooltip', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Tooltip placement="right" trigger={['alert']} content="Did you know this is a tooltip?" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
