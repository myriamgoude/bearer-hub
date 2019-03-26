import * as React from 'react'
import { graphql } from 'gatsby'
import { Button, Container, HeroPanel, Page, Section, SectionHeading, Grid } from '../components/'
import IndexLayout from '../layouts'

import placeholderHeroImage from '../images/hero-image.svg'
import { css } from '@emotion/core'

interface IQueryProps {
  site: {
    siteMetadata: {
      howToSteps: [
        {
          title: string
          description: string
        }
      ]
    }
  }
}

export const query = graphql`
  query HowItWorksQuery {
    site {
      siteMetadata {
        howToSteps {
          title
          description
        }
      }
    }
  }
`

const HowItWorksPage: GatsbyPage<IQueryProps> = ({ data, location }) => (
  <IndexLayout location={location}>
    <Page>
      <HeroPanel
        title={<>How Bearer Works?</>}
        subtitle="The Future of Integration is today!"
        image={placeholderHeroImage}
      />
      <Section>
        {data.site.siteMetadata.howToSteps.map((step, index) => (
          <Container key={index}>
            <div>
              <h4>
                {index + 1}. {step.title}
              </h4>
              {step.description}
            </div>
          </Container>
        ))}
      </Section>
      <Section>
        <SectionHeading primaryText="But, don't take our word for granted!" />

        <Grid
          css={css`
            text-align: center;
          `}
        >
          <Button primary trackLink link="/explore" text="Explore integrations" />
          <Button link="/" text="See documentation" />
        </Grid>
      </Section>
    </Page>
  </IndexLayout>
)

export default HowItWorksPage
