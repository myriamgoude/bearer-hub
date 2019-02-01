import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page'
import IndexLayout from '../layouts'

const StyledContainer = styled.div`
  h1 {
    text-align: center;
  }
`

interface SimpleTemplateProps {
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const SimpleTemplate: React.SFC<SimpleTemplateProps> = ({ data }) => (
  <IndexLayout>
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
      }
    }
  }
`
