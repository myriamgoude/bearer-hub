import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import {
  Button,
  IntegrationPanel,
  Link,
  HeroPanel,
  Page,
  PageMetadata,
  TimelineOnBearer,
  TimelineHeading,
  TimelineMyApp,
  TimelinePlacement,
  Section,
  SectionHeading
} from '../../components/index'
import IndexLayout from '../../layouts'
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
  const prism = false
  return (
    <IndexLayout location={location}>
      <PageMetadata
        title={`Build your ${template.provider.title} API Integrations with Bearer`}
        description={`Pick the this template and start building your
        ${template.provider.title} API Integration in minutes using Bearer Framework.`}
        image={`template-${template.provider.title}.jpg`}
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
              border-bottom: 3px solid ${colors.yellow};
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
              tag="h5"
            />
          </div>
        </Section>

        <TimelineOnBearer template={template} placement={placement} prism={prism} />
        <TimelineMyApp template={template} placement={placement} prism={prism} />

        {/*
          Uncomment this if the timeline returns a video

          <VideoSection thumbnail="<thumbnail>" src={require('../../videos/hero_landing_5.mp4')} /> */}

        <Section
          css={css`
            margin: 3rem 0;
            text-align: center;
            background: url(${require('../../images/shared/yellow-splash.svg')}) no-repeat center center / 122px;
          `}
        >
          <Button
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
              background-position: top right 148px, bottom left 162px;
              background-repeat: no-repeat;
              padding: 2rem 0;
              text-align: center;
            `}
          >
            <SectionHeading primaryText={`Featured Templates`} tag="h2" />
            <IntegrationPanel templates={featuredTemplates} />
            <div
              css={[
                css`
                  text-align: center;
                  margin-top: 2.375rem;
                `
              ]}
            >
              <Button trackLink text="Explore templates" link="/integrations" className="mt-16 mb-16" />
            </div>
          </div>
        </Section>
      </Page>
    </IndexLayout>
  )
}

export default PresentTemplate
