import * as React from 'react'

import Link from '../components/Link/Link'
import Page from '../components/Page/Page'
import PageMetadata from '../components/PageMetadata/PageMetadata'
import Container from '../components/Container/Container'
import IndexLayout from '../layouts'

const PressPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata
      title="Press Information and Resources | Bearer"
      description="Press and Resources about Bearer, the API Integration Framework"
    />
    <Page>
      <Container>
        <h1>Press and Media Resources</h1>
        <Link to="contact">Contact Us</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default PressPage
