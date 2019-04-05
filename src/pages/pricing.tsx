import * as React from 'react'
import { css } from '@emotion/core'

import {
  Button,
  Page,
  PageMetadata,
  HeroLined,
  Text,
  Clearfix,
  Section,
  Grid,
  SectionHeading,
  Small
} from '../components/'
import IndexLayout from '../layouts'
import { colors } from '../styles/variables'
import heroStyles from '../components/HeroPanel/HeroPanel.style'

const PricingTable = (props: any) => (
  <table
    className={`pricing-table ${props.className}`}
    css={css`
      &:not(.transparent) {
        width: 244px;
        background: ${props.background === 'dark' ? colors.darkBlue : 'white'};
        appearance: none;
        border: none !important;
        box-shadow: 0 4px 12px 0 rgba(3, 13, 54, 0.08);
        color: ${props.background === 'dark' ? 'white' : '#313958'};
        border-radius: 8px;
        text-align: center;

        &:before,
        &:after {
          content: '';
          display: block;
          width: 2px;
          left: 50%;
          position: absolute;
          z-index: 5;
          content: '';
          background: ${colors.yellow};
        }

        &:after {
          top: inherit;
          height: 2rem;
          bottom: -2rem;
        }

        &:before {
          top: -5rem;
          height: 3rem;
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
        height: 45px;
        line-height: 45px;
      }

      &:not(.transparent) tr:not(:first-child) {
        td {
          border-top: 1px solid ${props.background === 'dark' ? colors.secondary[1] : colors.secondary[4]};
        }
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
  <IndexLayout location={location}>
    <PageMetadata title="Pricing" />
    <Page
      css={[
        heroStyles.styleDefaultCurve,
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
                Integration Success
              </span>
            </>
          }
        />
      </HeroLined>
      <Section>
        <div
          css={css`
            position: relative;
            z-index: 12;
          `}
        >
          <Grid>
            <PricingTable
              className="transparent"
              css={css`
                text-align: left;
                padding-top: 140px;

                p {
                  margin-bottom: 0;
                }
              `}
            >
              <tr>
                <td>Integrations</td>
              </tr>
              <tr>
                <td>API Call included</td>
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
            </PricingTable>

            <div>
              <div
                css={css`
                  display: block;
                  width: 340px;
                  height: 2px;
                  background: ${colors.yellow};
                  position: absolute;
                  left: 50%;
                  right: 0;
                  top: calc(-1rem - 4rem);
                  margin-top: auto;
                  z-index: 5;
                `}
              />
              <PricingTable className="first-table">
                <thead>
                  <tr>
                    <th>
                      <Text text="Community" color="#66709A" />
                    </th>
                  </tr>
                  <tr>
                    <th>
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
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Unlimited for 1 Integration</td>
                  </tr>
                  <tr>
                    <td>
                      <FeatureIncluded />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FeatureIncluded />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FeatureIncluded />
                    </td>
                  </tr>
                  <tr>
                    <td>Chat</td>
                  </tr>
                  <tr>
                    <td>7 days</td>
                  </tr>
                  <tr>
                    <td />
                  </tr>
                  <tr>
                    <td />
                  </tr>
                  <tr>
                    <td>Not available</td>
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
                  primaryText="Start Building Integrations!"
                  tag="h3"
                  style={css`
                    margin-bottom: 0;
                    max-width: 10rem;
                  `}
                />
                <Button
                  trackLink
                  link="https://app.bearer.sh"
                  text="Start now"
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

            <div>
              <PricingTable background="dark">
                <thead>
                  <tr>
                    <th>
                      <Text text="Enterprise" color={colors.yellow} />
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <SectionHeading
                        primaryText="Let's talk"
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
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>
                      <FeatureIncluded />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FeatureIncluded />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FeatureIncluded />
                    </td>
                  </tr>
                  <tr>
                    <td>Email &amp; Phone support</td>
                  </tr>
                  <tr>
                    <td>30 days</td>
                  </tr>
                  <tr>
                    <td>
                      <FeatureIncluded />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FeatureIncluded />
                    </td>
                  </tr>
                  <tr>
                    <td>Contact us</td>
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
                  link="?contact-us"
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
  </IndexLayout>
)

export default PricingPage
