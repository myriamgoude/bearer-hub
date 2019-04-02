import * as React from 'react'
import { css } from '@emotion/core'

import Link from '../Link'
import Text from '../Text'

import styles from './Card.style'

interface ICardProps {
  children?: object
  className?: any
  title?: string | any
  text?: any
  icon?: string
  padding?: string
  style?: any
  link?: string
  small?: boolean
  css?: any
  trackLink?: boolean
  trackingAction?: string
  trackingOptions?: any
}

const Card = (props: ICardProps) => {
  return props.link ? (
    <Link
      to={props.link}
      trackLink={props.trackLink}
      trackingAction={props.trackingAction}
      trackingOptions={props.trackingOptions}
      css={css`
        &:hover {
          text-decoration: none;
        }
      `}
    >
      <div
        css={[
          props.className && props.className,
          styles.root,
          props.padding === 'large' ? styles.paddingLarge : styles.paddingRegular,
          props.small && styles.heightSmall,
          props.style && props.style
        ]}
      >
        {props.icon && <img src={`${props.icon}`} alt={`Icon for ${props.title}`} />}
        {props.title && <h3>{props.title}</h3>}
        {props.text && <Text text={props.text} />}
        {props.children && props.children}
      </div>
    </Link>
  ) : (
    <div
      css={[
        props.className && props.className,
        styles.root,
        props.padding === 'large' ? styles.paddingLarge : styles.paddingRegular,
        props.small && styles.heightSmall,
        props.style && props.style
      ]}
    >
      {props.icon && <img src={`${props.icon}`} alt={`Icon for ${props.title}`} />}
      {props.title && <h3>{props.title}</h3>}
      {props.text && <Text text={props.text} />}
      {props.children && props.children}
    </div>
  )
}

export default Card
