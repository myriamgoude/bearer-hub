import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import { dashboardURL } from '../services/Dashboard'
import {
  Button,
  ButtonToDashboard,
  Clearfix,
  ColoredTextBlock,
  Grid,
  Card,
  HeroPanel,
  IntegrationPanel,
  Layout,
  LightCta,
  Link,
  Page,
  PageMetadata,
  Section,
  SectionHeading,
  Small,
  VideoSection
} from '../components/'

import heroStyles from '../components/HeroPanel/HeroPanel.style'
import { colors, breakpoints } from '../styles/variables'

// ** Temporarly removed **
//
// import logoDropbox from '../images/brands/dropbox.svg'
// import logoTwillio from '../images/brands/twilio.svg'
// import logoMailchimp from '../images/brands/mailchimp.svg'
// import logoGithub from '../images/brands/github.svg'
// import logoZendesk from '../images/brands/zendesk.svg'

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

interface IQueryData {
  graphcms: {
    templates: {
      id: string
      hubID: string
      title: string
      apiAuthType: string
      apiArchType: string
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
      templates(
        where: { status: PUBLISHED, provider: { id_not: null }, featured: true }
        orderBy: featuredOrder_ASC
        first: 4
      ) {
        id
        hubID
        title
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

const styleWhyUseBearerCardHeading = css`
  font-size: 1.5rem;
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
`

// const styleWhyUseBearerCardImage = css`
//   vertical-align: middle;
//   margin-right: 12px;
//   width: 38px;
//   height: 38px;
// `

// const whyUseBearerCardImage = (src: string, alt: string) => (
//   <img src={require(`../images/shared/${src}.svg`)} css={styleWhyUseBearerCardImage} alt={alt} />
// )

const IndexPage: GatsbyPage<IQueryData> = ({ data, location }) => (
  <Layout location={location}>
    <PageMetadata
      title="Bearer | The API Integration Framework"
      description="Bearer is an API integration framework and platform providing 
      all the tools to build, run and manage API Integrations."
    />
    <Page css={heroStyles.styleDefaultCurve}>
      <HeroPanel>
        <div className="hero-half">
          <h1
            css={css`
              color: ${colors.darkBlue};
            `}
          >
            The API Integration
            <Clearfix /> Framework
          </h1>
          <p
            css={css`
              font-size: 1.25rem;
            `}
          >
            Bearer provides all the tools to build, run and manage API integrations.
          </p>

          <LightCta
            text="Your app, your integration, your code"
            style={css`
              @media (max-width: ${breakpoints.lg}px) {
                justify-content: center !important;
              }
            `}
          />
          <br />
          <ButtonToDashboard primary link={dashboardURL()} text="Start building" />
          <br />
          <p>
            <Small>
              You can also{' '}
              <Link trackLink to="/integrations">
                explore our templates
              </Link>{' '}
              or check{' '}
              <Link to="https://docs.bearer.sh" trackLink>
                documentation
              </Link>
            </Small>
          </p>
        </div>

        <div
          className="hero-half"
          css={css`
            @media (max-width: ${breakpoints.lg}px) {
              display: none;
            }
          `}
        >
          <VideoSection
            thumbnail=""
            src="https://static.bearer.sh/hub/video/bearer-quickstart-20190423.mp4"
            size={{ width: 537, height: 378 }}
          />
        </div>
      </HeroPanel>

      {/* <Section>
        <SectionHeading primaryText="Our customers" />
        <Grid
          space="between"
          style={css`
            max-width: 568px;
            @media (max-width: ${breakpoints.lg}px) {
              flex-direction: row;
            }
          `}
          childrenStyle={css`
            @media (max-width: ${breakpoints.lg}px) {
              flex: 0 1 20% !important;
              padding: 8px 0;
            }
          `}
        >
          {[logoDropbox, logoTwillio, logoMailchimp, logoGithub, logoZendesk].map((logo, index) => {
            return <Pill key={index} logo={logo} />
          })}
        </Grid>
      </Section> */}

      <div style={{ height: '2rem' }} />

      <Section withTail background="transparent">
        <Grid
          style={css`
            margin-top: 7rem;
          `}
          childrenStyle={css`
            @media (max-width: ${breakpoints.lg}px) {
              margin-bottom: 6rem;
            }
          `}
          fullWidth
        >
          {[
            {
              title: 'Consume any API in minutes',
              text:
                'Our framework provides all the tools you need, including out-of-the-box \
                API client configuration and authentication (OAuth, etc.).',
              iconBg: greenSplash,
              icon: iconRabbit,
              color: colors.green
            },
            {
              title: 'Map API endpoints to your app model',
              text: 'Create functions to query, transform and re-expose APIs according to your app model.',
              iconBg: orangeSplash,
              icon: iconGlobe,
              color: colors.orange
            },
            {
              title: 'Integrate into your code with one line',
              text:
                'Directly call your functions using integration clients \
                (NodeJS, Ruby, JavaScript, React, etc.) and keep your code base clean and tidy.',
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
            @media (max-width: ${breakpoints.lg}px) {
              margin-top: 0;
              margin-bottom: 5rem;
            }
          `}
          childrenStyle={css`
            @media (max-width: ${breakpoints.lg}px) {
              margin-bottom: 6rem;
              &:last-of-type {
                margin-bottom: 0;
              }
            }
          `}
          fullWidth
        >
          {[
            {
              title: 'Deploy and Scale without fuss',
              text:
                'Deploy your integrations on our platform with one command, \
              and let us scale it infinitely.',
              iconBg: purpleSplash,
              icon: iconLinked,
              color: colors.purple
            },
            {
              title: 'Monitor every API call',
              text:
                'Log and monitor every API call from your integrations, \
                so you can always check what’s going on behind the scenes.',
              iconBg: blueSplash,
              icon: iconMonitor,
              color: colors.blue
            },
            {
              title: 'Manage your integrations',
              text:
                'Bearer’s Dashboard gives you a complete overview, \
                and lets you manage everything about your integrations from API keys to webhooks.',
              iconBg: yellowSplash,
              icon: iconCog,
              color: colors.yellow
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
          className="mt-32"
        >
          <Button text="Product features" link="/product" trackLink />
        </div>
      </Section>

      <Section
        withTail
        css={css`
          @media (max-width: ${breakpoints.md}px) {
            margin-top: 4rem;
          }
        `}
      >
        <SectionHeading primaryText="Featured integration templates" />
        <IntegrationPanel templates={data.graphcms.templates} />
        <div
          css={[
            css`
              text-align: center;
            `
          ]}
          className="mt-32"
        >
          <Button
            title="API integrations templates"
            trackLink
            text="Explore templates"
            link="/integrations"
            className="mt-16 mb-16"
          />
        </div>
      </Section>

      <Section
        withTail
        css={css`
          @media (max-width: ${breakpoints.md}px) {
            margin-top: 4rem;
          }
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
            @media (max-width: ${breakpoints.lg}px) {
              display: block;
            }
            background: url(${require('../images/shared/yellow-circle.svg')}) no-repeat center top / 560px;
          `}
          childrenStyle={css`
            margin-bottom: 16px;

            @media (min-width: ${breakpoints.md}px) {
              max-width: 320px;
            }
            @media (max-width: ${breakpoints.lg}px) {
              max-width: 100% !important;
              width: 100% !important;
              text-align: left;
              flex-direction: column;
            }
          `}
        >
          <Card style={{ padding: '2.5rem' }} padding="large">
            <h3 css={styleWhyUseBearerCardHeading}>
              <span>Don’t waste your engineering resources</span>
            </h3>
            <p>
              Building and maintaining API integrations is tedious, and often wastes precious engineering resources on
              low-value-added tasks.
            </p>
            <p>With Bearer, your engineers can focus on your integration business logic.</p>
          </Card>
          <Card
            style={css`
              padding: 2.5rem;
              @media (min-width: ${breakpoints.md}px) {
                margin-top: 200px;
              }
            `}
            padding="large"
          >
            <h3 css={styleWhyUseBearerCardHeading}>
              <span>Say goodbye to integration’s technical debt</span>
            </h3>
            <p>Bearer enforces industry best practices by design.</p>
            <p>
              It shields your application and business logic from the integration glue code, helping you keep your code
              base neat and tidy.
            </p>
          </Card>
          <Card
            style={css`
              padding: 2.5rem;
              @media (min-width: ${breakpoints.md}px) {
                margin-top: 48px;
              }
            `}
            padding="large"
          >
            <h3 css={styleWhyUseBearerCardHeading}>
              <span>Scale your integration roadmap</span>
            </h3>
            <p>
              Bearer makes it possible to build more integrations by reducing the time, money and expertise you need to
              expand.
            </p>
            <p>
              Not only that, you can also easily externalize some integrations without compromising on quality and
              security!
            </p>
          </Card>
        </Grid>
      </Section>
    </Page>
  </Layout>
)
export default IndexPage
