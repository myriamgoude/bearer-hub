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
            <a target="_blank" href="https://drive.google.com/drive/folders/1NfLHbVsjDonkt9wrysrnQCuP0tD5CGh-">
              <Tag text="SVG" color="#1339D7" />
            </a>
            <a target="_blank" href="https://drive.google.com/drive/folders/1NfLHbVsjDonkt9wrysrnQCuP0tD5CGh-">
              <Tag text="PNG" color="#1339D7" />
            </a>
            <a target="_blank" href="https://drive.google.com/drive/folders/1NfLHbVsjDonkt9wrysrnQCuP0tD5CGh-">
              <Tag text="AI" color="#1339D7" />
            </a>
          </div>
        )}
        <Navigation />
      </div>
    </Container>
  </header>
)

export default Header
