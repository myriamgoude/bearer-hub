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

interface IubendaTemplateProps {
  data: {
    iubendaDocument: {
      title: string
      content: string
    }
  }
}

const IubendaTemplate: React.SFC<IubendaTemplateProps> = ({ data }) => (
  <IndexLayout>
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
