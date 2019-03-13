import React from 'react'
import RCTooltip from 'rc-tooltip'

import 'rc-tooltip/assets/bootstrap.css'
import styles from './Tooltip.style'

interface ITooltipProps {
  children: any
  content: any
  description: any
  placement: string
  trigger: any
  overlay: any
}

const Tooltip = (props: ITooltipProps) => (
  <RCTooltip
    id={props.description}
    overlay={props.description}
    placement={props.placement}
    trigger={props.trigger}
    css={styles.root}
  >
    <span aria-describedby={props.description}>{props.children}</span>
  </RCTooltip>
)

Tooltip.defaultProps = {
  placement: 'right',
  trigger: ['focus', 'hover']
}

export default Tooltip
