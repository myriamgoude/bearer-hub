import * as React from 'react'
import { css } from '@emotion/core'

import Page from '../../components/Page/Page'
import PageMetadata from '../../components/PageMetadata/PageMetadata'
import { HeroLined, Clearfix, Text, Tabs, Section, SectionHeading, Grid } from '../../components/'
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

const ProductPlatformPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata
      title="Bearer - Platform Features"
      description="Bearer manage your API Integration as microservices and helps you host,
      scale and monitor them so you can focus on your App"
    />
    <Page>
      <HeroLined>
        <Text tag="h1" text="Platform Features" />
        <Clearfix />
        <Text tag="h3" text="Run and manage API Integrations like World Class Services" />
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
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Deployment" />

            <Text large>
              Deploy your Integrations in less than a minute using our Platform, we will scale and secure it for you.
            </Text>
          </div>
          <div>
            <img src={require('../../images/product/Deploy.svg')} alt="Deploy illustration" css={imageStyle} />
          </div>
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Monitor" />

            <Text large>
              Monitor and log every API calls your Integrations are performing, get insights to quickly know what's
              happening.
            </Text>
          </div>
          <div>
            <img src={require('../../images/product/Logs.svg')} alt="Logs illustration" css={imageStyle} />
          </div>
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Function Specifications" />

            <Text large>
              Access to your Function definitions available under the Open API 3 specification, call them using our
              Integration Clients.
            </Text>
          </div>
          <div>
            <img
              src={require('../../images/product/functionSpecs.svg')}
              alt="Function Specifications illustration"
              css={imageStyle}
            />
          </div>
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Authentication Flow " />

            <Text large>
              Managed API authentication flow, from API securely storing credentials, triggering OAuth dance, storing
              and retrieving access tokens and refresh tokens.
            </Text>
          </div>
          <div>
            <img
              src={require('../../images/product/OauthApi.svg')}
              alt="OAuth &amp; API Keys illustration"
              css={imageStyle}
            />
          </div>
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="WebHook" />

            <Text large>
              Direct webhooks to Bearer and forward them anywhere while automatically adding signing, applicative
              acknowledgement and retry logic.
            </Text>
          </div>
          <div>
            <img src={require('../../images/product/Webhook.svg')} alt="Webhook illustration" css={imageStyle} />
          </div>
        </Grid>
      </Section>
    </Page>
  </IndexLayout>
)

export default ProductPlatformPage
