import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page/Page'
import PageMetadata from '../components/PageMetadata/PageMetadata'
import IndexLayout from '../layouts'

const StyledContainer = styled.div`
  h1 {
    text-align: center;
  }
`

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
      <StyledContainer>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </StyledContainer>
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
