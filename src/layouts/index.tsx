import * as React from 'react'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header/Header'
import SiteMetadata from '../components/SiteMetadata/SiteMetadata'
import Footer from '../components/Footer/Footer'
import LayoutRoot from '../components/LayoutRoot/LayoutRoot'
import LayoutMain from '../components/LayoutMain/LayoutMain'

const IndexLayout: React.SFC<{ location: Location }> = ({ children, location }) => (
  <LayoutRoot>
    <SiteMetadata pathname={location.pathname} />
    <Header />
    <LayoutMain>{children}</LayoutMain>
    <Footer />
  </LayoutRoot>
)
export default IndexLayout
