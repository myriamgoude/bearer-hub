import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import {
  Button,
  Card,
  Clearfix,
  CodeExamples,
  ColoredTextBlock,
  Grid,
  HeroPanel,
  IntegrationPanel,
  Link,
  LightCta,
  Page,
  Pill,
  Section,
  SectionCTA,
  SectionHeading,
  Small,
  Text
} from '../components/'
import IndexLayout from '../layouts'

import placeholderHeroImage from '../images/hero-illustration.svg'

import logoDropbox from '../images/brands/dropbox.svg'
import logoTwillio from '../images/brands/twilio.svg'
import logoMailchimp from '../images/brands/mailchimp.svg'
import logoGithub from '../images/brands/github.svg'
import logoZendesk from '../images/brands/zendesk.svg'

import greenSplash from '../images/shared/green-splash.svg'
import orangeSplash from '../images/shared/orange-splash.svg'
import blueSplash from '../images/shared/blue-splash.svg'
import iconGraph from '../images/shared/icon-Graph.svg'
import iconShippet from '../images/shared/icon-Shippet.svg'
import iconLayout from '../images/shared/icon-Layout.svg'

import heroStyles from '../components/HeroPanel/HeroPanel.style'

import { colors, breakpoints } from '../styles/variables'

import codeData from '../data/codeSamples'

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
  background: url(${require('../images/homepage-waves-2.svg')}) no-repeat center center / contain;
`

const IndexPage: GatsbyPage<IQueryData> = ({ data, location }) => (
  <IndexLayout location={location}>
    <Page>
      <div css={heroStyles.styleBackgroundHome}>
        <HeroPanel
          css={css`
            background: red;
          `}
          title={
            <>
              <h1
                css={css`
                  color: ${colors.darkBlue};
                `}
              >
                Native Integration <Clearfix /> To power your app
              </h1>
            </>
          }
          subtitle={
            <>
              Bearer helps apps get connected to
              <Clearfix /> the rest of the World.
            </>
          }
          image={placeholderHeroImage}
          longHero
        >
          <LightCta text="Your users will thank you." />
          <div
            css={css`
              margin-top: 64px;
              margin-bottom: 8px;
            `}
          >
            <Button primary trackLink link="/explore" text="Explore integrations" />
          </div>
          <Small>
            Learn more about <Link to="/native-integration">Native Integrations</Link>
          </Small>
        </HeroPanel>
      </div>

      <Section
        css={css`
          padding-bottom: 8em;
        `}
      >
        <SectionHeading primaryText="Most Integrated Apps" />
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

      <Section withTail background="transparent">
        <Grid fullWidth>
          {[
            {
              title: 'For product manager',
              text:
                'Start adding the Integrations that keep piling up in your backlog.\
                 Add dozens of Integrations that users keep asking for without impacting roadmap and budget',
              iconBg: greenSplash,
              icon: iconGraph,
              color: colors.green
            },
            {
              title: 'For Front-End developer',
              text:
                'Ready-to-use, one line of code, Web Components that work for your stack,\
                 future-proof. Offer a standardize experience, customizable to your look and feel.',
              iconBg: orangeSplash,
              icon: iconLayout,
              color: colors.orange
            },
            {
              title: 'For Back-End developer',
              text:
                'Scale your Integration without overloading your codebase with dozens \
                of dependencies, SDKs and vendor-specific code. \
                Did we mention we take care of the OAuth flow too?',
              iconBg: blueSplash,
              icon: iconShippet,
              color: colors.blue
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
      </Section>

      <div css={styleWaveBg}>
        <Section withTail>
          <SectionHeading primaryText="A Native Integration in 5 minutes" />
          <CodeExamples data={codeData} />
          <div
            css={css`
              margin-top: -30px;
              text-align: center;
              position: relative;
              z-index: 5;
            `}
          >
            <div>
              <Link
                trackLink
                to="https://docs.bearer.sh/"
                css={css`
                  margin-top: 16px;
                  display: inline-block;
                  color: ${colors.black};
                `}
              >
                <Small>You can also check the docs</Small>
              </Link>
            </div>
          </div>
        </Section>
      </div>

      <Section withTail>
        <SectionHeading primaryText="Featured Integrations" />
        <IntegrationPanel integrations={data.graphcms.integrations} />
        <div
          css={[
            css`
              text-align: center;
            `
          ]}
        >
          <Button
            trackLink
            text="Explore Integrations"
            link="/explore"
            css={css`
              margin: 1em auto;
            `}
          />
        </div>
      </Section>

      <SectionCTA
        style={css`
          margin-bottom: 64px;
        `}
      />

      <Section
        withTail
        css={css`
          margin-bottom: 3em;
        `}
      >
        <SectionHeading primaryText="Why use Bearer?" />
        <Grid
          space="around"
          gutter={32}
          fullWidth
          style={css`
            justify-content: center !important;

            @media (min-width: ${breakpoints.md}px) {
              height: 600px;
              justify-content: space-between !important;
            }
            align-items: center;
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
          <Card
            title={
              <div
                css={css`
                  margin-bottom: 16px;
                `}
              >
                <img
                  src={require('../images/shared/icon-magnet.svg')}
                  css={css`
                    vertical-align: middle;
                    margin-right: 12px;
                    width: 40px;
                  `}
                  alt="Icon Magnet"
                />
                <span>
                  <Text text="Native" tag="h5" />
                </span>
              </div>
            }
            children={
              <>
                <Text text="Integration should be a key feature of your App!" />
                <Text text="Are you going to continue to let third parties capture its value?" />
                <Text
                  text="It’s time to power-up your App with truly Native Integrations. 
                  Take care of your business logic and we will do the rest."
                />
              </>
            }
            padding="large"
          />
          <Card
            className={css`
              position: relative;
              @media (min-width: ${breakpoints.md}px) {
                top: 200px;
              }
            `}
            title={
              <div
                css={css`
                  margin-bottom: 16px;
                `}
              >
                <img
                  src={require('../images/shared/icon-globe.svg')}
                  css={css`
                    vertical-align: middle;
                    margin-right: 12px;
                    width: 40px;
                  `}
                  alt="Icon Globe"
                />
                <span>
                  <Text text="Standardized" tag="h5" />
                </span>
              </div>
            }
            children={
              <>
                <Text text="Every Vendor’s API, SDK, Authentication mechanism, and even UI Widgets, are different!" />
                <Text text="Stop piling up dependencies and maintaining vendor-specific code." />
                <Text text="Every Bearer Integration is truly standardized, once and for all." />
              </>
            }
            padding="large"
          />
          <Card
            title={
              <div
                css={css`
                  margin-bottom: 16px;
                `}
              >
                <img
                  src={require('../images/shared/icon-plugnplay.svg')}
                  css={css`
                    vertical-align: middle;
                    margin-right: 12px;
                    width: 40px;
                    position: relative;
                  `}
                  alt="Icon Plug'n'Play"
                />
                <span>
                  <Text text="Plug and Play" tag="h5" />
                </span>
              </div>
            }
            children={
              <>
                <Text
                  text={`Using the Bearer standard, add any Integration like a breeze (which is about 5 minutes).`}
                />
                <Text
                  text={`We help you further by providing all the necessary tooling to help even more with your stack`}
                />
                <Text text="We currently support: Ruby, Rails, Node, Express, React and Vue" />
              </>
            }
            padding="large"
          />
        </Grid>
      </Section>
    </Page>
  </IndexLayout>
)
export default IndexPage
