/*
  NB: This component sets default metadata individual templates/pages can override this
*/

import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

interface ISiteMetadataProps {
  pathname: string
}

const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        siteUrl
        title
        twitter
        description
      }
    }
  }
`
interface IDefaultMetaProps {
  title: string
  canonical: string
  twitter: string
  image: string
  description: string
}

// export this so we can test it with a shallow mount
// NB: Full mount is required to mock the query but helmet will not return anything
// in a full mount as it edits the header!
export const DefaultMeta: React.SFC<IDefaultMetaProps> = ({ title, canonical, image, twitter, description }) => (
  <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
    <html lang="en" />
    <link rel="canonical" href={canonical} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:site" content={twitter} />

    <meta property="og:site_name" content={title} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Helmet>
)

const SiteMetadata = ({ pathname }: ISiteMetadataProps) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { siteUrl, title, twitter, description }
      }
    }) => {
      const meta = {
        siteUrl,
        title,
        twitter,
        description,
        image: 'https://www.bearer.sh/static/media/slack-notification-full-size.29ef4908.png',
        canonical: `${siteUrl}${pathname}`
      }
      return <DefaultMeta {...meta} />
    }}
  />
)

export default SiteMetadata
