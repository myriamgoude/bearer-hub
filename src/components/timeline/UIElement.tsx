import * as React from 'react'
import GraphImg from 'graphcms-image'
import styled from '@emotion/styled'

import { SectionHeading, TimelineCard, Tooltip } from '../index'
import { colors } from '../../styles/variables'
import { timer } from '../../services/Explore'

const StyledDiv = styled.div<{ rightAligned: boolean; time: number }>`
  width: 50%;
  ${props => (props.rightAligned ? 'margin-left: auto; padding-left: calc(115px + 20px);' : 'padding-right: 115px')};
  position: relative;

  &:before {
    content: '${props => timer(props.time)}';
    display: block;
    position: absolute;
    top: 0;
    width: 115px;
    height: 40px;
    color: ${colors.yellow};
    ${props => (props.rightAligned ? 'padding-left:8px;' : 'padding-right:8px;')};
    ${props => (props.rightAligned ? 'left:-1px;' : 'right:-1px;')};
    ${props => (props.rightAligned ? 'text-align: left;' : 'text-align:right;')};
    ${props =>
      props.rightAligned
        ? `
        background: url(${require('../../images/curve-rtl.svg')}) no-repeat center center / contain;`
        : `
        background: url(${require('../../images/curve-ltr.svg')}) no-repeat center center / contain;
`};
  }
`
interface IUIElementProps {
  element: {
    title: string
    codeSnippet: string
    tooltip?: string
    helperText?: string
    image: {
      handle: string
      height: number
      width: number
    }
  }
  rightAligned: boolean
  time: number
}

const UIElement = ({ element, rightAligned, time }: IUIElementProps) => {
  return (
    <StyledDiv rightAligned={rightAligned} time={time}>
      <div>
        <SectionHeading
          primaryText={element.title}
          align={rightAligned ? 'left' : 'right'}
          tag="h3"
          tooltip={element.tooltip ? <Tooltip placement="right" trigger={['hover']} content={element.tooltip} /> : null}
        />
      </div>
      {element.image && element.codeSnippet && (
        <TimelineCard
          language="HTML"
          snippet={element.codeSnippet}
          image={<GraphImg image={element.image} maxWidth={800} />}
        />
      )}
      {element.image && !element.codeSnippet && (
        <TimelineCard language="HTML" image={<GraphImg image={element.image} maxWidth={800} />} />
      )}
      {!element.image && element.codeSnippet && <TimelineCard language="HTML" snippet={element.codeSnippet} />}
    </StyledDiv>
  )
}

export default UIElement
