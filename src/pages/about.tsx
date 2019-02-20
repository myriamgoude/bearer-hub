import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import PageMetadata from '../components/PageMetadata'

const AboutPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="About Us" />
    <Page>
      <Container>
        <h1>About Us</h1>
      </Container>
    </Page>
  </IndexLayout>
)

export default AboutPage
