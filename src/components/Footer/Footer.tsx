import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from '../Link/Link'
import Container from '../Container/Container'

import whiteLogo from '../../images/logo-white.svg'

// NOTE: social icons are from imported from https://simpleicons.org/
import socialIconTwitter from '../../images/social/twitter.svg'
import socialIconFacebook from '../../images/social/facebook.svg'
import socialIconLinkedIn from '../../images/social/linkedin.svg'
import socialIconGitHub from '../../images/social/github.svg'

import styles from './Footer.css'
import { cx } from 'emotion'

interface IFooterQuery {
  site: {
    siteMetadata: {
      footer: IFooterCategory[]
    }
  }
}

interface IFooterCategory {
  title: string
  links: { to: string; label: string }[]
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
  <div className={cx(styles.root)}>
    <Container>
      <div className={cx(styles.main)}>
        <div className={cx(styles.logo)}>
          <Link to="/">
            <img src={whiteLogo} alt="Bearer logo" />
          </Link>
        </div>
        <div className={cx(styles.categories)}>
          {props.categories.map((cat, i) => (
            <section className={cx(styles.category)} key={i}>
              <h3>{cat.title}</h3>
              <ul>
                {cat.links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <div className={cx(styles.social)}>
        <div>
          <Link to="https://twitter.com/@bearer">
            <img src={socialIconTwitter} alt="Bearer is on Twitter" />
          </Link>
          <Link to="https://github.com/Bearer">
            <img src={socialIconGitHub} alt="Bearer is on GitHub" />
          </Link>
          <Link to="#facebook">
            <img src={socialIconFacebook} alt="Bearer is on Facebook" />
          </Link>
          <Link to="https://www.linkedin.com/company/bearer">
            <img src={socialIconLinkedIn} alt="Bearer is on LinkedIn" />
          </Link>
        </div>
      </div>
      <div className={cx(styles.copyright)}>&copy; Copyright Bearer 2018-2019</div>
    </Container>
  </div>
)