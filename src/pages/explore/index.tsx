import * as React from 'react'

import Page from '../../components/Page'
import Container from '../../components/Container'
import IndexLayout from '../../layouts'
import Search from '../../components/Search'
import PageMetadata from '../../components/PageMetadata'

const ExplorePage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="Explore" description="Explore Integrations" />
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

export default ExplorePage
