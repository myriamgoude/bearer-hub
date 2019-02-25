import * as React from 'react'
import styled from '@emotion/styled'

import CodeSnippet from './CodeSnippet'

const StyledDiv = styled.div<{ rightAligned: boolean }>`
  width: 50%;
  ${props => (props.rightAligned ? 'margin-left: auto;' : '')};
`

interface IUIElementProps {
  element: {
    title: string
    codeSnippet: string
  }
  rightAligned: boolean
}

const IUIElementProps = ({ element, rightAligned }: IUIElementProps) => (
  <StyledDiv rightAligned={rightAligned}>
    <h4>{element.title}</h4>
    <div>Add image for UI element here</div>
    <CodeSnippet>{element.codeSnippet}</CodeSnippet>
  </StyledDiv>
)

export default IUIElementProps
