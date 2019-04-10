import * as React from 'react'
import { css } from '@emotion/core'

import Page from '../../components/Page/Page'
import PageMetadata from '../../components/PageMetadata/PageMetadata'
import { HeroLined, Clearfix, Text, Tabs, Section, Grid, SectionHeading } from '../../components/'
import IndexLayout from '../../layouts'
import { colors } from '../../styles/variables'

const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
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
  <IndexLayout location={location}>
    <PageMetadata
      title="Bearer - Framework Features"
      description="Build API Integration quicker, Don't reimplement API Authentication, 
      Map API data to your model, Integrate in your App in one line of code and more."
    />
    <Page>
      <HeroLined>
        <Text tag="h1" text="Framework Features " />
        <Clearfix />
        <Text tag="h3" text="Build API Integration in no time!" />
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
            justify-content: center;
            padding: 88px 0;

            &:nth-child(odd) {
              max-width: 376px;
            }
          `}
        >
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Command Line Interface" />
            <Text large>
              Get started in seconds using the Bearer CLI, from bootstrapping a new project, generating &amp; running
              Functions and finally deploying your Integrations.
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
              From API Key to OAuth based authentication, Bearer has you covered to actually get things done instead of
              figuring out how APIs work.
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
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Map API to Custom Model" />
            <Text large>
              Build Functions to map APIs to your App as micro-services, transforming data to primitives your App
              natively understand while simplifying your code base.
            </Text>
          </div>
          <div>
            <img src={require('../../images/product/MapAPI.svg')} alt="Map API illustration" css={imageStyle} />
          </div>
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Integration Clients" />
            <Text large>
              Call Functions anywhere from your App, in Ruby, NodeJS, Python, JavaScript or React - you decide. Get
              access to an OAuth Connect component and even manage Webhooks receptions.
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
    </Page>
  </IndexLayout>
)

export default ProductFrameworkPage
