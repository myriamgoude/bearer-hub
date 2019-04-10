import * as React from 'react'
import IndexLayout from '../layouts'
import { css } from '@emotion/core'
import { Button, HeroLined, Page, PageMetadata, Grid } from '../components/'

const NotFoundPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="404 Page not found" />
    <Page>
      <HeroLined>
        <Grid
          css={css`
            text-align: center;
          `}
        >
          <div>
            <h2>404: Page not found</h2>
            <h1>Oops, this page has been move or doesn't exist anymore</h1>
            <Button primary link="/integrations" text="Explore templates" />
          </div>
          <div>
            <svg width="485" height="331" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter x="-1.3%" y="-2.3%" width="102.6%" height="104.5%" filterUnits="objectBoundingBox" id="a">
                  <feGaussianBlur stdDeviation="1" in="SourceGraphic" />
                </filter>
                <filter x="-2.6%" y="-2.7%" width="105.3%" height="105.3%" filterUnits="objectBoundingBox" id="b">
                  <feGaussianBlur stdDeviation="1" in="SourceGraphic" />
                </filter>
                <filter x="-2.6%" y="-2.7%" width="105.3%" height="105.3%" filterUnits="objectBoundingBox" id="c">
                  <feGaussianBlur stdDeviation="1" in="SourceGraphic" />
                </filter>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path fill="#DC4C4C" opacity=".7688" filter="url(#a)" d="M128 186l114.5-66L357 186l-114.5 66L128 186" />
                <path fill="#E3E8FF" d="M1 67v46.6336L115 180v-46.6336L1 67M1 218v46.6336L115 331v-46.6336L1 218" />
                <path fill="#EF8080" opacity=".7688" filter="url(#b)" d="M129 186v46.6336L243 299v-46.6336L129 186" />
                <path fill="#841818" opacity=".7688" filter="url(#c)" d="M356 232.6336V186l-114 66.3664V299z" />
                <path fill="#CCD6FF" d="M0 67L114.5 1 229 67l-114.5 66L0 67" />
                <path fill="#909ED9" d="M228 113.6336V67l-114 66.3664V180z" />
                <path fill="#CCD6FF" d="M256 66L370.5 0 485 66l-114.5 66L256 66" />
                <path fill="#E3E8FF" d="M257 66v46.6336L371 179v-46.6336L257 66" />
                <path fill="#909ED9" d="M484 112.6336V66l-114 66.3664V179z" />
                <path fill="#CCD6FF" d="M256 218l114.5-66L485 218l-114.5 66L256 218" />
                <path fill="#E3E8FF" d="M257 218v46.6336L371 331v-46.6336L257 218" />
                <path fill="#909ED9" d="M484 264.6336V218l-114 66.3664V331z" />
                <path fill="#CCD6FF" d="M0 218l114.5-66L229 218l-114.5 66L0 218" />
                <path fill="#909ED9" d="M228 264.6336V218l-114 66.3664V331z" />
              </g>
            </svg>
          </div>
        </Grid>
      </HeroLined>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
