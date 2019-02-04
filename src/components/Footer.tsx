import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

import logo from '../images/logo.svg'
import socialIcon from '../images/social-icon-placeholder.png'

const StyledFooter = styled.footer`
  padding: ${dimensions.containerPadding}rem;
  display: block;
  flex: 1;
  position: relative;
  background-color: ${colors.dark};
  h1, h2, h3, h4 {
    color: ${colors.gray.copy};
  }
  color: ${colors.white};
`

const StyledFooterInner = styled.div`
  display: block;
  flex-direction: row;
  padding-right: ${dimensions.containerPadding}rem;
  
  ul, li {
    display: list-item;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`

const StyledImg = styled.img`
  height: 2rem;
  line-height: 2rem;
  vertical-align: bottom;
  margin-right: .5rem;
  width: auto;
`

const HomepageLink = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const StyledFooterSocial = styled(Container)`
  color: ${colors.gray.copy};
  flex-direction: column;
`

const Footer = () => (
  <StyledFooter>
    <Container>
      <StyledFooterInner>
        <HomepageLink to="/">
          <StyledImg src={logo} alt="Bearer logo" />
        </HomepageLink>
      </StyledFooterInner>
      <StyledFooterInner>
        <h4>INTEGRATIONS</h4>
        <ul>
          <li>Login</li>
          <Link to="/explore"><li>Explore</li></Link>
          <Link to="/pricing"><li>Pricing Plan</li></Link>
          <Link to="/security"><li>Security</li></Link>
        </ul>
      </StyledFooterInner>
      <StyledFooterInner>
        <div>
          <h4>HELP</h4>
          <ul>
            <Link to="/how-it-works"><li>How it works</li></Link>
            <li>Documentation</li>
            <li>FAQ</li>
            <li>Integration requests</li>
            <li>Status page</li>
          </ul>
        </div>
      </StyledFooterInner>
      <StyledFooterInner>
        <div>
          <h4>COMPANY</h4>
          <ul>
            <Link to="/native-integrations"><li>Manifesto</li></Link>
            <Link to="/about"><li>About us</li></Link>
            <Link to="/press"><li>Press kit</li></Link>
          </ul>
        </div>
      </StyledFooterInner>
      <StyledFooterInner>
        <div>
          <h4>LEGAL</h4>
          <ul>
            <Link to="/privacy"><li>Privacy</li></Link>
            <Link to="/legal"><li>Legal Notices</li></Link>
            <li>GDPR</li>
          </ul>
        </div>
      </StyledFooterInner>
      <StyledFooterSocial>
        <div>
          <a href="https://github.com/Bearer"><StyledImg src={socialIcon} alt="Bearer GitHub" /></a>
          <a href="https://github.com/Bearer"><StyledImg src={socialIcon} alt="Bearer GitHub" /></a>
          <a href="https://github.com/Bearer"><StyledImg src={socialIcon} alt="Bearer GitHub" /></a>
          <a href="https://github.com/Bearer"><StyledImg src={socialIcon} alt="Bearer GitHub" /></a>
        </div>
        <div>
          (c) Copyright Bearer 2019
        </div>
      </StyledFooterSocial>
    </Container>
  </StyledFooter>
)

export default Footer
