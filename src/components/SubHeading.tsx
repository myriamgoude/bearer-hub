import * as React from 'react'
import styled from '@emotion/styled'

const StyledDiv = styled.div`
  width:100%;
  flex-shrink: 0;
  margin-left: auto;
`

const StyledSubHeading = styled.h2`
  text-align: center;
`

const SubHeading = ({ children }: any) => (
  <StyledDiv>
    <StyledSubHeading>{children}</StyledSubHeading>
  </StyledDiv>
)

export default SubHeading
