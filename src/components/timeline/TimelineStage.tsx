import * as React from 'react'
import styled from '@emotion/styled'

import Container from '../Container'
import BackendElement from './BackendElement'
import UIElement from './UIElement'

const StyledContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`

interface ITimelineStageProps {
  index: number
  stage: {
    timeToComplete: number
    backendElementType?: string
    backendElementName?: string
    uiElement?: {
      title: string
      codeSnippet: string
      image: {
        handle: string
        height: number
        width: number
      }
    }
  }
}

class TimelineStage extends React.Component<ITimelineStageProps> {
  rightAligned(index: number) {
    return index % 2 === 0
  }

  render() {
    return (
      <>
        <StyledContainer>
          <h4>{this.props.stage.timeToComplete} min(s)</h4>
        </StyledContainer>
        <Container>
          {this.props.stage.uiElement ? (
            <UIElement
              element={this.props.stage.uiElement}
              rightAligned={this.rightAligned(this.props.index) && !this.props.stage.backendElementType}
            />
          ) : null}
          {this.props.stage.backendElementType && this.props.stage.backendElementName ? (
            <BackendElement
              type={this.props.stage.backendElementType}
              name={this.props.stage.backendElementName}
              rightAligned={this.rightAligned(this.props.index) && !this.props.stage.uiElement}
            />
          ) : null}
        </Container>
      </>
    )
  }
}

export default TimelineStage
