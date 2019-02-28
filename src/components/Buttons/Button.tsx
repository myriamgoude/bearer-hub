import * as React from 'react'
import { css, cx } from 'emotion'
import Link from '../Link/Link'

import { colors } from '../../styles/variables'
import { getEmSize } from '../../styles/mixins'

const buttonStyle = css`
  border-radius: 4px;
  appearance: none;
  border: 0;
  cursor: pointer;
  font-weight: 600;
`

const linkStyle = css`
  & + a {
    margin-left: ${getEmSize(8)};
  }
`

const regularButtonDimensions = css`
  height: 48px;
  line-height: 48px;
  padding: 0 ${getEmSize(24)};
`
const mediumButtonDimensions = css`
  height: 40px;
  line-height: 40px;
  padding: 0 ${getEmSize(18)};
`
const smallButtonDimensions = css`
  height: 32px;
  line-height: 32px;
  padding: 0 ${getEmSize(16)};
`

const primaryButton = css`
  background-color: ${colors.branded.primary[1]};
  color: ${colors.branded.secondary[0]};

  &:hover {
    background-color: ${colors.branded.primary[0]};
  }
`
const secondaryButton = css`
  background-color: ${colors.branded.secondary[0]};
  color: ${colors.white};

  &:hover {
    background-color: ${colors.branded.secondary[1]};
  }
`
const saveButton = css`
  background-color: ${colors.branded.accent[0]};
  color: ${colors.white};

  &:hover {
    background-color: ${colors.branded.accent[1]};
  }
`

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
}

const Button = (props: IButtonProps) => {
  const buttonClass = cx(
    props.primary
      ? cx(buttonStyle, primaryButton)
      : props.secondary
      ? cx(buttonStyle, secondaryButton)
      : props.save
      ? cx(buttonStyle, saveButton)
      : cx(buttonStyle, primaryButton),
    props.small ? cx(smallButtonDimensions) : props.medium ? cx(mediumButtonDimensions) : cx(regularButtonDimensions)
  )

  return (
    <Link to={props.link} onClick={props.onClick} className={cx(linkStyle, props.className)}>
      <button className={buttonClass}>{props.text}</button>
    </Link>
  )
}

export default Button
