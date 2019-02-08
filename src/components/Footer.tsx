import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { breakpoints, colors, dimensions } from '../styles/variables'

import whiteLogo from '../images/logo-white.svg'

// NOTE: social icons are from imported from https://simpleicons.org/
import socialIconTwitter from '../images/social/twitter.svg'
import socialIconFacebook from '../images/social/facebook.svg'
import socialIconLinkedIn from '../images/social/linkedin.svg'
import socialIconGitHub from '../images/social/github.svg'

const FooterContainer = styled.footer`
  background-color: ${colors.dark};
  color: ${colors.white};
  letter-spacing: -0.27px;
  line-height: ${dimensions.lineHeight.regular};
  position: relative;

  @media (max-width: ${breakpoints.sm}px) {
    padding: 2rem;
  }

  @media (min-width: ${breakpoints.sm}px) {
    padding: 2rem;
  }

  @media (min-width: ${breakpoints.xl}px) {
    display: flex;
    justify-content: space-between;
  }
`

const FooterMain = styled.div`
  @media (min-width: ${breakpoints.md}px) {
    display: flex;
  }
`

const FooterSocial = styled.div`
  img {
    width: 1.5rem;
    margin-right: 1rem;
  }

  @media (min-width: ${breakpoints.lg}px) {
    margin: 0 0 0 2rem;
  }

  @media (min-width: ${breakpoints.xl}px) {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin: 2.875rem 2rem 0 0;
    text-align: right;

    a:last-child img { 
      margin-right: 0; 
    }
  }
`

const FooterCopyright = styled.div`
  @media (min-width: ${breakpoints.sm}px) {
    margin: 1rem 0 0 0;
  }

  @media (min-width: ${breakpoints.lg}px) {
    margin: 1rem 0 0 2rem;
  }

  @media (min-width: ${breakpoints.xl}px) {
    position: absolute;
    bottom: 2rem;
    right: 4rem;
    text-align: right;
  }
`

const FooterCategories = styled.div`
  @media (min-width: ${breakpoints.md}px) {
    display: flex;
  }
`

const FooterCategory = styled.section`
  h3 {
    color: ${colors.gray.copy};
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 1px;
    line-height: 1rem;
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 1rem;

      &:hover {
        color: inherit;
        text-decoration: underline;
      }
    }
  }

  @media (max-width: ${breakpoints.sm}px) {
    margin: 1rem 0;

    ul {
      margin: 1rem 0 0 0;
      padding: 0;
    }
  }

  @media (min-width: ${breakpoints.sm}px) {
    ul {
      margin: 2rem 0 2rem 0;
      padding: 0;
    }
  }

  @media (min-width: ${breakpoints.md}px) {
    margin-right: 4rem;
  }

  @media (min-width: ${breakpoints.lg}px) {
    margin: 0 2rem;

    &:first-child {
      margin-left: 1rem;
    }
  }

  @media (min-width: ${breakpoints.xl}px) {
    &:first-child {
      margin-left: 2rem;
    }
  }
`

const FooterLogo  = styled.div`
  a {
    border: 0;
  }

  a img {
    max-width: none;
    width: 7rem;
  }

  @media (min-width: ${breakpoints.sm}px) {
    margin-bottom: 2rem;
  }

  @media (min-width: ${breakpoints.md}px) {
    padding: 0 2rem;
  }
`

const Footer = () => (
  <FooterContainer>
    <FooterMain>
      <FooterLogo>
        <Link to="/">
          <img src={whiteLogo} alt="Bearer logo" />
        </Link>
      </FooterLogo>
      <FooterCategories>
        <FooterCategory>
          <h3>Integrations</h3>
          <ul>
            <li><a href="#">Login</a></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/pricing">Pricing Plan</Link></li>
            <li><Link to="/security">Security</Link></li>
          </ul>
        </FooterCategory>
        <FooterCategory>
          <h3>Help</h3>
          <ul>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Integration requests</a></li>
            <li><a href="#">Status page</a></li>
          </ul>
        </FooterCategory>
        <FooterCategory>
          <h3>Company</h3>
          <ul>
            <li><Link to="/native-integrations">Manifesto</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/press">Press kit</Link></li>
          </ul>
        </FooterCategory>
        <FooterCategory>
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/legal">Legal Notices</Link></li>
            <li>GDPR</li>
          </ul>
        </FooterCategory>
      </FooterCategories>
    </FooterMain>        
    <FooterSocial>
      <div>
        <a href="https://twitter.com/@bearer"><img src={socialIconTwitter} alt="Bearer is on Twitter" /></a>
        <a href="https://github.com/Bearer"><img src={socialIconGitHub} alt="Bearer is on GitHub" /></a>
        <a href="#facebook"><img src={socialIconFacebook} alt="Bearer is on Facebook" /></a>
        <a href="https://www.linkedin.com/company/bearer">
          <img src={socialIconLinkedIn} alt="Bearer is on LinkedIn" />
        </a>
      </div>
    </FooterSocial>
    <FooterCopyright>&copy; Copyright Bearer 2018-2019</FooterCopyright>
  </FooterContainer>
)

export default Footer
