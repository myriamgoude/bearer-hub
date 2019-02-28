import * as React from 'react'
import { css, cx } from 'emotion'

import Link from '../Link'
import Text from '../Text'

import styles from './Card.css'

interface ICardProps {
  children?: object
  className?: string
  onClick?: any
  title?: string | any
  text?: any
  icon?: string
  padding?: string
  style?: string | object
  link?: string
  small?: boolean
}

const Card = (props: ICardProps) => {
  return props.link ? (
    <Link
      to={props.link}
      className={cx(
        css`
          &:hover {
            text-decoration: none;
          }
        `
      )}
    >
      <div
        onClick={props.onClick}
        className={cx(
          props.className && props.className,
          styles.root,
          props.padding === 'large' ? styles.paddingLarge : styles.paddingRegular,
          props.small && styles.heightSmall
        )}
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
      className={cx(
        props.className && props.className,
        styles.root,
        props.padding === 'large' ? styles.paddingLarge : styles.paddingRegular,
        props.small && styles.heightSmall
      )}
    >
      {props.icon && <img src={`${props.icon}`} alt={`Icon for ${props.title}`} />}
      {props.title && <h3>{props.title}</h3>}
      {props.text && <Text text={props.text} />}
      {props.children && props.children}
    </div>
  )
}

export default Card
