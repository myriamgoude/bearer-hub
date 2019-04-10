import * as React from 'react'
import { css } from '@emotion/core'

import Link from '../Link'
import Text from '../Text'

import styles from './Card.style'

interface ICardProps {
  children?: object
  className?: any
  title?: string | any
  heading?: {
    src: string
    alt: string
    text: string
  }
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
  itemProp?: string
  itemScope?: boolean
  itemType?: string
}

const CardBox = (props: ICardProps) => (
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

const Card = (props: ICardProps) => {
  return props.link ? (
    <Link
      itemScope
      itemType={props.itemType}
      itemProp="url"
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
      {CardBox(props)}
    </Link>
  ) : (
    CardBox(props)
  )
}

export default Card
