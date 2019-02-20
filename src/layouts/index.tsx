import * as React from 'react'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import SiteMetadata from '../components/SiteMetadata'
import Footer from '../components/Footer'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

const IndexLayout: React.SFC<{ location: Location }> = ({ children, location }) => (
  <LayoutRoot>
    <SiteMetadata pathname={location.pathname} />
    <Header />
    <LayoutMain>{children}</LayoutMain>
    <Footer />
  </LayoutRoot>
)
export default IndexLayout
