import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import {
  Button,
  IntegrationPanel,
  Link,
  HeroPanel,
  Page,
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

interface IQueryData {
  graphcms: {
    templates: {
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
      featured: boolean
      featuredOrder: number
      provider: {
        hubID: string
        title: string
        description: string
        mainColor: string
        image: {
          url: string
        }
      }
    }[]
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
  const placement = TimelinePlacement()
  const prism = false
  return (
    <IndexLayout location={location}>
      <Page css={[heroStyles.styleDefaultCurve]}>
        <HeroPanel>
          <TimelineHeading
            providerName={template.provider.title}
            providerDescription={template.provider.description}
            providerColor={template.provider.mainColor || colors.primary[0]}
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
              primaryText={`As a developer, I want to build an Integration on ${template.provider.title}`}
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
            <Link trackLink to="https://docs.bearer.sh">
              or read the documentation
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
            <SectionHeading primaryText={`Related Templates`} tag="h2" />
            <IntegrationPanel integrations={data.graphcms.templates} />
            <Button primary link={`/integrations`} trackLink text="Explore Templates" />
          </div>
        </Section>
      </Page>
    </IndexLayout>
  )
}

export default PresentTemplate
