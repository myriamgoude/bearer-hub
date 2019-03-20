import * as React from 'react'
import { graphql } from 'gatsby'

import { Clearfix, Page, PageMetadata, HeroLined, Text, Section } from '../components/index'
import IndexLayout from '../layouts'
import styles from '../styles/helpers'
import css from '@emotion/css'

interface IQueryData {
  markdownRemark: {
    html: string
    excerpt: string
    frontmatter: {
      title: string
      description: string | null
      image: string | null
    }
  }
}

const SimpleTemplate: GatsbyPage<IQueryData> = ({ data, location }) => (
  <IndexLayout location={location}>
    <PageMetadata {...data.markdownRemark.frontmatter} />
    <Page>
      <HeroLined
        style={css`
          height: 400px;
        `}
      >
        <Text tag="h1" text={data.markdownRemark.frontmatter.title} />
        <Clearfix />
        <Text tag="h3" text={data.markdownRemark.frontmatter.description} />
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
        description
        image
      }
    }
  }
`
