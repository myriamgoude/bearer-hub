import * as React from 'react'
import styled from '@emotion/styled'
import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'
import Navigation from './Navigation'
import Link from './Link'

import logo from '../images/logo.svg'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  color: ${colors.black};
`

const StyledImg = styled.img`
  height: 2rem;
  line-height: 2rem;
  vertical-align: bottom;
  margin-right: 0.5rem;
  width: auto;
`

const HeaderInner = styled(Container)`
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Header = () => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">
        <StyledImg src={logo} alt="Bearer logo" />
      </HomepageLink>
      <Navigation />
    </HeaderInner>
  </StyledHeader>
)

export default Header
