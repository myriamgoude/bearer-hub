import * as React from 'react'

import Page from '../components/Page/Page'
import PageMetadata from '../components/PageMetadata/PageMetadata'
import Container from '../components/Container/Container'
import IndexLayout from '../layouts'

const PricingPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="Pricing" />
    <Page>
      <Container>
        <h1>Pricing based on your Integration Success</h1>
      </Container>
    </Page>
  </IndexLayout>
)

export default PricingPage
