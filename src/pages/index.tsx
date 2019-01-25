import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Native Integration</h1>
        <h2>To power your app</h2>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
