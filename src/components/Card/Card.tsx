import * as React from 'react'
import { css } from '@emotion/core'

import Link from '../Link'
import Text from '../Text'

import styles from './Card.style'

interface ICardProps {
  children?: object
  className?: any
  onClick?: any
  title?: string | any
  text?: any
  icon?: string
  padding?: string
  style?: string | object
  link?: string
  small?: boolean
  css?: any
}

const Card = (props: ICardProps) => {
  return props.link ? (
    <Link
      to={props.link}
      css={css`
        &:hover {
          text-decoration: none;
        }
      `}
    >
      <div
        onClick={props.onClick}
        css={[
          props.className && props.className,
          styles.root,
          props.padding === 'large' ? styles.paddingLarge : styles.paddingRegular,
          props.small && styles.heightSmall,
          props.css && props.css
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
      onClick={props.onClick}
      css={[
        props.className && props.className,
        styles.root,
        props.padding === 'large' ? styles.paddingLarge : styles.paddingRegular,
        props.small && styles.heightSmall,
        props.css && props.css
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
