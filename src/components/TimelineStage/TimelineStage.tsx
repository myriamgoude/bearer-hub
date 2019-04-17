import * as React from 'react'
import { Container, Tooltip } from '../index'

import styled from '@emotion/styled'
import { colors, breakpoints } from '../../styles/variables'

import styles from './TimelineStage.style'

// TODO - we should move that StyledDiv to the style file.
// couldn't find how to do it :-)
const StyledDiv = styled.div<{ placement: string }>`
  @media (min-width: ${breakpoints.lg}px) {
    width: 50%;
    ${props =>
      props.placement === 'right' ? 'margin-left: auto; padding-left: calc(115px + 20px);' : 'padding-right: 125px'};
    position: relative;
    h3 {
      ${props => (props.placement === 'right' ? 'text-align: left' : 'justify-content: flex-end;text-align: right')};
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      width: 115px;
      height: 40px;
      color: ${colors.yellow};
      ${props => (props.placement === 'right' ? 'padding-left:8px;' : 'padding-right:8px;')};
      ${props => (props.placement === 'right' ? 'left:-1px;' : 'right:-1px;')};
      ${props => (props.placement === 'right' ? 'text-align: left;' : 'text-align:right;')};
      ${props =>
        props.placement === 'right'
          ? `background: url(${require('../../images/curve-rtl.svg')}) no-repeat center center / contain;`
          : `background: url(${require('../../images/curve-ltr.svg')}) no-repeat center center / contain;`};
    }
  }
  @media (max-width: ${breakpoints.lg}px) {
    padding-left: 16px !important;
  }
`

interface ITimelineStageProps {
  heading: string
  tooltip?: string
  placement: string
  hint?: string
  children: any
}

const TimelineStage = (props: ITimelineStageProps) => (
  <Container style={{ marginBottom: 32 }}>
    <StyledDiv placement={props.placement}>
      <h3 css={styles.stageHeading}>
        {props.heading}
        {props.tooltip && (
          <span css={styles.stageTooltip}>
            <Tooltip placement="top" trigger={['hover']} content={props.tooltip} />
          </span>
        )}
      </h3>
      {props.children}
      {props.hint && <span css={styles.stageHint}>{props.hint}</span>}
    </StyledDiv>
  </Container>
)

export default TimelineStage
