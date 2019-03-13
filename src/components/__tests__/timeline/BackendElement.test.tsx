import React from 'react'
import renderer from 'react-test-renderer'

import BackendElement from '../../timeline/BackendElement'

jest.mock('../../../services/Explore', () => ({
  timer: jest.fn().mockReturnValue('11.01')
}))

describe('BackendElement', () => {
  it('has no auto margin when rightAligned is false, and displays Library component for Library function type', () => {
    const tree = renderer.create(
      <BackendElement type="InstallBearerLibrary" functionName="connect-hello-world" rightAligned={false} time={0} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('has auto margin-left when rightAligned is true, and displays SDK content for SDK function type', () => {
    const tree = renderer.create(
      <BackendElement type="InstallBearerSDK" functionName="connect-hello-world" rightAligned={true} time={1} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('does not display time unless label is set', () => {
    const tree = renderer.create(
      <BackendElement
        type="InstallBearerSDK"
        functionName="connect-hello-world"
        rightAligned={true}
        time={0}
        noTimeLabel={true}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
