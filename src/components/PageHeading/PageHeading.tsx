import * as React from 'react'
import styled from '@emotion/styled'

const StyledDiv = styled.div`
  width: 100%;
  flex-shrink: 0;
  margin-left: auto;
  text-align: center;
`

interface PageHeadingProps {
  primaryText: string
  secondaryText?: string
}

const PageHeading = (PageHeadingProps: PageHeadingProps) => (
  <StyledDiv>
    <h1>{PageHeadingProps.primaryText}</h1>
    <h3>{PageHeadingProps.secondaryText}</h3>
  </StyledDiv>
)

export default PageHeading
