import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { heights, dimensions, colors } from '../../styles/variables'

import { Link, Navigation } from '../index'

import logo from '../../images/logo.svg'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 1em ${dimensions.containerPadding}rem;
  color: ${colors.black};
  position: relative;
  z-index: 100;
  margin-bottom: -${heights.header}px;
`

const StyledImg = styled.img`
  height: 2rem;
  line-height: 2rem;
  vertical-align: bottom;
  margin-right: 0.5rem;
  width: auto;
`

const Header = () => (
  <StyledHeader>
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        flex-wrap: wrap;
      `}
    >
      <Link
        to="/"
        css={css`
          align-self: flex-start;
          display: flex;
          align-items: center;
          height: 100%;
          flex: 0 1 30%;
          &:hover,
          &:focus {
            text-decoration: none;
          }
        `}
      >
        <StyledImg src={logo} alt="Bearer logo" />
      </Link>
      <div
        css={css`
          justify-self: flex-end;
        `}
      >
        <Navigation />
      </div>
    </div>
  </StyledHeader>
)

export default Header
