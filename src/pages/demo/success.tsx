import * as React from 'react'
import { css } from '@emotion/core'

import { ButtonToDashboard, Clearfix, HeroLined, Page, PageMetadata, Section, Text } from '../../components'

import IndexLayout from '../../layouts'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'
import { styleForm } from './index'

import { dashboardURL } from '../../services/Dashboard'

const DemoThankYouPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="Press and Media Resources" />
    <Page css={[heroStyles.styleDefaultCurve]}>
      <HeroLined>
        <Text tag="h1" text="Request a demo" />
        <Clearfix />
        <Text
          tag="h3"
          text="Schedule a demo to learn how Bearer can help you build, run and manage API integrations."
          style={css`
            max-width: 30rem;
          `}
        />
      </HeroLined>
      <Section>
        <div css={styleForm} className="form-success">
          <h2>Thank you</h2>
          <p>
            Our team will get back to you shortly! Meanwhile, may we suggest you to create an account so you'll be up
            and running for our meeting.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <ButtonToDashboard link={dashboardURL()} text="Create an account" secondary />
          </div>
        </div>
      </Section>
    </Page>
  </IndexLayout>
)

export default DemoThankYouPage
