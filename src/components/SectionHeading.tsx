import * as React from 'react'
import styled from '@emotion/styled'

const StyledDiv = styled.div`
  width:100%;
  flex-shrink: 0;
  margin-left: auto;
  text-align: center;
`

interface ISectionHeadingProps {
  primaryText: string,
  secondaryText?: string
}

const SectionHeading = (ISectionHeadingProps:ISectionHeadingProps) => (
  <StyledDiv>
    <h2>{ISectionHeadingProps.primaryText}</h2>
    <h3>{ISectionHeadingProps.secondaryText}</h3>
  </StyledDiv>
)

export default SectionHeading
