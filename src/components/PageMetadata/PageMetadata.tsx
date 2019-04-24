/*
  Helper compoment for pages to set common meta
*/
import * as React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

interface IPageMetadataProps {
  title: string
  description?: string | null
  image?: string | null
}

interface IPageMetadataTagsProps extends IPageMetadataProps {
  siteUrl: string
}
const query = graphql`
  query SiteMetaUrl {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
export const PageMetadataTags: React.FunctionComponent<IPageMetadataTagsProps> = ({
  title,
  description,
  image,
  siteUrl
}) => {
  const allDescriptions = description
    ? [{ name: 'description', content: description }, { name: 'twitter:description', content: description }]
    : []

  const fullQualifiedImage = `${siteUrl}${image}`
  const allImages = image ? [{ name: 'twitter:image', content: fullQualifiedImage }] : []

  const allTitles = [{ name: 'twitter:title', content: title }]
  return (
    <Helmet title={title} meta={[...allTitles, ...allDescriptions, ...allImages]}>
      <meta property="og:title" content={title} />
      {description ? <meta property="og:description" content={description} /> : null}
      {image ? <meta property="og:image" content={fullQualifiedImage} /> : null}
    </Helmet>
  )
}

const PageMetadata: React.SFC<IPageMetadataProps> = ({ title, description, image }) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: { siteUrl }
        }
      }) => {
        return <PageMetadataTags title={title} description={description} siteUrl={siteUrl} image={image} />
      }}
    />
  )
}
export default PageMetadata
