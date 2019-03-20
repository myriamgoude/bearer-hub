import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import { Page, PageMetadata, HeroLined, Text, Section } from '../components/index'
import IndexLayout from '../layouts'

import styles from '../styles/helpers'

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
      <HeroLined
        style={css`
          height: 400px;
        `}
      >
        <Text tag="h1" text={data.iubendaDocument.title} />
      </HeroLined>
      <Section>
        <div dangerouslySetInnerHTML={{ __html: data.iubendaDocument.content }} css={styles.markdownPages} />
      </Section>
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
