import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page'
import PageMetadata from '../components/PageMetadata'

import IndexLayout from '../layouts'

const StyledContainer = styled.div`
  h1 {
    text-align: center;
  }
`

interface IQueryData {
  iubendaDocument: {
    title: string
    content: string
  }
}

const IubendaTemplate: GatsbyPage<IQueryData> = ({ data, location }) => (
  <IndexLayout location={location}>
    <PageMetadata title={data.iubendaDocument.title} />
    <Page>
      <StyledContainer>
        <div dangerouslySetInnerHTML={{ __html: data.iubendaDocument.content }} />
      </StyledContainer>
    </Page>
  </IndexLayout>
)

export default IubendaTemplate

export const query = graphql`
  query IubendaTemplateQuery($id: String!) {
    iubendaDocument(id: { eq: $id }) {
      title
      content
    }
  }
`
