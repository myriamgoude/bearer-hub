import * as React from 'react'
import { graphql } from 'gatsby'

import { HeroLined, Layout, Page, PageMetadata, Section, Text } from '../components/index'

import styles from '../styles/helpers'

interface IQueryData {
  iubendaDocument: {
    title: string
    content: string
  }
}

const IubendaTemplate: GatsbyPage<IQueryData> = ({ data, location }) => (
  <Layout location={location}>
    <PageMetadata title={data.iubendaDocument.title} />
    <Page>
      <HeroLined>
        <Text tag="h1" text={data.iubendaDocument.title} />
      </HeroLined>
      <Section>
        <div dangerouslySetInnerHTML={{ __html: data.iubendaDocument.content }} css={styles.markdownPages} />
      </Section>
    </Page>
  </Layout>
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
