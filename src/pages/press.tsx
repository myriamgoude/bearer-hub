import * as React from 'react'

import Link from '../components/Link/Link'
import Page from '../components/Page/Page'
import PageMetadata from '../components/PageMetadata/PageMetadata'
import Container from '../components/Container/Container'
import IndexLayout from '../layouts'

const PressPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="Press and Media Resources" />
    <Page>
      <Container>
        <h1>Press and Media Resources</h1>
        <Link to="contact">Contact Us</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default PressPage
