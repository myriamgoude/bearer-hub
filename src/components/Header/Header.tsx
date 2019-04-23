import * as React from 'react'
import { css } from '@emotion/core'

import { Container, Link, Navigation, Tag } from '../index'
import styles from './Header.style'
import logo from '../../images/logo.svg'

interface IHeaderProps {
  enriched?: boolean
}

const Header = (props: IHeaderProps) => (
  <header css={styles.root}>
    <Container>
      <div css={styles.container}>
        <Link
          to="/"
          css={[
            styles.link,
            css`
              flex: 0 1 10%;
            `
          ]}
        >
          <img src={logo} css={styles.image} alt="Bearer logo" />
        </Link>
        {props.enriched && (
          <div css={styles.enriched}>
            <Link to="https://drive.google.com/uc?export=download&id=18YAFKw5iNjSW8r4BS_jjLMhi0yd-LSIR">
              <Tag text="SVG" color="#1339D7" />
            </Link>
            <Link to="https://drive.google.com/uc?export=download&id=1b3qgDifFZkDfqI-8JYyjD3FczQe9oWtV">
              <Tag text="PNG" color="#1339D7" />
            </Link>
            <Link to="https://drive.google.com/uc?export=download&id=1StsAImd9OMqE5Ul1K2in9sCuwPmAZD8x">
              <Tag text="PDF" color="#1339D7" />
            </Link>
          </div>
        )}
        <Navigation />
      </div>
    </Container>
  </header>
)

export default Header
