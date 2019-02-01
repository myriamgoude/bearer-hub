import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

import logo from '../images/logo.svg'

const StyledFooter = styled.footer`
  height: ${heights.footer}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.dark};
  color: ${colors.white};
`

const StyledImg = styled.img`
  height: 2rem;
  line-height: 2rem;
  vertical-align: bottom;
  margin-right: .5rem;
  width: auto;
`

const FooterInner = styled(Container)`
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Footer = () => (
  <StyledFooter>
    <FooterInner>
      <HomepageLink to="/">
        <StyledImg src={logo} alt="Bearer logo" />
      </HomepageLink>
    </FooterInner>
  </StyledFooter>
)

export default Footer
