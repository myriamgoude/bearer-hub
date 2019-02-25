import * as React from 'react'
import styled from '@emotion/styled'

import BearerLibrary from './backendElements/InstallBearerLibrary'
import BearerSDK from './backendElements/InstallBearerSDK'

const StyledDiv = styled.div<{ rightAligned: boolean }>`
  width: 50%;
  ${props => (props.rightAligned ? 'margin-left: auto;' : '')};
`

interface IBackendElementProps {
  type: string
  name: string
  rightAligned: boolean
}

const backendElementComponents: any = {
  InstallBearerLibrary: BearerLibrary,
  InstallBearerSDK: BearerSDK
}

class BackendElement extends React.Component<IBackendElementProps> {
  render() {
    const BackendElement = backendElementComponents[this.props.type]
    if (BackendElement) {
      return (
        <StyledDiv rightAligned={this.props.rightAligned}>
          <BackendElement name={this.props.name} />
        </StyledDiv>
      )
    }
    return null
  }
}

export default BackendElement
