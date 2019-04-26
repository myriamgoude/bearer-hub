import * as React from 'react'
import { css } from '@emotion/core'

import {
  Button,
  Clearfix,
  Grid,
  HeroLined,
  Layout,
  Page,
  PageMetadata,
  Section,
  SectionHeading,
  Text,
  Tabs
} from '../../components/index'
import { colors, breakpoints } from '../../styles/variables'

const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`

const imageStyle2 = css`
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: center;
  margin: 2rem 0;
`

const headingTail = css`
  position: relative;

  &:before {
    content: '';
    height: 2px;
    width: 17px;
    background: ${colors.yellow};
    position: absolute;
    top: 14px;
    left: calc(-17px - 24px);
  }

  > h3 {
    padding: 0;
    margin: 0;
  }
`

const ProductFrameworkPage: GatsbyPage = ({ location }) => (
  <Layout location={location}>
    <PageMetadata
      title="Bearer - Framework Features"
      description="Build API integration faster with the Bearer
      framework, manage API authentication, map data easily, integrate into your app in one line of code and more."
    />
    <Page>
      <HeroLined>
        <Text tag="h1" text="Framework Features " />
        <Clearfix />
        <Text tag="h3" text="Build API Integrations in a flash!" />
      </HeroLined>

      <Tabs
        items={[
          {
            label: 'Framework',
            path: '/product/framework'
          },
          {
            label: 'Platform',
            path: '/product/platform'
          }
        ]}
      />
      <Section>
        <Grid
          col={2}
          childrenStyle={css`
            display: flex;
            align-items: center;
            text-align: left;
            justify-content: center;
            padding: 88px 0;
            @media (max-width: ${breakpoints.lg}px) {
              padding: 48px 0;
              margin: 0 auto;
            }

            &:nth-child(odd) {
              max-width: 500px;
              @media (max-width: ${breakpoints.lg}px) {
                max-width: 376px;
              }
            }
          `}
        >
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Command Line Interface" />
            <Text large>
              From bootstrapping a new integration, to generating and running functions and then on to deploying your
              code, you can start in seconds with Bearer CLI.
            </Text>
          </div>
          <div>
            <img
              src={require('../../images/product/CommandLineTool.svg')}
              alt="Command line illustration"
              css={imageStyle}
            />
          </div>
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="API Authentication" />
            <Text large>
              Bearer manages API authentication out-of-the-box, from OAuth to API Key, including a pre-configured API
              client to query the API right away.
            </Text>
          </div>
          <div>
            <img
              src={require('../../images/product/APIAuth.svg')}
              alt="API Authentication illustration"
              css={imageStyle}
            />
          </div>
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Map API to Custom Models" />
            <Text large>
              Build functions to map APIs to your app as micro-services, which can transform data to primitives your app
              will natively understand while simplifying your code base.
            </Text>
          </div>
          <div>
            <img src={require('../../images/product/MapAPI.svg')} alt="Map API illustration" css={imageStyle} />
          </div>
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Integration Clients" />
            <Text large>
              Use our integration clients to call functions and add OAuth connect components in your app.
              <br />
              <br />
              Available in: Ruby, NodeJS, Python, JavaScript or React.
            </Text>
          </div>
          <div>
            <img
              src={require('../../images/product/IntegrationClients.svg')}
              alt="Integration Clients illustration"
              css={imageStyle}
            />
          </div>
        </Grid>
      </Section>

      <Section>
        <Grid
          col={2}
          childrenStyle={css`
            display: flex;
            align-items: center;
            margin: 0 auto;
            justify-content: center;
            padding: 0px 0 88px;
            @media (max-width: ${breakpoints.lg}px) {
              padding: 48px 0;
              margin: 0 auto;
              max-width: 376px;
            }
            &:nth-child(odd) {
              @media (min-width: ${breakpoints.lg}px) {
                padding-right: 65px;
              }
            }
          `}
        >
          <div>
            <img src={require('../../images/product/templates.svg')} alt="Available Templates" css={imageStyle2} />
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Templates" />
            <Text large>To start building your integration even faster, use our API templates!</Text>
            <Button trackLink text="Explore templates" link="/integrations" className="mt-16 mb-16" />
          </div>
          <div>
            <img
              src={require('../../images/product/typescriptOpen.svg')}
              alt="Typescript & Open Source"
              css={imageStyle2}
            />
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Typescript & Open Source" />
            <Text large>Bearer Framework is built with Typescript and provided under the MIT Open Source License.</Text>
          </div>
        </Grid>
      </Section>
    </Page>
  </Layout>
)

export default ProductFrameworkPage
