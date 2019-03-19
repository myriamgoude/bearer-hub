import * as React from 'react'
import { css } from '@emotion/core'
import { colors } from '../../styles/variables'
import CustomTag from '../CustomTag'

interface ILabelProps {
  text: any
  large?: boolean
}
const Label = (props: ILabelProps) => {
  return (
    <CustomTag
      tag={props.large ? 'h2' : 'h3'}
      css={css`
        font-size: 14px;
        letter-spacing: 0.1px;
        color: ${colors.gray.copy};
        margin: 0;
        padding: 0;
        text-transform: uppercase;
        font-weight: 300;
        margin-bottom: 8px;
      `}
    >
      {props.text}
    </CustomTag>
  )
}

export default Label
