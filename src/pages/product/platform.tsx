import * as React from 'react'

import Page from '../../components/Page/Page'
import PageMetadata from '../../components/PageMetadata/PageMetadata'
import Container from '../../components/Container/Container'
import IndexLayout from '../../layouts'

const ProductPlatformPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="Bearer - Platform Features" />
    <Page>
      <Container>
        <h1>Product Platform</h1>
      </Container>
    </Page>
  </IndexLayout>
)

export default ProductPlatformPage
