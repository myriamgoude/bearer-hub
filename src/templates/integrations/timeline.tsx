import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import {
  Button,
  ButtonToDashboard,
  HeroPanel,
  IntegrationPanel,
  Layout,
  Link,
  Page,
  PageMetadata,
  Section,
  SectionHeading,
  TimelineOnBearer,
  TimelineHeading,
  TimelineMyApp,
  TimelinePlacement
} from '../../components/index'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'
import { colors } from '../../styles/variables'

interface ITemplateData {
  id: string
  hubID: string
  title: string
  gitHubUrl: string
  defaultFunctionName: string
  defaultFunctionCode: string
  defaultFunctionReturnValue: string
  apiAuthType: string
  oauthScopes?: any
  apiArchType: string
  apiCredentialsUrl: string
  provider: {
    hubID: string
    title: string
    description: string
    color: string
    image: {
      url: string
    }
  }
}

interface IFeaturedTemplateData {
  id: string
  hubID: string
  title: string
  apiAuthType: string
  apiArchType: string
  categories: { title: string }[]
  provider: {
    hubID: string
    title: string
    image: {
      url: string
    }
  }
}
interface IQueryData {
  graphcms: {
    templates: ITemplateData[]
    featuredTemplates: IFeaturedTemplateData[]
  }
}

export const query = graphql`
  query ExplorePresentQuery($id: ID!) {
    graphcms {
      templates(where: { id: $id }, first: 1) {
        id
        hubID
        title
        gitHubUrl
        defaultFunctionName
        defaultFunctionCode
        defaultFunctionReturnValue
        apiAuthType
        oauthScopes
        apiArchType
        apiCredentialsUrl
        featured
        featuredOrder
        provider {
          hubID
          title
          description
          color
          image {
            url
          }
        }
      }

      featuredTemplates: templates(
        where: { id_not: $id, status: PUBLISHED, provider: { id_not: null }, featured: true }
        orderBy: featuredOrder_ASC
        first: 4
      ) {
        id
        hubID
        title
        featured
        apiAuthType
        apiArchType
        provider {
          hubID
          title
          image {
            url
          }
        }
      }
    }
  }
`

const PresentTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const template = data.graphcms.templates[0]
  const featuredTemplates = data.graphcms.featuredTemplates
  const placement = TimelinePlacement()
  return (
    <Layout location={location}>
      <PageMetadata
        title={`Build your own ${template.provider.title} API Integration with Bearer`}
        description={`Pick this template and start building your own 
        ${template.provider.title} API integration in minutes using the Bearer Framework.`}
      />
      <Page css={[heroStyles.styleDefaultCurve]}>
        <HeroPanel>
          <TimelineHeading
            providerName={template.provider.title}
            providerDescription={template.provider.description}
            providerColor={template.provider.color || colors.primary[0]}
            templateHubId={template.hubID}
            templateApiAuthType={template.apiAuthType}
            templateTitle={template.title}
          />
        </HeroPanel>
        <Section>
          <div
            css={css`
              position: absolute;
              width: 2px;
              height: 100%;
              background: ${colors.yellow};
              left: 0;
              right: 0;
              margin: auto;
            `}
          />
          <div
            css={css`
              border-bottom: 2px solid ${colors.yellow};
              max-width: 380px;
              width: 100%;
              margin: auto;
              margin-bottom: 3rem;
              background: ${colors.lightGrey};
              position: relative;
              z-index: 5;
            `}
          >
            <SectionHeading
              primaryText={`As a developer, I want to build an integration on ${template.provider.title}`}
              tag="h3"
              css={css`
                & > h3 {
                   margin: 5rem 0 0 0;
                }
              `}
            />
          </div>
        </Section>

        <TimelineOnBearer template={template} placement={placement} />
        <TimelineMyApp template={template} placement={placement} />
        {/*
          Uncomment this if the timeline returns a video

          <VideoSection thumbnail="<thumbnail>" src={require('../../videos/hero_landing_5.mp4')} /> */}

        <Section
          css={css`
            padding: 0;
            margin: 2rem 0;
            text-align: center;
            background: url(${require('../../images/shared/yellow-splash.svg')}) no-repeat center center / 122px;
          `}
        >
          <ButtonToDashboard
            primary
            callToAction
            link={`${process.env.GATSBY_BEARER_DASHBOARD_SETUP_URL}${template.hubID}`}
            trackLink
            trackingAction="embed-template"
            trackingOptions={{
              category: 'Template',
              label: template.hubID
            }}
            text="Start building"
          />
          <p style={{ marginTop: '1.25rem' }}>
            or read the{' '}
            <Link trackLink to="https://docs.bearer.sh">
              documentation
            </Link>
          </p>
        </Section>

        <Section withTail>
          <div
            css={css`
              background-image: url(${require('../../images/shared/yellow-splash.svg')}),
                url(${require('../../images/shared/gradient-splash.svg')});
              background-position: top 100px right 148px, bottom 60px left 162px;
              background-repeat: no-repeat;
              padding: 0;
              text-align: center;
            `}
          >
            <SectionHeading
              primaryText="Featured Templates"
              tag="h2"
              style={css`
                & > h2 { margin: 2rem 0; }
              `}
            />
            <IntegrationPanel templates={featuredTemplates} />
            <div
              css={[
                css`
                  text-align: center;
                  margin-top: 2rem;
                `
              ]}
            >
              <Button trackLink text="Explore templates" link="/integrations" />
            </div>
          </div>
        </Section>
      </Page>
    </Layout>
  )
}

export default PresentTemplate
