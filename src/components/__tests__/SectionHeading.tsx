import * as React from 'react'
import renderer from 'react-test-renderer'
import SectionHeading from '../SectionHeading/SectionHeading'

describe('SectionHeading', () => {
  it('renders correctly with tooltip text', () => {
    const tree = renderer
      .create(
        <SectionHeading
          tooltip="Drink me"
          align="left"
          primaryText="Alice's Adventures"
          secondaryText="Through the Looking Glass"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without tooltip text', () => {
    const tree = renderer
      .create(
        <SectionHeading align="left" primaryText="Alice's Adventures" secondaryText="Through the Looking Glass" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
