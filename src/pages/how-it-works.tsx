import * as React from 'react'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'

import { Button, Clearfix, HeroLined, Page, Section, SectionHeading, Grid, Text } from '../components/'
import IndexLayout from '../layouts'

import heroStyles from '../components/HeroPanel/HeroPanel.style'
import { colors } from '../styles/variables'

interface IQueryProps {
  site: {
    siteMetadata: {
      howToSteps: [
        {
          title: string
          description: string
        }
      ]
    }
  }
}

export const query = graphql`
  query HowItWorksQuery {
    site {
      siteMetadata {
        howToSteps {
          title
          description
        }
      }
    }
  }
`

const HowItWorksPage: GatsbyPage<IQueryProps> = ({ data, location }) => (
  <IndexLayout location={location}>
    <Page>
      <div
        css={[
          heroStyles.styleBackgroundHowItWorks,
          heroStyles.curvedSection,
          css`
            position: relative;
            height: 600px;
          `
        ]}
      >
        <HeroLined
          style={css`
            height: 400px;
          `}
        >
          <Text tag="h1" text="How Bearer Works?" />
          <Clearfix />
          <Text tag="h3" text="The Future of Integration is today!" />
        </HeroLined>
      </div>

      <Section>
        <div
          css={css`
            position: absolute;
            width: 2px;
            height: calc(100% + 240px);
            background: ${colors.yellow};
            left: 0;
            right: 0;
            top: -240px;
            margin: auto;
          `}
        />
        {data.site.siteMetadata.howToSteps.map((step, index) => {
          return (
            <Grid
              key={index}
              style={css`
                margin-bottom: 120px;
                position: relative;
              `}
              childrenStyle={css`
                display: flex;
              `}
            >
              <div
                css={css`
                  text-align: center;
                `}
              >
                <img
                  src={require(`../images/how-it-works/step-${index + 1}.svg`)}
                  alt={`illustration ${step.title}`}
                  css={css`
                    max-height: 300px;
                  `}
                />
              </div>
              <div
                css={css`
                  padding-left: 56px;
                  align-items: center;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <span
                  css={css`
                    background: ${colors.yellow};
                    position: absolute;
                    width: 56px;
                    height: 56px;
                    line-height: 56px;
                    border-radius: 100px;
                    margin: auto;
                    color: #fff;
                    z-index: 10;
                    align-items: center;
                    padding: 0 1em;
                    font-size: 24px;
                    font-family: 'ProximaNova-Semibold';
                    display: inline-block;
                    left: 0;
                    right: 0;
                    margin: auto;
                  `}
                >
                  <span
                    css={css`
                      margin-left: -2px;
                    `}
                  >
                    {index + 1}
                  </span>
                </span>
                <Text
                  text={step.title}
                  tag="h3"
                  style={css`
                    align-self: flex-start;
                  `}
                />
                <Clearfix />

                <Text text={<>{step.description}</>} />
              </div>
            </Grid>
          )
        })}
      </Section>
      <div
        css={css`
          background: url(${require('../images/shared/cut-wave-2.svg')}) no-repeat center center / cover;
          height: 600px;
          margin-bottom: 64px;
        `}
      >
        <Section
          style={css`
            height: 100%;
            display: flex;
            justify-content: center;
          `}
        >
          <SectionHeading primaryText="But, don't take our word for granted!" />

          <div
            css={css`
              text-align: center;
              background: url(${require('../images/shared/yellow-splash.svg')}) no-repeat center center / 122px;
              height: 100px;
              padding: 1.5em 0;
            `}
          >
            <Button
              primary
              link="/explore"
              text="Explore integrations"
              style={css`
                margin-right: 1em;
              `}
            />
            <Button
              secondary
              link="/"
              text="See documentation"
              style={css`
                margin-left: 1em;
              `}
            />
          </div>
        </Section>
      </div>
    </Page>
  </IndexLayout>
)

export default HowItWorksPage
