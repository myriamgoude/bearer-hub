import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import IndexLayout from '../../layouts'
import {
  Clearfix,
  Grid,
  Button,
  SectionHeading,
  HeroLined,
  Page,
  PageMetadata,
  Section,
  Search,
  Text
} from '../../components/index'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'
import { InstantSearch } from 'react-instantsearch-dom'

import { SearchList } from '../../components/Search/components/SearchList'

import { colors } from '../../styles/variables'

interface IQueryData {
  graphcms: {
    defaultProvider: {
      id: string
      uuid: string
      title: string
    }[]
    categories: {
      id: string
      uuid: string
      title: string
    }[]
    providers: {
      id: string
      uuid: string
      title: string
    }[]
  }
}

export const query = graphql`
  query ExploreProviderQuery($id: ID!) {
    graphcms {
      defaultProvider: providers(where: { id: $id }, first: 1) {
        id
        uuid
        title
      }
      ...scopedCategories
      ...scopedProviders
    }
  }
`

const ExploreProviderTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const provider = data.graphcms.defaultProvider[0]

  return (
    <IndexLayout location={location}>
      <Page>
        <PageMetadata title={provider.title} description={`Explore ${provider.title} Integrations`} />
        <InstantSearch
          appId={`${process.env.GATSBY_ALGOLIA_APP_ID}`}
          apiKey={`${process.env.GATSBY_ALGOLIA_SEARCH_API_KEY}`}
          indexName={`${process.env.GATSBY_ALGOLIA_INDEX_NAME}`}
        >
          <div css={heroStyles.styleBackgroundExplore}>
            <HeroLined>
              <Text tag="h1" text={`Explore ${provider.title} integrations`} />
              <Clearfix />
              <Text tag="h3" text="Over 30 Native Integrations for your App" />
            </HeroLined>
          </div>
          <Section
            styleContainer={css`
              display: flex;
            `}
          >
            <div
              css={css`
                flex: 0 1 30%;
                padding-right: 58px;
              `}
            >
              <SearchList
                selected={provider.id}
                categories={data.graphcms.categories}
                providers={data.graphcms.providers}
              />
            </div>
            <div
              css={css`
                flex: 0 1 70%;
              `}
            >
              <Search defaultProvider={provider.title} />

              <Grid
                style={css`
                  align-items: center;
                  padding: 80px 0;
                `}
                childrenStyle={css`
                  flex: 0 1 auto !important;
                `}
              >
                <SectionHeading
                  primaryText="Some ideas to share?"
                  css={css`
                    margin-bottom: 0;
                  `}
                />
                <span
                  css={css`
                    display: block;
                    height: 2px;
                    width: 232px;
                    background: ${colors.yellow};
                  `}
                />
                <Button primary link="#" text="Share ideas" />
              </Grid>
            </div>
          </Section>
        </InstantSearch>
      </Page>
    </IndexLayout>
  )
}

export default ExploreProviderTemplate
