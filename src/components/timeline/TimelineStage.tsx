import * as React from 'react'
import { css } from '@emotion/core'

import Container from '../Container'
import BackendElement from './BackendElement'
import UIElement from './UIElement'

import { colors } from '../../styles/variables'

interface ITimelineStageProps {
  index: number
  timeElasped: number
  stage: {
    backendElementType?: string
    backendElementName?: string
    uiElement?: {
      title: string
      codeSnippet: string
      tooltip: string
      helperText: string
      image: {
        handle: string
        height: number
        width: number
      }
    }
  }
}

const labelStyle = css`
  background: ${colors.yellow};
  height: 45px;
  width: 45px;
  border-radius: 24px;
  margin: auto;
  color: #fff;
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`

class TimelineStage extends React.Component<ITimelineStageProps> {
  rightAligned(index: number) {
    return index % 2 === 0
  }

  render() {
    return (
      <>
        <Container style={{ marginBottom: 32 }}>
          {this.props.stage.uiElement && this.props.stage.backendElementType === null ? (
            <>
              <UIElement
                element={this.props.stage.uiElement}
                rightAligned={this.rightAligned(this.props.index) && !this.props.stage.backendElementType}
                time={this.props.timeElasped}
              />
            </>
          ) : null}
          {this.props.stage.backendElementType && this.props.stage.uiElement === null ? (
            <BackendElement
              type={this.props.stage.backendElementType}
              functionName={this.props.stage.backendElementName || ''}
              rightAligned={this.rightAligned(this.props.index) && !this.props.stage.uiElement}
              time={this.props.timeElasped}
            />
          ) : null}
          {this.props.stage.uiElement && this.props.stage.backendElementType ? (
            <>
              <div
                css={css`
                  display: flex;

                  > *:before {
                    margin-top: -20px;
                    padding-bottom: 60px;
                    background-position: center bottom 16px;
                  }
                `}
              >
                <UIElement element={this.props.stage.uiElement} rightAligned={false} time={this.props.timeElasped} />
                <div css={labelStyle} className="label-or">
                  <span>Or</span>
                </div>
                <BackendElement
                  type={this.props.stage.backendElementType}
                  functionName={this.props.stage.backendElementName || ''}
                  rightAligned={true}
                  time={this.props.timeElasped}
                  noTimeLabel={true}
                />
              </div>
            </>
          ) : null}
        </Container>
      </>
    )
  }
}

export default TimelineStage
