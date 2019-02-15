import * as React from 'react'

import Page from '../../components/Page'
import Container from '../../components/Container'
import IndexLayout from '../../layouts'
import Search from '../../components/Search'

export default () => (
  <IndexLayout>
    <Page>
      <Container>
        <div>
          <h1>Explore Integrations</h1>
          <Search />
        </div>
      </Container>
    </Page>
  </IndexLayout>
)
