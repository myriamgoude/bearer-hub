import * as React from 'react'
import { css } from '@emotion/core'

import {
  Button,
  ButtonToDashboard,
  Clearfix,
  Grid,
  HeroLined,
  Layout,
  Page,
  PageMetadata,
  Section,
  SectionHeading,
  Small,
  Tabs,
  Text
} from '../components/'
import { colors, breakpoints } from '../styles/variables'
import heroStyles from '../components/HeroPanel/HeroPanel.style'
import { isBrowser } from '../services/Browser'
import { dashboardURL } from '../services/Dashboard'

const pricingPageCss = css`
  .mobile-label {
    display: none;
    color: ${colors.secondary[2]};

    @media (max-width: ${breakpoints.md}px) {
      display: inline-block;
    }
  }

  td:not(.mobile-label) {
    font-family: 'ProximaNova-Semibold';
  }

  .mobile-panel {
    @media (max-width: ${breakpoints.md}px) {
      position: relative;

      & > div {
        margin: auto;
        width: 100%;

        > table {
          width: 100%;
          max-width: 100%;
        }

        &:not(.show) {
          display: none;
        }
      }
    }
  }
`

const PricingTable = (props: any) => (
  <table
    className={`pricing-table ${props.className}`}
    css={css`
      border-collapse: collapse;
      &:not(.transparent) {
        width: 244px;
        background: ${props.background === 'dark' ? colors.darkBlue : 'white'};
        appearance: none;
        border: none !important;
        box-shadow: 0 4px 12px 0 rgba(3, 13, 54, 0.08);
        color: ${props.background === 'dark' ? 'white' : colors.darkBlue};
        border-radius: 8px;
        text-align: center;

        @media (max-width: ${breakpoints.md}px) {
          text-align: left;
          margin: auto;

          & tr > td:last-of-type {
            text-align: right;
          }

          & td {
            width: auto;
            &:not(:last-of-type) {
              border-bottom: 1px solid ${props.background === 'dark' ? '#000' : '#f6f6f8'};
            }
          }
        }

        & td:not(.mobile-label) {
          color: ${props.background === 'dark' && 'white !important'};
        }
      }

      position: relative;
      margin: auto;
      align-self: flex-start;

      thead,
      tbody,
      td {
        background: transparent !important;
      }

      thead {
        min-height: 140px;
        width: 100%;
        display: inherit;
        text-align: center;
        tr,
        td,
        th {
          width: 100%;
        }
      }

      td,
      th {
        height: 3rem;
        max-height: 3rem;
        line-height: 3rem;
      }

      td.onTwoLines > span:last-of-type,
      th.onTwoLines > span:last-of-type {
        padding-top: 0.5rem;
      }

      td.onTwoLines .br,
      th.onTwoLines .br {
        display: block;
        line-height: initial;
      }

      @media (min-width: ${breakpoints.lg}px) {
        td.onTwoLines,
        th.onTwoLines {
          line-height: 1.5rem;
          padding: 1rem;
        }

        td.pretendToBeOnTwoLines,
        th.pretendToBeOnTwoLines {
          line-height: 5rem;
          padding: 0;
        }

        td.onTwoLines .br,
        th.onTwoLines .br {
          display: block;
          line-height: 1.5rem;
        }
      }

      tbody tr td {
        @media (max-width: ${breakpoints.md}px) {
          display: flex;
          justify-content: space-around;

          > span {
            flex: 0 1 50%;
            white-space: nowrap;
            font-size: 14px;
            padding: 0 8px;
          }
          > span:first-of-type {
            text-align: left;
          }

          > span:last-of-type {
            text-align: right;
          }
        }
      }

      &:not(.transparent) tr:not(:first-of-type) {
        td {
          border-top: 1px solid ${props.background === 'dark' ? colors.secondary[1] : colors.secondary[4]};
        }
      }

      &:not(.transparent):after {
        content: '';
        display: block;
        width: 2px;
        height: 32px;
        z-index: 5;
        position: absolute;
        left: 50%;
        margin: 2px auto;
        background: rgb(255, 196, 0);
      }

      ${props.css}
    `}
  >
    {props.children}
  </table>
)

const FeatureIncluded = () => (
  <img
    src={require('../images/shared/icon-check-green.svg')}
    css={css`
      vertical-align: middle;
    `}
  />
)

