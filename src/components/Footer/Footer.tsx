import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Link } from '../index'

// NOTE: social icons are imported from from https://simpleicons.org/
import socialIconTwitter from '../../images/social/twitter.svg'
import socialIconFacebook from '../../images/social/facebook.svg'
import socialIconLinkedIn from '../../images/social/linkedin.svg'
import socialIconGitHub from '../../images/social/github.svg'
import socialIconMedium from '../../images/social/medium.svg'

import whiteLogo from '../../images/logo-white.svg'

import styles from './Footer.style'

interface IFooterQuery {
  site: {
    siteMetadata: {
      footer: IFooterCategory[]
    }
  }
}

interface IFooterCategory {
  title: string
  links: { to: string; label: string; trackLink?: boolean; targetBlank?: boolean }[]
}

interface IFooterProps {
  categories: IFooterCategory[]
}

const query = graphql`
  query {
    site {
      siteMetadata {
        footer {
          title
          links {
            to
            label
            trackLink
            targetBlank
          }
        }
      }
    }
  }
`

export default () => {
  return (
    <StaticQuery query={query} render={(data: IFooterQuery) => <Footer categories={data.site.siteMetadata.footer} />} />
  )
}

const Footer = (props: IFooterProps) => (
  <div css={styles.root}>
    <Container style={styles.container}>
      <div css={styles.main}>
        <div css={styles.logo}>
          <Link to="/">
            <img src={whiteLogo} alt="Bearer logo" />
          </Link>
        </div>
        <div css={styles.categories}>
          {props.categories.map((cat, i) => (
            <section css={styles.category} key={i}>
              <h3>{cat.title}</h3>
              <ul>
                {cat.links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to} trackLink={link.trackLink} {...link.to.match(/^http/) && { target: '_blank' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <div css={styles.social}>
        <div>
          <Link targetBlank to="https://twitter.com/@bearersh">
            <img src={socialIconTwitter} alt="Bearer is on Twitter" />
          </Link>
          <Link targetBlank to="https://github.com/Bearer">
            <img src={socialIconGitHub} alt="Bearer is on GitHub" />
          </Link>
          <Link targetBlank to="https://www.facebook.com/BearerAPI/">
            <img src={socialIconFacebook} alt="Bearer is on Facebook" />
          </Link>
          <Link targetBlank to="https://www.linkedin.com/company/bearer">
            <img src={socialIconLinkedIn} alt="Bearer is on LinkedIn" />
          </Link>
          <Link targetBlank to="https://medium.com/bearer">
            <img src={socialIconMedium} alt="Bearer is on Medium" />
          </Link>
        </div>
      </div>
      <div css={styles.copyright}>&copy; Copyright Bearer {new Date().getFullYear()}</div>
    </Container>
  </div>
)
