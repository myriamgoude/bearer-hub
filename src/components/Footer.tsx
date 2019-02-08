import * as React from 'react'
import { Link } from 'gatsby'

import whiteLogo from '../images/logo-white.svg'

// NOTE: social icons are from imported from https://simpleicons.org/
import socialIconTwitter from '../images/social/twitter.svg'
import socialIconFacebook from '../images/social/facebook.svg'
import socialIconLinkedIn from '../images/social/linkedin.svg'
import socialIconGitHub from '../images/social/github.svg'

import footerStyles from "../modules/footer.module.css"

const Footer = () => (
  <footer className={footerStyles.container}>
    <div className={footerStyles.main}>
      <div className={footerStyles.logo}>
        <Link to="/">
          <img src={whiteLogo} alt="Bearer logo" />
        </Link>
      </div>
      <div className={footerStyles.categories}>
        <section className={footerStyles.category}>
          <h3 className={footerStyles.categoryTitle}>Integrations</h3>
          <ul>
            <li><a href="#">Login</a></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/pricing">Pricing Plan</Link></li>
            <li><Link to="/security">Security</Link></li>
          </ul>
        </section>
        <section className={footerStyles.category}>
          <h3 className={footerStyles.categoryTitle}>Helps</h3>
          <ul>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">Integration requests</a></li>
            <li><a href="#">Status page</a></li>
          </ul>
        </section>
        <section className={footerStyles.category}>
          <h3 className={footerStyles.categoryTitle}>Company</h3>
          <ul>
            <li><Link to="/native-integrations">Manifesto</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/press">Press kit</Link></li>
          </ul>
        </section>
        <section className={footerStyles.category}>
          <h3 className={footerStyles.categoryTitle}>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/legal">Legal Notices</Link></li>
            <li>GDPR</li>
          </ul>
        </section>
      </div>
    </div>        
    <div className={footerStyles.social}>
      <div>
        <a href="https://twitter.com/@bearer"><img src={socialIconTwitter} alt="Bearer is on Twitter" /></a>
        <a href="https://github.com/Bearer"><img src={socialIconGitHub} alt="Bearer is on GitHub" /></a>
        <a href="#facebook"><img src={socialIconFacebook} alt="Bearer is on Facebook" /></a>
        <a href="https://www.linkedin.com/company/bearer">
		<img src={socialIconLinkedIn} alt="Bearer is on LinkedIn" />
	</a>
      </div>
    </div>

    <div className={footerStyles.copyright}>&copy; Copyright Bearer 2018-2019</div>
  </footer>
)

export default Footer
