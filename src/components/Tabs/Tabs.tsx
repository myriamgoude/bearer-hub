import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { isBrowser } from '../../services/Browser'

import styles from './Tabs.style'
import { Grid, Text } from '../index'

interface ITabsProps {
  style?: any
  items: any
  active?: boolean
}

const pageUrl = (label: string) => (isBrowser() ? `${window.location.pathname}?pricing=${label.toLowerCase()}` : null)

const Tabs = (props: ITabsProps) => (
  <Grid
    style={[styles.root, props.style]}
    childrenStyle={css`
      flex: 0 1 auto !important;
      margin: 0 8px;
    `}
  >
    {props.items.map((item: any) => (
      <Link
        key={item.label}
        to={item.path ? item.path : pageUrl(item.label)}
        css={[
          styles.item,
          isBrowser(),
          isBrowser() &&
            (window.location.search.replace('?pricing=', '') === item.label.toLowerCase() ||
              (window.location.search === '' && item.default)) &&
            styles.active,
          props.active && styles.active
        ]}
        partiallyActive
        activeClassName="active"
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
