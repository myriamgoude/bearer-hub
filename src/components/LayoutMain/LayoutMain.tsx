import * as React from 'react'
import styled from '@emotion/styled'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const LayoutMain: React.FunctionComponent = ({ children }) => <StyledLayoutMain>{children}</StyledLayoutMain>

export default LayoutMain
