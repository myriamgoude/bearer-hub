import * as React from 'react'
import { graphql } from 'gatsby'

import { Clearfix, Page, PageMetadata, HeroLined, Text, Section } from '../components/index'
import IndexLayout from '../layouts'
import styles from '../styles/helpers'

interface IQueryData {
  markdownRemark: {
    html: string
    excerpt: string
    frontmatter: {
      title: string
    }
  }
}

const SimpleTemplate: GatsbyPage<IQueryData> = ({ data, location }) => (
  <IndexLayout location={location}>
    <PageMetadata {...data.markdownRemark.frontmatter} />
    <Page>
      <HeroLined>
        <Text tag="h1" text={data.markdownRemark.frontmatter.title} />
        <Clearfix />
      </HeroLined>
      <Section>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} css={styles.markdownPages} />
      </Section>
    </Page>
  </IndexLayout>
)

export default SimpleTemplate

export const query = graphql`
  query SimpleTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
