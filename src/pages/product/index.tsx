import * as React from 'react'
import { navigate } from 'gatsby'
import { Layout, PageMetadata } from '../../components/index'

const ProductIndexPage: GatsbyPage = ({ location }) => {
  React.useEffect(() => {
    navigate('/product/framework', { replace: true })
  })

  return (
    <Layout location={location}>
      <PageMetadata
        title="Bearer | Product Features"
        description="Dig into our product features to discover how to build API integrations faster with the Bearer
      framework, manage API authentication, map data easily, integrate into your app in one line of code and more."
      />
    </Layout>
  )
}

export default ProductIndexPage
