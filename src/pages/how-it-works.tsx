import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page/Page'
import Container from '../components/Container/Container'
import IndexLayout from '../layouts'
import Button from '../components/Buttons/Button'
import PageHeading from '../components/PageHeading/PageHeading'
import PageMetadata from '../components/PageMetadata/PageMetadata'
import SectionHeading from '../components/SectionHeading/SectionHeading'

const StyledContainer = styled(Container)`
  justify-content: center;
`

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
const title = 'How Bearer Works?'

const HowItWorksPage: GatsbyPage<IQueryProps> = ({ data, location }) => (
  <IndexLayout location={location}>
    <PageMetadata title={title} />
    <Page>
      <PageHeading primaryText={title} secondaryText="The Future of Integration is today!" />
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
      <SectionHeading primaryText="But, don't take our word for granted!" />
      <StyledContainer>
        <Button primary link="/explore" text="Explore integrations" />
        <Button link="/" text="See documentation" />
      </StyledContainer>
    </Page>
  </IndexLayout>
)

export default HowItWorksPage