const PricingPage: GatsbyPage = ({ location }) => (
  <Layout location={location}>
    <PageMetadata
      title="Pricing and Plans | Bearer"
      description="Start building API integration for free! Learn more about our pricing and plans."
    />
    <Page
      css={[
        heroStyles.styleDefaultCurve,
        pricingPageCss,
        css`
          z-index: 12;
        `
      ]}
    >
      <HeroLined
        itemStyle={css`
          &:after {
            height: 74px;
            bottom: -40px;
            @media (max-width: ${breakpoints.lg}px) {
              margin-bottom: 0;
            }
          }
        `}
      >
        <Text
          tag="h1"
          text={
            <>
              Pricing based on your <Clearfix />
              <span
                css={css`
                  color: ${colors.yellow};
                `}
              >
                Integration Needs!
              </span>
            </>
          }
        />
        <div
          css={css`
            &:after {
              content: '';
              display: block;
              position: absolute;
              height: 48px;
              width: 302px;
              background: url(${require('../images/yellow-stapple.svg')}) no-repeat center center / contain;
              left: 208px;
              right: 0;
              top: inherit;
              bottom: -46px;
              margin: auto;

              @media (max-width: ${breakpoints.md}px) {
                display: none;
              }
            }
          `}
        />
      </HeroLined>
      <Tabs
        items={[
          {
            label: 'Community',
            target: '.plan-community',
            default: true
          },
          {
            label: 'Enterprise',
            target: '.plan-enterprise'
          }
        ]}
        style={css`
          @media (min-width: ${breakpoints.md}px) {
            display: none;
          }
        `}
      />
      <Section>
        <div
          css={css`
            position: relative;
            z-index: 12;
          `}
        >
          <Grid
            style={css`
              justify-content: inherit;
              > div {
                display: flex;
                &:first-of-type {
                  flex: 0 1 29%;
                  align-self: flex-start;
                }

                &:nth-of-type(2) {
                  justify-content: center;
                }
                &:nth-of-type(3) {
                  justify-content: flex-start;
                }
              }
            `}
            childrenClassName="mobile-panel"
          >
            <PricingTable
              className="transparent"
              css={css`
                text-align: left;
                top: 140px;
                position: relative;
                p {
                  margin-bottom: 0;
                }

                @media (max-width: ${breakpoints.md}px) {
                  display: none;
                }
              `}
            >
              <tbody>
                <tr>
                  <td>Integrations</td>
                </tr>
                <tr>
                  <td className="pretendToBeOnTwoLines">API Call included</td>
                </tr>
                <tr>
                  <td>Logging</td>
                </tr>
                <tr>
                  <td>Error Handling</td>
                </tr>
                <tr>
                  <td>Webhook</td>
                </tr>
                <tr>
                  <td>Support</td>
                </tr>
                <tr>
                  <td>Data Retention</td>
                </tr>
                <tr>
                  <td>Team Management</td>
                </tr>
                <tr>
                  <td>SLA</td>
                </tr>
                <tr>
                  <td>Additional Usage</td>
                </tr>
              </tbody>
            </PricingTable>

            <div
              className={
                isBrowser()
                  ? window.location.search.replace('?pricing=', '') === 'community' || window.location.search === ''
                    ? 'show'
                    : undefined
                  : ''
              }
            >
              <PricingTable className="first-table">
                <thead>
                  <tr>
                    <th>
                      <Text text="Community" color="#66709A" />

                      <SectionHeading
                        primaryText="Free"
                        tag="h3"
                        style={css`
                          color: ${colors.darkBlue};
                          margin-bottom: 0;

                          > h3 {
                            margin: 0 !important;
                            font-family: 'ProximaNova-Semibold';
                          }
                        `}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="mobile-label">Integrations</span>
                      <span>Unlimited</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="onTwoLines">
                      <span className="mobile-label">API Call included</span>
                      <span>
                        <span className="br">Unlimited for 1 integration</span>
                        <span className="br">2000 per month for others</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Logging</span>

                      <span>
                        <FeatureIncluded />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Error Handling</span>

                      <span>
                        <FeatureIncluded />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Webhook</span>

                      <span>
                        <FeatureIncluded />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Support</span>
                      <span>Chat</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Data Retention</span>
                      <span>7 days</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Team Management</span>
                      <span>
                        <i>Not included</i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">SLA</span>
                      <span>
                        <i>Not included</i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Additional Usage</span>
                      <span>Not available</span>
                    </td>
                  </tr>
                </tbody>
              </PricingTable>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  margin-top: 42px;
                `}
              >
                <SectionHeading
                  primaryText="Start Building Your Integrations!"
                  tag="h3"
                  style={css`
                    & > h3 {
                      margin-top: 0.5rem;
                    }
                    margin-bottom: 0;
                    max-width: 12rem;
                  `}
                />
                <ButtonToDashboard
                  trackLink
                  link={dashboardURL()}
                  text="Start now"
                  trackingAction="pricing-start-now"
                  style={css`
                    margin: 12px auto;
                  `}
                />
                <Small
                  style={css`
                    color: #898b92;
                  `}
                >
                  no credit card required
                </Small>
              </div>
            </div>

            <div
              className={
                isBrowser()
                  ? window.location.search.replace('?pricing=', '') === 'enterprise'
                    ? 'show'
                    : undefined
                  : ''
              }
            >
              <PricingTable background="dark">
                <thead>
                  <tr>
                    <th>
                      <Text text="Enterprise" color={colors.yellow} />
                      <SectionHeading
                        primaryText="Let's Talk"
                        tag="h3"
                        style={css`
                          margin-bottom: 0;

                          > h3 {
                            color: white !important;
                            font-weight: bold;
                            margin: 0 !important;
                            font-family: 'ProximaNova-Semibold';
                          }
                        `}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="mobile-label">Integrations</span>
                      <span>Unlimited</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="pretendToBeOnTwoLines">
                      <span className="mobile-label">API Call included</span>
                      <span>--</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Logging</span>

                      <span>
                        <FeatureIncluded />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Error Handling</span>

                      <span>
                        <FeatureIncluded />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Webhook</span>

                      <span>
                        <FeatureIncluded />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Support</span>
                      <span>Email &amp; Slack support</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Data Retention</span>
                      <span>30 days</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Team Management</span>

                      <span>
                        <FeatureIncluded />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">SLA</span>

                      <span>
                        <FeatureIncluded />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mobile-label">Additional Usage</span>
                      <span>Contact us</span>
                    </td>
                  </tr>
                </tbody>
              </PricingTable>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  margin-top: 42px;
                `}
              >
                <Button
                  link="/demo"
                  text="Contact us"
                  style={css`
                    margin: 12px auto;
                  `}
                />
              </div>
            </div>
          </Grid>
        </div>
      </Section>
    </Page>
  </Layout>
)

export default PricingPage
