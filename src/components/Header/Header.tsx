import * as React from 'react'
import styled from '@emotion/styled'
import { heights, dimensions, colors } from '../../styles/variables'
import Container from '../Container/Container'
import Navigation from '../Navigation/Navigation'
import Link from '../Link/Link'

import logo from '../../images/logo.svg'
import { css } from '@emotion/core'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 1em ${dimensions.containerPadding}rem;
  color: ${colors.black};
  position: relative;
  z-index: 10;
  margin-bottom: -${heights.header}px;
`

const StyledImg = styled.img`
  height: 2rem;
  line-height: 2rem;
  vertical-align: bottom;
  margin-right: 0.5rem;
  width: auto;
`

const HomepageLink = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Header = () => (
  <StyledHeader>
    <Container
      flex
      flexDirection="row"
      css={css`
        justify-content: space-between;
        align-items: center;
        height: 100%;
        flex-wrap: wrap;
      `}
    >
      <HomepageLink
        to="/"
        css={css`
          align-self: flex-start;
          display: flex;
          align-items: center;
          height: 100%;
          flex: 0 1 30%;
        `}
      >
        <StyledImg src={logo} alt="Bearer logo" />
      </HomepageLink>
      <div
        css={css`
          justify-self: flex-end;
        `}
      >
        <Navigation />
      </div>
    </Container>
  </StyledHeader>
)

export default Header
