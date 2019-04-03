import * as React from 'react'
import { css } from '@emotion/core'
import Page from '../components/Page/Page'
import IndexLayout from '../layouts'
import {
  Card,
  Section,
  HeroLined,
  Text,
  ColoredTextBlock,
  TeamBlock,
  Clearfix,
  Grid,
  Tag,
  PageMetadata,
  SectionHeading,
  Button
} from '../components/'

import greenSplash from '../images/shared/green-splash.svg'
import orangeSplash from '../images/shared/orange-splash.svg'
import blueSplash from '../images/shared/blue-splash.svg'
import purpleSplash from '../images/shared/purple-splash.svg'
import valueFocus from '../images/shared/value-focus.svg'
import valueTrust from '../images/shared/value-trust.svg'
import valueAutonomy from '../images/shared/value-autonomy.svg'
import valueResponsibility from '../images/shared/value-responsibility.svg'

import { colors, breakpoints } from '../styles/variables'
import { getEmSize } from '../styles/mixins'
import heroStyles from '../components/HeroPanel/HeroPanel.style'

const JobCard = (props: any) => (
  <Card
    style={css`
      box-shadow: 0 2px 18px 0 rgba(3, 13, 54, 0.13);
      min-height: 178px;
      border-radius: 0;

      header {
        display: flex;
        justify-content: flex-end;
      }

      .job-infos {
        align-self: flex-end;
        text-align: right;
      }
    `}
  >
    <header>
      <span className="job-infos">
        {props.location && (
          <Tag
            text={props.location}
            color={colors.orange}
            css={css`
              display: inline-block;
            `}
          />
        )}
        {props.remote && (
          <Tag
            text={props.remote && 'remote'}
            color={colors.purple}
            css={css`
              display: inline-block;
            `}
          />
        )}
      </span>
    </header>
    <Text
      style={css`
        margin-bottom: 8px;
        font-weight: 600;
      `}
    >
      {props.role}
    </Text>
    <Text small>{props.description}</Text>

    <Button
      link={props.url}
      text="Apply now"
      secondary
      small
      style={css`
        margin: 16px 0;
      `}
    />
  </Card>
)

const AboutPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="About Us" />
    <Page>
      <div
        css={[
          heroStyles.styleBackgroundHowItWorks,
          css`
            z-index: 12;
          `
        ]}
      >
        <HeroLined>
          <Text tag="h1" text="About Us" />
          <Clearfix />
          <Text tag="h3" text="The new Standard to build Native Integration" />
        </HeroLined>
      </div>

      <Section
        style={css`
          top: -200px;
          &:after {
            display: block;
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            background: url(${require('../images/curve-about.svg')}) no-repeat center bottom / 100%;
            top: -40px;
            height: 300px;
            user-select: none;
            pointer-events: none;
            z-index: 5;

            @media (min-width: ${getEmSize(breakpoints.xl)}) {
              top: -40px;
            }

            @media (min-width: ${getEmSize(breakpoints.md)}) {
              top: -60px;
            }
          }
        `}
      >
        <div
          css={css`
            margin: auto;
            width: 520px;
            position: relative;
            z-index: 12;
          `}
        >
          <img src={require('../images/bearer-team.png')} alt="Our Team" />

          <SectionHeading primaryText="Our Mission" />

          <Text>Bearer strives to connect application together, no matter their technology. </Text>

          <Text>
            In a World ruled by APIs, it’s about time to empower developers with Integrations their users deserve.
          </Text>

          <Text>
            We build the next-gen developer tool to build &amp; use Integration at scale. Our technology transform any
            API into standardized components providing agnostic front-end and backend logic, usable in minutes.
          </Text>
        </div>
      </Section>
      <Section withTail background="transparent">
        <SectionHeading
          primaryText="Our values"
          css={css`
            margin-bottom: 64px;
          `}
        />

        <Grid
          fullWidth
          style={css`
            padding-top: 40px;
          `}
          childrenStyle={css`
            text-align: center;
            div > p {
              margin-top: 32px;
            }
          `}
        >
          {[
            {
              title: 'Focus',
              text: 'We have a mission to accomplish and nothing will divert us from that goal. We owe you this.',
              iconBg: greenSplash,
              icon: valueFocus,
              color: colors.green
            },
            {
              title: 'Trust',
              text:
                'We trust each other as we will trust you. \
                In exchange we gain your trust by being honest and transparent',
              iconBg: orangeSplash,
              icon: valueTrust,
              color: colors.orange
            },
            {
              title: 'Autonomy',
              text: 'We want our teammates to be autonomous so they can give their true best.',
              iconBg: blueSplash,
              icon: valueAutonomy,
              color: colors.blue
            },
            {
              title: 'Responsibility',
              text: "We can't envision autonomy without great responsibility, between us or with you!",
              iconBg: purpleSplash,
              icon: valueResponsibility,
              color: colors.purple
            }
          ].map((textBlock, index) => (
            <ColoredTextBlock
              key={index}
              title={textBlock.title}
              icon={textBlock.icon}
              iconBg={textBlock.iconBg}
              text={textBlock.text}
              color={textBlock.color}
              centered
              css={css`
                text-align: center;
              `}
            />
          ))}
        </Grid>
      </Section>
      <Section withTail background="transparent">
        <Grid
          fullWidth
          col={4}
          gutter={0}
          space="around"
          style={css`
            max-width: 860px;
          `}
          childrenStyle={css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 0 1 180px !important;
          `}
        >
          {[
            {
              photo: 'https://ca.slack-edge.com/T4EM0JX09-U4G2561AA-71013676414c-72',
              name: 'John Doe',
              role: 'Designer',
              location: 'Paris'
            },
            {
              photo: 'https://ca.slack-edge.com/T4EM0JX09-U4G2561AA-71013676414c-72',
              name: 'John Doe',
              role: 'Designer',
              location: 'Paris'
            },
            {
              photo: 'https://ca.slack-edge.com/T4EM0JX09-U4G2561AA-71013676414c-72',
              name: 'John Doe',
              role: 'Designer',
              location: 'Paris'
            },
            {
              photo: 'https://ca.slack-edge.com/T4EM0JX09-U4G2561AA-71013676414c-72',
              name: 'John Doe',
              role: 'Designer',
              location: 'Paris'
            },
            {
              photo: 'https://ca.slack-edge.com/T4EM0JX09-U4G2561AA-71013676414c-72',
              name: 'John Doe',
              role: 'Designer',
              location: 'Paris'
            },
            {
              photo: 'https://ca.slack-edge.com/T4EM0JX09-U4G2561AA-71013676414c-72',
              name: 'John Doe',
              role: 'Designer',
              location: 'Paris'
            },
            {
              photo: 'https://ca.slack-edge.com/T4EM0JX09-U4G2561AA-71013676414c-72',
              name: 'John Doe',
              role: 'Designer',
              location: 'Paris'
            },
            {
              photo: 'https://ca.slack-edge.com/T4EM0JX09-U4G2561AA-71013676414c-72',
              name: 'John Doe',
              role: 'Designer',
              location: 'Paris'
            }
          ].map((textBlock, index) => (
            <TeamBlock
              key={index}
              photo={textBlock.photo}
              name={textBlock.name}
              role={textBlock.role}
              location={textBlock.location}
            />
          ))}
        </Grid>
      </Section>

      <Section withTail>
        <SectionHeading primaryText="Ready to join?" />
        <div
          css={css`
            background-image: url(${require('../images/shared/yellow-splash.svg')}),
              url(${require('../images/shared/gradient-splash.svg')});
            background-position: top right 148px, bottom left 162px;
            background-repeat: no-repeat;
            padding: 2em 0;
          `}
        >
          <Grid
            fullWidth
            col={2}
            gutter={16}
            childrenStyle={css`
              margin-bottom: 32px;
            `}
          >
            {[
              {
                role: 'Senior FrontEnd Engineer',
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus…',
                location: 'PARIS',
                remote: false,
                url: '#'
              },
              {
                role: 'Business Developer',
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus…',
                location: 'PARIS',
                remote: true,
                url: '#'
              },
              {
                role: 'Full Stack',
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus…',
                location: null,
                remote: true,
                url: '#'
              }
            ].map((offer, index) => (
              <JobCard
                key={index}
                role={offer.role}
                description={offer.description}
                location={offer.location}
                remote={offer.remote}
                url={offer.url}
              />
            ))}
          </Grid>
        </div>
      </Section>

      <div
        css={css`
          background: url(${require('../images/wave-about.svg')}) no-repeat center top / cover;
          height: 400px;
          margin-top: 100px;
        `}
      >
        <Section
          withTail
          style={css`
            padding-top: 3em !important;
            margin-bottom: 0 !important;
            &:before {
              top: calc(-64px + -100px) !important;
            }
          `}
        >
          <SectionHeading primaryText="Our Investors" />

          <Grid
            childrenStyle={css`
              display: flex;
              text-align: center;
              align-items: center;
              justify-content: center;
            `}
          >
            <img
              src={require('../images/shared/logo-partech.png')}
              alt={`Logo Partech`}
              css={css`
                height: 50px;
                vertical-align: middle;
              `}
            />
            <img
              src={require('../images/shared/logo-point-nine.png')}
              alt={`Logo Point Nine`}
              css={css`
                height: 50px;
                vertical-align: middle;
              `}
            />
            <img
              src={require('../images/shared/logo-kima-ventures.png')}
              alt={`Logo Kima Ventures`}
              css={css`
                height: 78px;
                vertical-align: middle;
              `}
            />
          </Grid>
        </Section>
      </div>
    </Page>
  </IndexLayout>
)

export default AboutPage
