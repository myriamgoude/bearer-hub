import * as React from 'react'
import styled from '@emotion/styled'

const StyledDiv = styled.div`
  font-family: 'Courier New', Courier, monospace;
`

const CodeSnippet: React.SFC = ({ children }) => <StyledDiv>{children}</StyledDiv>

export default CodeSnippet
