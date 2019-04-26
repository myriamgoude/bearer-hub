import * as React from 'react'
import { navigate } from 'gatsby'

import Layout from '../../components/Layout/index'

const ProductIndexPage: GatsbyPage = ({ location }) => {
  React.useEffect(() => {
    navigate('/product/framework', { replace: true })
  })

  return <Layout location={location} />
}

export default ProductIndexPage
