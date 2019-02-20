import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import PageMetadata from '../components/PageMetadata'

const ContactPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="Contact" />
    <Page>
      <Container>
        <h1>Contact</h1>
      </Container>
    </Page>
  </IndexLayout>
)

export default ContactPage
