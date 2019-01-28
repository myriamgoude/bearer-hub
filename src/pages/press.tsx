import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const PressPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Press and Media Resources</h1>
        <Link to="contact">Contact Us</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default PressPage
