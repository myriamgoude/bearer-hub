import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { isBrowser } from '../../services/Browser'

import styles from './Tabs.style'
import { Grid, Text } from '../index'

interface ITabsProps {
  style?: any
  items: any
}

const Tabs = (props: ITabsProps) => (
  <Grid
    style={styles.root}
    childrenStyle={css`
      flex: 0 1 auto !important;
      margin: 0 8px;
    `}
  >
    {props.items.map((item: any) => (
      <Link
        to={item.path}
        css={[styles.item, isBrowser() && window.location.pathname.indexOf(item.path) === 0 && styles.active]}
      >
        <Text
          text={item.label}
          large
          style={css`
            color: currentColor;
          `}
        />
      </Link>
    ))}
  </Grid>
)
export default Tabs
