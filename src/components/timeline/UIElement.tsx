import * as React from 'react'
import GraphImg from 'graphcms-image'
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
    image: {
      handle: string
      height: number
      width: number
    }
  }
  rightAligned: boolean
}

const IUIElementProps = ({ element, rightAligned }: IUIElementProps) => (
  <StyledDiv rightAligned={rightAligned}>
    <h4>{element.title}</h4>
    {element.image ? <GraphImg image={element.image} maxWidth={800} /> : null}
    <CodeSnippet>{element.codeSnippet}</CodeSnippet>
  </StyledDiv>
)

export default IUIElementProps
