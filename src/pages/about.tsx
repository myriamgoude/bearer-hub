import * as React from 'react'
import { css } from '@emotion/core'
import Page from '../components/Page/Page'
import IndexLayout from '../layouts'
import { Section, HeroLined, Text, ColoredTextBlock, TeamBlock, Clearfix, Grid } from '../components/'
import PageMetadata from '../components/PageMetadata/PageMetadata'
import { colors } from '../styles/variables'

import greenSplash from '../images/shared/green-splash.svg'
import orangeSplash from '../images/shared/orange-splash.svg'
import blueSplash from '../images/shared/blue-splash.svg'
import purpleSplash from '../images/shared/purple-splash.svg'
import valueFocus from '../images/shared/value-focus.svg'
import valueTrust from '../images/shared/value-trust.svg'
import valueAutonomy from '../images/shared/value-autonomy.svg'
import valueResponsibility from '../images/shared/value-responsibility.svg'

const AboutPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="About Us" />
    <Page>
      <HeroLined>
        <Text tag="h1" text="About Us" />
        <Clearfix />
        <Text tag="h3" text="The new Standard to build Native Integration" />
      </HeroLined>

      <Section
        styleContainer={css`
          display: flex;
        `}
      >
        <div
          css={css`
            flex: 0 1 30%;
            padding-right: 58px;
          `}
        />
        <img src={require('../images/bearer-team.png')} alt="Our Team" />
      </Section>
      <Section>
        <h2>Our Mission</h2>

        <p>Bearer strives to connect application together, no matter their technology.</p>
        <p>
          In a world ruled by APIs, it’s about time to empower developers with the Integrations their users deserve.
        </p>
        <p>
          We provide next-generation developer tools to build & use Integrations at scale. Our technology transforms any
          API into standardized components providing agnostic front-end and backend logic, usable in minutes.
        </p>
      </Section>
      <Section withTail background="transparent">
        <h2>Our values</h2>
        <Grid fullWidth>
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
            />
          ))}
        </Grid>
      </Section>
      <Section withTail background="transparent">
        <h2>Meet our Team</h2>
        <Grid fullWidth>
          {[
            {
              photo: 'default.png',
              name: 'John Doe',
              role: 'Designer'
            }
          ].map((textBlock, index) => (
            <TeamBlock key={index} photo={textBlock.photo} name={textBlock.name} role={textBlock.role} />
          ))}
        </Grid>
      </Section>

      <Section>
        <h2>Ready to join?</h2>
        <h3>
          <svg />
          Remote From <strong>Paris</strong>
        </h3>
      </Section>

      <Section>
        <h2>Our investors</h2>
      </Section>
    </Page>
  </IndexLayout>
)

export default AboutPage
