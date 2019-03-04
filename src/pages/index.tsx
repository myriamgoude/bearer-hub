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
  Text
} from '../components/'
import IndexLayout from '../layouts'

import placeholderHeroImage from '../images/hero-illustration.svg'

import logoDropbox from '../images/brands/dropbox.svg'
import logoTwillio from '../images/brands/twilio.svg'
import logoMailchimp from '../images/brands/mailchimp.svg'
import logoGithub from '../images/brands/github.svg'
import logoZendesk from '../images/brands/zendesk.svg'

import greenStain from '../images/shared/green-stain.svg'
import orangeStain from '../images/shared/orange-stain.svg'
import blueStain from '../images/shared/blue-stain.svg'
import iconGraph from '../images/shared/icon-Graph.svg'
import iconShippet from '../images/shared/icon-Shippet.svg'
import iconLayout from '../images/shared/icon-Layout.svg'

import heroStyles from '../components/HeroPanel/HeroPanel.style'

import { colors } from '../styles/variables'

import codeData from '../data/codeSamples'

interface IQueryData {
  graphcms: {
    integrations: {
      id: string
      title: string
      description: string
      featured: boolean
      providers: {
        title: string
        image: {
          url: string
        }
      }[]
    }[]
  }
}

export const query = graphql`
  query IndexPageQuery {
    graphcms {
      integrations(where: { status: PUBLISHED }) {
        id
        title
        description
        featured
        providers {
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
          title={
            <>
              Native Integration <Clearfix /> To power your app
            </>
          }
          subtitle="Bearer helps apps get connected to the rest of the World."
          image={placeholderHeroImage}
          imageCss={css`
            height: 500px;
          `}
          longHero
        >
          <LightCta to="foo.com" text="Your users will thank you." />
          <div className="mt-64 mb-32">
            <Button primary link="/explore" text="Explore integrations" />
            <Button secondary link="/how-it-works" text="How it works" />
          </div>
          <p>
            Learn more about <Link to="/native-integration">Native Integrations</Link>
          </p>
        </HeroPanel>
      </div>

      <Section
        css={css`
          padding-bottom: 8em;
        `}
      >
        <SectionHeading primaryText="Most Integrated Apps" />
        <Grid space="between">
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
                'Start adding the Integration that keeps piling up in your backlog.\
                 Add dozens of Integrations that users keep asking for without impacting roadmap and budget',
              iconBg: greenStain,
              icon: iconGraph,
              color: colors.branded.green
            },
            {
              title: 'For Front-End developer',
              text:
                'Ready to use, one line of code, Web Components that works for your stack,\
                 future proof. Offer a standardize experience, customizable to your look and feel.',
              iconBg: orangeStain,
              icon: iconLayout,
              color: colors.branded.orange
            },
            {
              title: 'For Back-End developer',
              text:
                'Scale your Integration without overloading your codebase with dozens \
                of dependencies, SDK and vendor specific code.Did we mention we also take care of the OAuth flow too?',
              iconBg: blueStain,
              icon: iconShippet,
              color: colors.branded.blue
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
            <Button
              text="How it works?"
              link="#"
              css={css`
                margin: 1em auto;
              `}
            />

            <div>
              <Link
                to="#"
                css={css`
                  margin-top: 16px;
                  display: inline-block;
                  color: ${colors.branded.black};
                `}
              >
                You can also check the docs
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
              margin-top: 32px;
            `
          ]}
        >
          <Button
            text="explore integrations"
            link="#"
            css={css`
              margin: 1em auto;
            `}
          />
        </div>
      </Section>

      <SectionCTA />

      <Section
        withTail
        css={css`
          height: 860px;
        `}
      >
        <SectionHeading primaryText="Why use Bearer?" />
        <Grid
          space="between"
          gutter={32}
          fullWidth
          className={css`
            height: 600px;
            background: url(${require('../images/shared/yellow-circle.svg')}) no-repeat center top / 560px;
          `}
          childrenClassName={css`
            max-width: 320px;
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
                    margin-right: 16px;
                  `}
                  alt="Icon Magnet"
                />
                <span>Native</span>
              </div>
            }
            children={
              <>
                <Text text="Integration should be a key feature of your App!" />

                <Text text="Are you going to continue letting third-party capture its value?" />

                <Text
                  text="
                  It’s time to power-up your App with truly native integrations. Take care of your business logic and we
                  will do the rest.
                "
                />
              </>
            }
            padding="large"
          />
          <Card
            className={css`
              position: relative;
              top: 200px;
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
                    margin-right: 16px;
                  `}
                  alt="Icon Globe"
                />
                <span>Standardized</span>
              </div>
            }
            children={
              <>
                <Text text="Every Vendor’s API, SDK, Authentication mechanism and even UI Widget are different!" />

                <Text text="Stop piling up dependencies and maintaining vendors specific codes." />

                <Text text="Every Bearer’s Integration is truly standardized, once and for all." />
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
                    margin-right: 16px;
                    position: relative;
                  `}
                  alt="Icon Plug'n'Play"
                />
                <span>Plug and Play</span>
              </div>
            }
            children={
              <>
                <Text text="Using the Bearer standard add any Integration like a breeze (which is about 5 minutes" />

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
