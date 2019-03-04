import * as React from 'react'
import { css } from '@emotion/core'
import { Button, Clearfix, HeroPanel, Link, LightCta, Page } from '../components/'
import IndexLayout from '../layouts'

import placeholderHeroImage from '../images/hero-image.svg'

import heroStyles from '../components/HeroPanel/HeroPanel.style'

const IndexPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <Page>
      <div
        css={[
          css`
            position: relative;
          `,
          heroStyles.curvedSection
        ]}
      >
        <HeroPanel
          title={
            <>
              Timeline <Clearfix /> Timeline
            </>
          }
          subtitle="Bearer helps apps get connected to the rest of the World."
          image={placeholderHeroImage}
          longHero
        >
          <LightCta to="foo.com" text="Your users will thank you." />
          <div className="mt-64 mb-32">
            <Button primary link="/explore" text="Explore integrations" />
            <Button secondary link="/how-it-works" text="How it works" />
          </div>
          <p>
            Learn more about <Link to="/native-integration">Native Integrations</Link>
          </p>
        </HeroPanel>
      </div>
    </Page>
  </IndexLayout>
)
export default IndexPage
