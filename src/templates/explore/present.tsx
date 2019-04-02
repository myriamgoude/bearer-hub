import * as React from 'react'
import Markdown from 'react-markdown'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  BearerTimeline,
  Button,
  HeroPanel,
  IntegrationPanel,
  MyAppTimeline,
  Page,
  PageHeading,
  Section,
  SectionHeading
} from '../../components/index'
import IndexLayout from '../../layouts'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'
import { getEmSize } from '../../styles/mixins'
import { colors, dimensions } from '../../styles/variables'

interface IQueryData {
  graphcms: {
    templates: {
      id: string
      hubID: string
      gitHubUrl: string
      defaultFunctionName: string
      defaultFunctionCode: string
      defaultFunctionReturnValue: string
      apiAuthType: string
      oauthScopes?: any
      apiArchType: string
      mdDescription: string
      featured: boolean
      featuredOrder: number
      provider: {
        hubID: string
        title: string
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
        gitHubUrl
        defaultFunctionName
        defaultFunctionCode
        defaultFunctionReturnValue
        apiAuthType
        oauthScopes
        apiArchType
        mdDescription
        featured
        featuredOrder
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

const StyledMarkDown = styled(Markdown)`
  margin: 24px 0 32px;

  & ul {
    padding: 0;
    margin: 32px 0;
    text-align: center;
  }
  & li {
    display: list-item;
    list-style-position: inside;
  }

  & p {
    color: ${colors.darkBlue};
    font-size: ${getEmSize(dimensions.fontSize.large)};
    display: inline;
  }
`

const PresentTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const template = data.graphcms.templates[0]

  return (
    <IndexLayout location={location}>
      <Page>
        <div
          css={[
            css`
              position: relative;
              text-align: center;
              background-image: radial-gradient(circle at 62% 40%, #f6faff, #f6faff 1%, #f0f2fc);
            `,
            heroStyles.curvedSection
          ]}
        >
          <HeroPanel
            title={
              <PageHeading
                primaryText={`Quickly build a ${template.provider.title} API Integration using Bearer Framework`}
                style={css`
                  max-width: 700px;
                  margin: auto;
                `}
              />
            }
            paddingBottom={true}
            style={{ paddingBottom: '2.5vw', zIndex: 90 }}
          >
            <div>
              <ul>
                <li>Don't spend time understanding {template.provider.title} API mechanism</li>
                <li>Use a pre-configured API Client and {template.apiAuthType} implementation</li>
                <li>Consume &amp; transform {template.provider.title} API data with simple functions</li>
                <li>Host &amp; scale your Integration for free on our platform</li>
                <li>Log &amp; monitor every call to the {template.provider.title} API out-of-the-box</li>
                <li>Integration in seconds into your App with our SDKs</li>
              </ul>
            </div>
            <StyledMarkDown source={template.mdDescription} escapeHtml={false} className="markdown-header" />

            <div>
              <Button
                primary
                link={`${process.env.GATSBY_BEARER_DASHBOARD_SETUP_URL}${template.hubID}`}
                trackLink
                trackingAction="embed-integration"
                trackingOptions={{
                  category: 'Integration',
                  label: template.hubID
                }}
                text="Get started"
              />
              <Button secondary link="/how-it-works" text="Documentation" />
              <Button secondary link="#" text="Explore product" />
            </div>
          </HeroPanel>
        </div>
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
              margin-bottom: 120px;
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

        <BearerTimeline template={template} />

        <MyAppTimeline template={template} />

        {/*
          Uncomment this if the timeline returns a video

          <VideoSection thumbnail="<thumbnail>" src={require('../../videos/hero_landing_5.mp4')} /> */}

        <Section
          css={css`
            margin: 40px 0 120px;
            text-align: center;
            background: url(${require('../../images/shared/yellow-splash.svg')}) no-repeat center center / 122px;
          `}
        >
          <Button
            primary
            link={`${process.env.GATSBY_BEARER_DASHBOARD_SETUP_URL}${template.hubID}`}
            trackLink
            trackingAction="embed-integration"
            trackingOptions={{
              category: 'Integration',
              label: template.hubID
            }}
            text="Get started"
          />
          <Button secondary text="See the documentation" link={'#'} />
        </Section>

        <Section withTail>
          <div
            css={css`
              background-image: url(${require('../../images/shared/yellow-splash.svg')}),
                url(${require('../../images/shared/gradient-splash.svg')});
              background-position: top right 148px, bottom left 162px;
              background-repeat: no-repeat;
              padding: 2em 0;
              text-align: center;
            `}
          >
            <SectionHeading primaryText={`Other Templates`} tag="h5" />
            <IntegrationPanel integrations={data.graphcms.templates} />
            <Button primary link={`/explore`} trackLink text="Explore templates" />
          </div>
        </Section>
      </Page>
    </IndexLayout>
  )
}

export default PresentTemplate
