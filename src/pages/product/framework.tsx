import * as React from 'react'

import Page from '../../components/Page/Page'
import PageMetadata from '../../components/PageMetadata/PageMetadata'
import Container from '../../components/Container/Container'
import IndexLayout from '../../layouts'

const ProductFrameworkPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="Bearer - Framework Features" />
    <Page>
      <Container>
        <h1>Product Framework</h1>
      </Container>
    </Page>
  </IndexLayout>
)

export default ProductFrameworkPage
