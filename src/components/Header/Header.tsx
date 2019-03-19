import * as React from 'react'
import { css } from '@emotion/core'

import { Link, Navigation } from '../index'

import styles from './Header.style'

import logo from '../../images/logo.svg'

const Header = () => (
  <header css={styles.root}>
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
      <Navigation
        css={css`
          justify-self: flex-end;
        `}
      />
    </div>
  </header>
)

export default Header
