import React from 'react'
import { css } from '@emotion/core'
import { Section, Grid, SectionHeading, Button } from '../index'
import styles from './SectionCTA.style'

const SectionCTA = () => {
  return (
    <div
      css={[
        styles.root,
        css`
          height: 600px;
        `
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
              <SectionHeading primaryText="Looking to build your own Native Integration?" align="left" />
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
                top: 0;
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
