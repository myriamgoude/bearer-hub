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
import { breakpoints, colors } from '../styles/variables'
import { getEmSize } from '../styles/mixins'
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
          height: 47px;
          position: absolute;
          left: 0;
          right: 0;
          top: calc(-47px - 64px);
          margin: auto;
          background: ${colors.yellow};
          z-index: 5;
        }

        &:after {
          top: inherit;
          height: 32px;
          bottom: -32px;
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

const PricingPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="Pricing" />
    <Page>
      <div
        css={[
          heroStyles.styleBackgroundHowItWorks,
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
      </div>
      <Section
        style={css`
          top: -200px;
          &:after {
            display: block;
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            background: url(${require('../images/curve-about.svg')}) no-repeat center bottom / 100%;
            top: -40px;
            height: 300px;
            user-select: none;
            pointer-events: none;
            z-index: 5;

            @media (min-width: ${getEmSize(breakpoints.xl)}) {
              top: -40px;
            }

            @media (min-width: ${getEmSize(breakpoints.md)}) {
              top: -60px;
            }
          }
        `}
      >
        <div
          css={css`
            position: relative;
            z-index: 12;
            top: -80px;
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
                <td>
                  <Text text="Integrations" />
                </td>
              </tr>
              <tr>
                <td>
                  <Text text="Watermark" />
                </td>
              </tr>
              <tr>
                <td>
                  <Text text="Data retention" />
                </td>
              </tr>
              <tr>
                <td>
                  <Text text="Support" />
                </td>
              </tr>
              <tr>
                <td>
                  <Text text="Analytics" />
                </td>
              </tr>
              <tr>
                <td>
                  <Text text="Team management" />
                </td>
              </tr>
              <tr>
                <td>
                  <Text text="Monthly usage included" />
                </td>
              </tr>
              <tr>
                <td>
                  <Text text="Additional usage" />
                </td>
              </tr>
            </PricingTable>

            <div>
              <PricingTable className="first-table">
                <div
                  css={css`
                    display: block;
                    width: 340px;
                    height: 2px;
                    position: absolute;
                    left: 50%;
                    right: 0;
                    top: calc(-47px - 64px);
                    margin-top: auto;
                    background: ${colors.yellow};
                    z-index: 5;
                  `}
                />
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
                <tr>
                  <td>10</td>
                </tr>
                <tr>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>24 hours</td>
                </tr>
                <tr>
                  <td />
                </tr>
                <tr>
                  <td />
                </tr>
                <tr>
                  <td />
                </tr>
                <tr>
                  <td>
                    <b>1,000 MTU</b>
                  </td>
                </tr>
                <tr>
                  <td>Not available</td>
                </tr>
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
                  primaryText="Add integration today!"
                  tag="h3"
                  style={css`
                    margin-bottom: 0;
                  `}
                />
                <Button
                  link="#"
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
                      <Text text="Business" color={colors.yellow} />
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
                <tr>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>30 Days</td>
                </tr>
                <tr>
                  <td>Email &amp; Phone support</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require('../images/shared/icon-check-green.svg')}
                      css={css`
                        vertical-align: middle;
                      `}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require('../images/shared/icon-check-green.svg')}
                      css={css`
                        vertical-align: middle;
                      `}
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                </tr>
                <tr>
                  <td>Contact Us</td>
                </tr>
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
                  link="#"
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
