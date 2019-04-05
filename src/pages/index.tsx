import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import {
  Button,
  Card,
  Clearfix,
  ColoredTextBlock,
  Grid,
  HeroPanel,
  IntegrationPanel,
  Link,
  Page,
  Pill,
  Section,
  SectionHeading,
  Small,
  VideoSection
} from '../components/'
import IndexLayout from '../layouts'

import placeholderHeroImage from '../images/hero-illustration.svg'

import logoDropbox from '../images/brands/dropbox.svg'
import logoTwillio from '../images/brands/twilio.svg'
import logoMailchimp from '../images/brands/mailchimp.svg'
import logoGithub from '../images/brands/github.svg'
import logoZendesk from '../images/brands/zendesk.svg'

import greenSplash from '../images/shared/splash-green.svg'
import orangeSplash from '../images/shared/splash-orange.svg'
import blueSplash from '../images/shared/splash-blue.svg'
import lightblueSplash from '../images/shared/splash-lightblue.svg'
import purpleSplash from '../images/shared/splash-purple.svg'
import yellowSplash from '../images/shared/splash-yellow.svg'

import iconRabbit from '../images/shared/icon-rabbit.svg'
import iconGlobe from '../images/shared/icon-globe.svg'
import iconMonitor from '../images/shared/icon-monitor.svg'
import iconShippet from '../images/shared/icon-shippet.svg'
import iconLinked from '../images/shared/icon-linked.svg'
import iconCog from '../images/shared/icon-cog.svg'

import heroStyles from '../components/HeroPanel/HeroPanel.style'

import { colors, breakpoints } from '../styles/variables'

