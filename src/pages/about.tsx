import * as React from 'react'
import * as crypto from 'crypto'
import { css } from '@emotion/core'
import IndexLayout from '../layouts'

import {
  Button,
  Card,
  Clearfix,
  ColoredTextBlock,
  Grid,
  HeroLined,
  Link,
  Page,
  PageMetadata,
  Section,
  SectionHeading,
  TeamBlock,
  Text,
  Tag
} from '../components/'

import greenSplash from '../images/shared/splash-green.svg'
import orangeSplash from '../images/shared/splash-orange.svg'
import blueSplash from '../images/shared/splash-blue.svg'
import purpleSplash from '../images/shared/splash-purple.svg'

import valueFocus from '../images/shared/value-focus.svg'
import valueTrust from '../images/shared/value-trust.svg'
import valueAutonomy from '../images/shared/value-autonomy.svg'
import valueResponsibility from '../images/shared/value-responsibility.svg'

import { colors, breakpoints } from '../styles/variables'
import heroStyles from '../components/HeroPanel/HeroPanel.style'

const JobCard = (props: any) => (
  <Card
    style={css`
      box-shadow: 0 2px 18px 0 rgba(3, 13, 54, 0.13);
      min-height: 178px;
      border-radius: 0;
      margin: 0 2rem;
      height: 100%;

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
        {props.location && <Tag text={props.location.toUpperCase()} color={colors.orange} />}
        {props.remote && <Tag text={props.remote && 'REMOTE'} color={colors.purple} />}
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
      text="Apply"
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
    <PageMetadata
      title="About Us | Bearer"
      description="
        Meet the Bearer team and learn about our mission to help developers build quicker &amp; better API integrations"
    />
    <Page
      css={[
        heroStyles.styleDefaultCurve,
        css`
          z-index: 12;
        `
      ]}
    >
      <HeroLined>
        <Text tag="h1" text="About Us" />
        <Clearfix />
        <Text tag="h3" text="We are building the future of API integration" />
      </HeroLined>
      <Section>
        <div
          css={css`
            margin: auto;
            width: 520px;
            position: relative;
            z-index: 12;

            @media (max-width: ${breakpoints.lg}px) {
              max-width: 100%;
              width: 100%;
            }
          `}
        >
          <img
            src={require('../images/bearer-team.png')}
            alt="Our Team"
            css={css`
              @media (max-width: ${breakpoints.lg}px) {
                width: 100%;
              }
            `}
          />

          <SectionHeading primaryText="Our Mission" />

          <Text>Bearer are here to help developers build quicker and better API Integration.</Text>

          <Text>
            The problem with APIs is that as APIs become more universal, integrating them doesn’t get any easier.
          </Text>

          <Text>
            As developers, we know it is critical to keep control over both the APIs we consume, and our own business
            logic. However, it is a constant challenge to do both while also keeping our codebase clean and
            maintainable.
          </Text>

          <Text>
            We believe in the right tools for the jobs. Since we haven’t found them yet, we’ve decided to build them.
          </Text>

          <Text>Welcome to Bearer.</Text>
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

            @media (min-width: ${breakpoints.lg}px) {
              div > p {
                margin-top: 32px;
              }
            }
          `}
        >
          {[
            {
              title: 'Focus',
              text: 'We have a mission to accomplish, and nothing will distract us from that goal.',
              iconBg: greenSplash,
              icon: valueFocus,
              color: colors.green
            },
            {
              title: 'Trust',
              text: 'We trust each other the same way we hope you will trust us: through honesty and transparency.',
              iconBg: orangeSplash,
              icon: valueTrust,
              color: colors.orange
            },
            {
              title: 'Autonomy',
              text: 'We give our team freedom so that they can give you their best.',
              iconBg: blueSplash,
              icon: valueAutonomy,
              color: colors.blue
            },
            {
              title: 'Responsibility',
              text: 'With great freedom comes great responsibility, to each other and to you!',
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
              style={css`
                text-align: center;
                @media (max-width: ${breakpoints.lg}px) {
                  object {
                    position: relative;
                    top: 0;
                  }
                }
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
          childrenStyle={css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 0 1 180px !important;
            @media (max-width: ${breakpoints.lg}px) {
              display: block;
            }
          `}
          wrapperStyle={css`
            @media (max-width: ${breakpoints.lg}px) {
              overflow: inherit;
            }
          `}
          css={css`
            justify-content: stretch;
          `}
        >
          {[
            {
              email: 'guillaume@bearer.sh',
              name: 'Guillaume Montard',
              role: 'Co-Founder, CEO'
            },
            {
              email: 'cedric@bearer.sh',
              name: 'Cédric Fabianski',
              role: 'Co-Founder, CTO'
            },
            {
              email: 'antoine@bearer.sh',
              name: 'Antoine Tanguy',
              role: 'Software Engineer'
            },
            {
              email: 'radek@bearer.sh',
              name: 'Radek Molenda',
              role: 'Software Engineer'
            },
            {
              email: 'myriam@bearer.sh',
              name: 'Myriam Goude',
              role: 'Product Manager'
            },
            {
              email: 'tarik@bearer.sh',
              name: 'Tarik Ihadjadene',
              role: 'Dev Ops'
            },
            {
              email: 'arthur@bearer.sh',
              name: 'Arthur Carayon',
              role: 'UI/UX Designer'
            },
            {
              email: 'phil@bearer.sh',
              name: 'Phil Hayton',
              role: 'Software Engineer'
            },
            {
              email: 'elizabeth@bearer.sh',
              name: 'Elizabeth Braae',
              role: 'Software Engineer'
            },
            {
              email: 'corentin@bearer.sh',
              name: 'Corentin Brossault',
              role: 'Software Engineer'
            },
            {
              email: 'dave@bearer.sh',
              name: 'David Roe',
              role: 'Software Engineer'
            },
            {} // Quick hack, add an empty div to align grid
          ].map((teammate, index) => (
            <TeamBlock
              key={index}
              photo={
                teammate.email &&
                `https://www.gravatar.com/avatar/${crypto
                  .createHash('md5')
                  .update(teammate.email)
                  .digest('hex')}?s=1024`
              }
              name={teammate.name}
              role={teammate.role}
            />
          ))}
        </Grid>
      </Section>

      <Section withTail>
        <SectionHeading primaryText="Ready to join?" />
        <div
          id="jobs"
          css={css`
            background-image: url(${require('../images/shared/yellow-splash.svg')}),
              url(${require('../images/shared/gradient-splash.svg')});
            background-position: top right 148px, bottom left 162px;
            background-repeat: no-repeat;
            padding: 2rem 0;
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
                role: 'Senior JavaScript Engineer',
                description:
                  "You are not afraid to deep dive into the source code of any JS library like ReactJS?\
                  TypeScript is your best friend and you can't imagine the world without it?\
                  If you feel like making developers' lives easier is where you best express yourself,\
                  this position is for you!",
                location: 'Earth',
                remote: true,
                url: 'mailto:hello@bearer.sh?subject=Senior JavaScript Engineer @ Bearer'
              },
              {
                role: 'Frontend Developer',
                description:
                  'You are passionate about frontend development? Pixel perfect means something to you?\
                  You feel right at cross section of UI/X, product and engineering, this position is for you!',
                location: 'Earth',
                remote: true,
                url: 'mailto:hello@bearer.sh?subject=Frontend Developer @ Bearer'
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

      <Section
        withTail
        style={css`
          padding-bottom: 4rem;
          background-image: url(${require('../images/wave-about.svg')});
          background-repeat: no-repeat;
          background-position: center 6rem;
          background-size: cover;
        `}
      >
        <SectionHeading primaryText="Our Investors" />

        <Grid
          childrenStyle={css`
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;

            @media (max-width: ${breakpoints.lg}px) {
              margin-top: 32px;
            }
          `}
        >
          <Link to="https://partechpartners.com/" targetBlank>
            <img
              src={require('../images/shared/logo-partech.png')}
              alt={`Logo Partech`}
              css={css`
                height: 50px;
                vertical-align: middle;
              `}
            />
          </Link>
          <Link to="http://www.pointninecap.com/" targetBlank>
            <img
              src={require('../images/shared/logo-point-nine.png')}
              alt={`Logo Point Nine`}
              css={css`
                height: 50px;
                vertical-align: middle;
              `}
            />
          </Link>
          <Link to="https://www.kimaventures.com/" targetBlank>
            <img
              src={require('../images/shared/logo-kima-ventures.png')}
              alt={`Logo Kima Ventures`}
              css={css`
                height: 78px;
                vertical-align: middle;
              `}
            />
          </Link>
        </Grid>
      </Section>
    </Page>
  </IndexLayout>
)

export default AboutPage
