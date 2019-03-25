import React from 'react'
import RCTooltip from 'rc-tooltip'

import 'rc-tooltip/assets/bootstrap.css'
import styles from './Tooltip.style'

import tooltipImg from '../../images/shared/icon-question.svg'

interface ITooltipProps {
  content: string
  placement: string
  trigger: any
}

const Tooltip = (props: ITooltipProps) => (
  <RCTooltip
    id={props.content}
    overlay={props.content}
    placement={props.placement}
    trigger={props.trigger}
    css={styles.root}
  >
    <span aria-describedby={props.content}>
      <img src={tooltipImg} />
    </span>
  </RCTooltip>
)

Tooltip.defaultProps = {
  placement: 'right',
  trigger: ['focus', 'hover']
}

export default Tooltip