interface IQueryData {
  graphcms: {
    integrations: {
      id: string
      hubID: string
      title: string
      description: string
      featured: boolean
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
  query IndexPageQuery {
    graphcms {
      integrations(
        where: {
          status: PUBLISHED
          featured: true
          provider: { id_not: null }
          timeline: { timelineStages_some: { id_not: null, displayOnHub: true } }
        }
      ) {
        id
        hubID
        title
        description
        featured
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

const styleWaveBg = css`
  background-image: url(${require('../images/homepage-waves-2.svg')});
  background-repeat: no-repeat;
  background-position: center;
`

const styleWhyUseBearerCardHeading = css`
  font-size: 1.5rem;
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
`

const styleWhyUseBearerCardImage = css`
  vertical-align: middle;
  margin-right: 12px;
  width: 38px;
  height: 38px;
`

const whyUseBearerCardImage = (src: string, alt: string) => (
  <img src={require(`../images/shared/${src}.svg`)} css={styleWhyUseBearerCardImage} alt={alt} />
)

const IndexPage: GatsbyPage<IQueryData> = ({ data, location }) => (
  <IndexLayout location={location}>
    <Page>
      <div css={heroStyles.styleBackgroundHome}>
        <HeroPanel
          punchline="Your app, your Integration, your Code!"
          title={
            <>
              <h1
                css={css`
                  color: ${colors.darkBlue};
                `}
              >
                The API Integration
                <Clearfix /> Framework
              </h1>
            </>
          }
          image={placeholderHeroImage}
        >
          <p
            css={css`
              margin: 1.5rem 0 2rem 0;
              padding: 0;
              font-size: 1.5rem;
            `}
          >
            Bearer provides all the tooling to build, run and manage API Integrations.
          </p>

          <Button primary trackLink link="/integrations" text="Start building" />
          <br />
          <Small>
            You can also <Link to="/integrations">explore templates</Link> or check{' '}
            <Link to="https://docs.bearer.sh">documentation</Link>
          </Small>
        </HeroPanel>
      </div>

      <Section>
        <SectionHeading primaryText="Our customers" />
        <Grid
          space="between"
          style={css`
            max-width: 568px;
          `}
        >
          {[logoDropbox, logoTwillio, logoMailchimp, logoGithub, logoZendesk].map((logo, index) => {
            return <Pill key={index} logo={logo} />
          })}
        </Grid>
      </Section>

      <div css={styleWaveBg}>
        <Section withTail>
          <SectionHeading primaryText="Build any API Integrations in minutes" />
          <div
            css={css`
              margin-bottom: 3rem;
              text-align: center;
              position: relative;
              z-index: 5;
            `}
          >
            <VideoSection
              thumbnail=""
              src=""
              button={
                <Button
                  trackLink
                  link="https://docs.bearer.sh/"
                  secondary
                  text={'Documentation'}
                  css={css`
                    margin-top: -1rem;
                    display: inline-block;
                  `}
                />
              }
            />
          </div>
        </Section>
      </div>

      <Section withTail background="transparent">
        <Grid
          style={css`
            margin-top: 7rem;
          `}
          fullWidth
        >
          {[
            {
              title: 'Consume any API in minutes',
              text:
                'Our Framework provides all the tooling you need including \
                out-of-the-box API Client configuration and authentication (OAuth etc.).',
              iconBg: greenSplash,
              icon: iconRabbit,
              color: colors.green
            },
            {
              title: 'Map API endpoints to your App model',
              text:
                'Create Functions to query, transform and re-expose APIs \
                according to your App model. ',
              iconBg: orangeSplash,
              icon: iconGlobe,
              color: colors.orange
            },
            {
              title: 'Integrate into your code with 1 line',
              text:
                'Directly call your Functions using Integration Clients \
                (NodeJS, Ruby, Javascript, React etc.), and keep your code base clean.',
              iconBg: lightblueSplash,
              icon: iconShippet,
              color: '#6679CB'
            }
          ].map((textBlock, index) => (
            <ColoredTextBlock
              key={index}
              title={textBlock.title}
              icon={textBlock.icon}
              iconBg={textBlock.iconBg}
              text={textBlock.text}
              color={textBlock.color}
            />
          ))}
        </Grid>
        <Grid
          style={css`
            margin-top: 7rem;
          `}
          fullWidth
        >
          {[
            {
              title: 'Deploy & Scale without hassles',
              text:
                'Deploy your Integration on our Platform with one command \
                and let us scale it infinitely.',
              iconBg: purpleSplash,
              icon: iconLinked,
              color: '#C600A3'
            },
            {
              title: 'Monitor every API call',
              text:
                'Our Platform logs and monitors every API call your Integration \
                performs so you know what happens behind the scene.',
              iconBg: blueSplash,
              icon: iconMonitor,
              color: colors.blue
            },
            {
              title: 'Manage your Integrations',
              text:
                'Bearer Dashboard let you manage everything about your Integrations, \
                from API keys to Webhooks and gives you a complete overview.',
              iconBg: yellowSplash,
              icon: iconCog,
              color: '#E9B300'
            }
          ].map((textBlock, index) => (
            <ColoredTextBlock
              key={index}
              title={textBlock.title}
              icon={textBlock.icon}
              iconBg={textBlock.iconBg}
              text={textBlock.text}
              color={textBlock.color}
            />
          ))}
        </Grid>
        <div
          css={css`
            text-align: center;
          `}
          className="mt-32 mb-64"
        >
          <Button text="Product features" link="/product" />
        </div>
      </Section>

      <Section withTail>
        <SectionHeading primaryText="Featured Integrations Templates" />
        <IntegrationPanel integrations={data.graphcms.integrations} />
        <div
          css={[
            css`
              text-align: center;
              margin-top: 2.375rem;
            `
          ]}
        >
          <Button trackLink text="Explore Templates" link="/integrations" className="mt-16 mb-16" />
        </div>
      </Section>

      <Section
        withTail
        css={css`
          margin-bottom: 7.5em;
        `}
      >
        <SectionHeading primaryText="Why use Bearer?" />
        <Grid
          space="around"
          gutter={32}
          fullWidth
          style={css`
            @media (min-width: ${breakpoints.md}px) {
              margin-top: 5rem;
              justify-content: space-between !important;
            }
            background: url(${require('../images/shared/yellow-circle.svg')}) no-repeat center top / 560px;
          `}
          childrenStyle={css`
            margin-bottom: 16px;

            @media (min-width: ${breakpoints.md}px) {
              max-width: 320px;
              margin-bottom: 0;
            }
          `}
        >
          <Card style={{ padding: '40px' }} padding="large">
            <h3 css={styleWhyUseBearerCardHeading}>
              {whyUseBearerCardImage('icon-magnet', 'Icon Magnet')}
              <span>More Integration</span>
            </h3>
            <p>Building API Integration is tedious, time-consuming and costly. </p>
            <p>With Bearer, build Integration faster and focus on your Business logic instead of glue code. </p>
            <p>Build more & better Integration.</p>
          </Card>
          <Card
            style={css`
              padding: 40px;
              @media (min-width: ${breakpoints.md}px) {
                margin-top: 200px;
              }
            `}
            padding="large"
          >
            <h3 css={styleWhyUseBearerCardHeading}>
              {whyUseBearerCardImage('icon-graph-yellow', 'Icon graph')}
              <span>Managed Integration</span>
            </h3>
            <p>APIs always fail so do Integration, we all know it. </p>
            <p>
              By providing a dedicated Platform to run them, Bearer helps you better understand what’s happening and
              reduce maintenance cost.
            </p>
          </Card>
          <Card
            style={css`
              padding: 40px;
              @media (min-width: ${breakpoints.md}px) {
                margin-top: 50px;
              }
            `}
            padding="large"
          >
            <h3 css={styleWhyUseBearerCardHeading}>
              {whyUseBearerCardImage('icon-globe-yellow', 'Icon Globe')}
              <span>Enforcing Best Practices</span>
            </h3>
            <p>Shielding your App from APIs helps keep your codebase clean and maintainable.</p>
            <p>Add, Update or Remove Integration without impacting your Business or adding legacy code.</p>
          </Card>
        </Grid>
      </Section>
    </Page>
  </IndexLayout>
)
export default IndexPage
