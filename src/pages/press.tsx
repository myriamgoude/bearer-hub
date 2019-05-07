import * as React from 'react'
import { css } from '@emotion/core'

import {
  Button,
  Clearfix,
  Grid,
  HeroLined,
  HeroPanel,
  Layout,
  Link,
  Page,
  PageMetadata,
  SectionHeading,
  Section,
  Small,
  Text
} from '../components/'

import heroStyles from '../components/HeroPanel/HeroPanel.style'
import { breakpoints, colors } from '../styles/variables'

import pressArticles from '../data/press'

const PressPage: GatsbyPage = ({ location }) => (
  <Layout location={location} enrichedHeader={true}>
    <PageMetadata
      title="Bearer | Press and Media Resources"
      description="Press Information and Resources about us and our framework"
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
        <HeroPanel
          style={css`
            padding-top: 0;
            text-align: left;
          `}
        >
          <div className="hero-half">
            <Text
              tag="h1"
              text={
                <>
                  Press and Media{' '}
                  <span
                    css={css`
                      color: ${colors.yellow};
                    `}
                  >
                    Resources
                  </span>
                </>
              }
            />
            <Grid
              col={2}
              style={css`
                max-width: 400px !important;
                margin: 0;
                margin-top: 68px;
                .contact-us {
                  border-radius: 4px;
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  appearance: none;
                  border: 0;
                  cursor: pointer;
                  font-weight: 600;
                  background-color: #ffc400;
                  color: #030d36;
                  background-color: #ffc400;
                  color: #030d36;
                  height: 48px;
                  line-height: 48px;
                  padding: 0 1.5rem;
                  text-decoration: none;
                  align-item: flex-start;
                  text-align: center;
                  display: inline-block;

                  &:hover {
                    background-color: #e9b300;
                  }
                }

                @media (max-width: ${breakpoints.lg}px) {
                  margin: 68px auto 0;
                }
              `}
              childrenStyle={css`
                padding-right: 8px;
                a,
                button {
                  width: 100% !important;
                  @media (max-width: ${breakpoints.lg}px) {
                    margin-bottom: 16px;
                  }
                }
              `}
            >
              <a href="mailto:hello@bearer.sh?subject=Press" className="contact-us">
                Contact us
              </a>
              <Button
                secondary
                link="https://drive.google.com/drive/folders/1NfLHbVsjDonkt9wrysrnQCuP0tD5CGh-?usp=sharing"
                text="Download press kit"
                style={css`
                  position: relative;
                  &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    top: -4px;
                    right: -100px;
                    height: 69px;
                    width: 102px;
                    background: url(${require('../images/shared/paper-plane.png')}) no-repeat center center / contain;
                  }
                `}
              />
              <Clearfix />
              <span
                css={css`
                  text-align: center !important;
                  small {
                    text-align: center;
                  }
                `}
              >
                <Small
                  color="#898B92"
                  style={css`
                    display: inline-block;
                    margin-top: 16px;
                  `}
                >
                  Official Graphical Resources you can freely use
                </Small>
              </span>
            </Grid>
          </div>
          <div
            className="hero-half"
            css={css`
              @media (max-width: ${breakpoints.lg}px) {
                display: none;
              }
            `}
          >
            <img
              src={require('../images/press-hero-illustration.png')}
              alt="Bearer - Our press kit"
              css={css`
                height: 380px;
                margin: auto;
                @media (max-width: ${breakpoints.lg}px) {
                  display: none;
                }
              `}
            />
          </div>
        </HeroPanel>
      </HeroLined>
      <Section>
        <SectionHeading primaryText="They talk about us" />
        <div
          css={css`
            background-image: url(${require('../images/shared/yellow-splash.svg')}),
              url(${require('../images/shared/gradient-splash.svg')});
            background-position: top right 148px, bottom left 162px;
            background-repeat: no-repeat;
            padding: 2rem 0;
            text-align: center;
          `}
        >
          <Grid
            col={2}
            space="between"
            style={css`
              max-width: 508px;
              @media (max-width: ${breakpoints.lg}px) {
                padding: 1em 0;
                align-items: center;
              }
            `}
            childrenStyle={css`
              max-width: 244px;
              @media (max-width: ${breakpoints.lg}px) {
                margin-bottom: 16px;
              }
            `}
          >
            {pressArticles.map((article: any) => (
              <div key={article.name}>
                <Link
                  to={article.url}
                  title={article.name}
                  css={css`
                    box-shadow: 0 2px 4px 0 rgba(3, 13, 54, 0.26);
                    display: inline-block;
                    text-align: left;
                    text-decoration: none;

                    &:hover {
                      text-decoration: none;
                    }
                  `}
                >
                  <header
                    css={css`
                      width: 100%;
                      height: 166px;
                    `}
                  >
                    <img
                      src={article.image}
                      css={css`
                        width: 100%;
                        height: 100%;
                        vertical-align: middle;
                        object-fit: cover;
                        object-position: center;
                      `}
                    />
                  </header>
                  <div
                    css={css`
                      background: white;
                      padding: 24px;
                    `}
                  >
                    <Text large>{article.name}</Text>
                    <Clearfix />
                    <Small color="#898B92">{article.source}</Small>
                    <Clearfix />

                    <Small color="#030D36">
                      <time dateTime="true">{article.date}</time>
                    </Small>
                  </div>
                </Link>
              </div>
            ))}
          </Grid>
        </div>
      </Section>
      <Section
        withTail
        style={css`
          padding-bottom: 96px;
        `}
      >
        <SectionHeading primaryText="Brand and resources" />
        <Grid
          childrenStyle={css`
            @media (max-width: ${breakpoints.lg}px) {
              display: flex;
              width: 100%;
              align-items: center;
              justify-content: center;
              margin-bottom: 16px;
            }
          `}
        >
          <div>
            <SectionHeading
              secondaryText="Color"
              css={css`
                color: ${colors.darkBlue};
              `}
            />
          </div>
          <div>
            <Text
              large
              style={css`
                font-weight: bold;
              `}
            >
              Primary Color
            </Text>
            <Clearfix />
            <div
              css={css`
                float: left;
                width: 40px;
                height: 40px;
                background: ${colors.yellow};
                margin-right: 16px;
                border-radius: 8px;
              `}
            />
            <div
              css={css`
                float: left;
                p {
                  margin: 0;
                }
              `}
            >
              <Text>It’s yellow but not canary</Text>
              <Clearfix />
              <Text
                color={colors.yellow}
                style={css`
                  @media (max-width: ${breakpoints.lg}px) {
                    float: left;
                  }
                `}
              >
                {colors.yellow}
              </Text>
            </div>
          </div>
          <div>
            <Text
              large
              style={css`
                font-weight: bold;
              `}
            >
              Secondary Color
            </Text>
            <Clearfix />
            <div
              css={css`
                float: left;
                width: 40px;
                height: 40px;
                background: ${colors.darkBlue};
                margin-right: 16px;
                border-radius: 8px;
              `}
            />
            <div
              css={css`
                float: left;
                p {
                  margin: 0;
                }
              `}
            >
              <Text>It’s dark, but not black</Text>
              <Clearfix />
              <Text
                color={colors.darkBlue}
                style={css`
                  @media (max-width: ${breakpoints.lg}px) {
                    float: left;
                  }
                `}
              >
                {colors.darkBlue}
              </Text>
            </div>
          </div>
        </Grid>
      </Section>
    </Page>
  </Layout>
)

export default PressPage
