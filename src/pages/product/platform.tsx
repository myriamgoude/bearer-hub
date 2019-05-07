import * as React from 'react'
import { css } from '@emotion/core'

import {
  Clearfix,
  HeroLined,
  Grid,
  Layout,
  Page,
  PageMetadata,
  Section,
  SectionHeading,
  Text,
  Tabs
} from '../../components/'
import { colors, breakpoints } from '../../styles/variables'

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
  <Layout location={location}>
    <PageMetadata
      title="Bearer | Platform Features"
      description="Run and monitor your API Integrations with Bearer's platform,
      log every API call, manage authentication flows and webhooks, and more"
    />
    <Page>
      <HeroLined>
        <Text tag="h1" text="Platform Features" />
        <Clearfix />
        <Text tag="h3">
          Run and Manage API Integrations
          <br />
          like World Class Services
        </Text>
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
            text-align: left;
            align-items: center;
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
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Deployment" />

            <Text large>
              Deploy your integrations in under a minute on our Platform, and let Bearer scale and secure it for you.
            </Text>
          </div>
          <div>
            <img src={require('../../images/product/Deploy.svg')} alt="Deploy illustration" css={imageStyle} />
          </div>
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Monitor" />

            <Text large>
              Get insights on the go as Bearer monitors and logs every API call performed by your integrations.
            </Text>
          </div>
          <div>
            <img src={require('../../images/product/Logs.svg')} alt="Logs illustration" css={imageStyle} />
          </div>
          <div>
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Function Specifications" />

            <Text large>
              Access to your function definitions is available under the Open API 3 specification. You can call them any
              time using Bearer’s integration clients.
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
              Bearer manages your API authentication flow, from securely storing credentials to storing, retrieving and
              refreshing access tokens.
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
            <SectionHeading tag="h3" style={headingTail} align="left" primaryText="Webhook" />

            <Text large>
              Direct webhooks to and from Bearer, while automatically adding signing, reception acknowledge and retry
              logic.
            </Text>
          </div>
          <div>
            <img src={require('../../images/product/Webhook.svg')} alt="Webhook illustration" css={imageStyle} />
          </div>
        </Grid>
      </Section>
    </Page>
  </Layout>
)

export default ProductPlatformPage
