import * as React from 'react'
import styled from '@emotion/styled'

import Link from '../Link/Link'

import styles from './Button.style'

interface IButtonProps {
  link: string
  text: string
  type?: string
  small?: boolean
  medium?: boolean
  primary?: boolean
  secondary?: boolean
  save?: boolean
  className?: string
  onClick?: any
  trackLink?: boolean
  trackingAction?: string
  trackingOptions?: any
}

const Button = (props: IButtonProps) => {
  const RegularButton = styled.button`
    ${styles.buttonStyle}

    ${props.primary && styles.primaryButton}
    ${props.secondary ? styles.secondaryButton : styles.primaryButton}
    ${props.save && styles.saveButton}
    ${
      props.small
        ? styles.smallButtonDimensions
        : props.medium
        ? styles.mediumButtonDimensions
        : styles.regularButtonDimensions
    }
  `
  const ButtonLink = styled(Link)`
    ${styles.linkStyle}
  `
  return (
    <ButtonLink
      to={props.link}
      onClick={props.onClick}
      trackLink={props.trackLink}
      trackingAction={props.trackingAction}
      trackingOptions={props.trackingOptions}
    >
      <RegularButton>{props.text}</RegularButton>
    </ButtonLink>
  )
}

export default Button
