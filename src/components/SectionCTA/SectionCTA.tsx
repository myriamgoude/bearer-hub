import React from 'react'
import { css } from '@emotion/core'
import { Section, Grid, SectionHeading, Button, Text, Clearfix } from '../index'
import styles from './SectionCTA.style'

interface ISectionCTAProps {
  integrationsCta?: boolean
  style?: any
}

const SectionCTA = (props: ISectionCTAProps) => {
  return props.integrationsCta ? (
    <div
      css={[
        styles.rootIntegrations,
        props.style && props.style,
        css`
          height: auto;
        `
      ]}
    >
      <Section
        css={[
          css`
            padding: 200px 0 !important;
          `
        ]}
      >
        <Grid fullWidth>
          <div>
            <div
              css={css`
                position: relative;
                top: 100px;
              `}
            >
              {' '}
              <SectionHeading primaryText="All our integrations" align="left" />
              <Text>
                We offer powerful integrations that cover most of providers and business usages. Discover our scenarios
                and get started now
              </Text>
              <Button primary link="#" text="Browse all our integrations" />
            </div>
          </div>
          <div>
            <object
              css={css`
                display: block;
                position: relative;
                width: 100%;
                height: 300px;
                top: 0;
              `}
            >
              <img
                src={require('../../images/shared/integrations-bubble.svg')}
                css={css`
                  height: 700px;
                  width: 100%;
                  position: absolute;
                  left: 0;
                  right: 0;
                  margin: auto;
                  top: -50%;
                `}
                alt=""
              />
            </object>
          </div>
        </Grid>
      </Section>
    </div>
  ) : (
    <div
      css={[
        styles.root,
        css`
          height: 700px;
        `,
        props.style && props.style
      ]}
    >
      <Section withTail>
        <Grid fullWidth>
          <div>
            <div
              css={css`
                position: relative;
                top: 100px;
              `}
            >
              {' '}
              <SectionHeading
                primaryText={
                  <>
                    Looking to build your own <Clearfix /> Native Integration?
                  </>
                }
                align="left"
                css={css`
                  margin-bottom: 44px;
                `}
              />
              <Button primary link="/contact" text="Get in touch" />
            </div>
          </div>
          <div>
            <object
              css={css`
                display: block;
                position: relative;
                width: 100%;
                height: 300px;
                top: 40px;
              `}
            >
              <img
                src={require('../../images/shared/cta-illu.svg')}
                css={css`
                  height: 700px;
                  width: 100%;
                  position: absolute;
                  left: 0;
                  right: 0;
                  margin: auto;
                  top: -50%;
                `}
                alt=""
              />
            </object>
          </div>
        </Grid>
      </Section>
    </div>
  )
}

export default SectionCTA
