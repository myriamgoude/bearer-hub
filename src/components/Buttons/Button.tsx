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
  callToAction?: boolean
  secondary?: boolean
  save?: boolean
  className?: string
  onClick?: any
  style?: any
  trackLink?: boolean
  trackingAction?: string
  trackingOptions?: any
}

export default (props: IButtonProps) => {
  const RegularButton = styled.button`
    ${styles.buttonStyle}

    ${props.primary && styles.primaryButton}
    ${props.callToAction && styles.callToActionButton}
    ${props.secondary ? styles.secondaryButton : styles.primaryButton}
    ${props.save && styles.saveButton}
    ${
      props.small
        ? styles.smallButtonDimensions
        : props.medium
        ? styles.mediumButtonDimensions
        : styles.regularButtonDimensions
    }
    ${props.style}
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
