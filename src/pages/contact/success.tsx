import * as React from 'react'

import { Button, Layout, Page, PageMetadata, Section } from '../../components'

import heroStyles from '../../components/HeroPanel/HeroPanel.style'
import { ContactFormHero, styleForm } from './index'

const ContactThankYouPage: GatsbyPage = ({ location }) => (
  <Layout location={location}>
    <PageMetadata title="Thank you" />
    <Page css={[heroStyles.styleDefaultCurve]}>
      <ContactFormHero />
      <Section>
        <div css={styleForm} className="form-success">
          <h2>Thank you</h2>
          <p>Our team will get back to you shortly!</p>
          <div style={{ marginTop: '3rem' }}>
            <Button link="/" text="Go to the homepage" secondary />
          </div>
        </div>
      </Section>
    </Page>
  </Layout>
)

export default ContactThankYouPage
