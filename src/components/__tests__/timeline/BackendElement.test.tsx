import React from 'react'
import renderer from 'react-test-renderer'

import BackendElement from '../../timeline/BackendElement'

describe('BackendElement', () => {
  it('has no auto margin when rightAligned is false, and displays Library component for Library function type', () => {
    const tree = renderer.create(
      <BackendElement type="InstallBearerLibrary" name="connect-hello-world" rightAligned={false} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('has auto margin-left when rightAligned is true, and displays SDK content for SDK function type', () => {
    const tree = renderer.create(
      <BackendElement type="InstallBearerSDK" name="connect-hello-world" rightAligned={true} />
    )
    expect(tree).toMatchSnapshot()
  })
})
