import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import BearerLibrary from './backendElements/InstallBearerLibrary'
import BearerSDK from './backendElements/InstallBearerSDK'
import FunctionCall from './backendElements/FunctionCall'

import { timer } from '../../services/Explore'
import { colors } from '../../styles/variables'

const StyledDiv = styled.div<{ rightAligned: boolean; time: number; noTimeLabel: boolean }>`
  width: 50%;
  ${props => (props.rightAligned ? 'margin-left: auto; padding-left: calc(115px + 20px);' : 'padding-right: 115px')};
  position: relative;
  &:before {
    content: '${props => !props.noTimeLabel && timer(props.time)}';
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

interface IBackendElementProps {
  type: string
  rightAligned: boolean
  functionName?: string
  time: number
  noTimeLabel?: any
}

const backendElementComponents: any = {
  InstallBearerLibrary: BearerLibrary,
  InstallBearerSDK: BearerSDK,
  BearerFunctionCall: FunctionCall
}

const BackendElement = ({ rightAligned, time, type, noTimeLabel }: IBackendElementProps) => {
  const BackendElementSelected = backendElementComponents[type]

  return (
    <StyledDiv rightAligned={rightAligned} time={time} noTimeLabel={noTimeLabel}>
      <BackendElementSelected
        className={css`
          padding: 1em;
        `}
      />
    </StyledDiv>
  )
}

export default BackendElement
