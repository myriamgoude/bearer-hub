import * as React from 'react'
import renderer from 'react-test-renderer'
import Card from '../Card/Card'

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Card title="foo" text="foo" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders with object values', () => {
    const tree = renderer
      .create(
        <Card
          title={
            <>
              <img src="#" className="foo" alt="icon" />
              <span>foo bar</span>
            </>
          }
          text={
            <>
              <span>foo bar</span>
            </>
          }
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
