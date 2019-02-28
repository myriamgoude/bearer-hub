import * as React from 'react'
import { Global, css } from '@emotion/core'

import styled from '@emotion/styled'
import normalize from '../../styles/normalize'
import global from '../../styles/global'
import fonts from '../../styles/fonts'
import spacing from '../../styles/spacings'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global
      styles={css`
        ${[normalize, global, fonts, spacing]};
      `}
    />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
)

export default LayoutRoot
