import * as React from 'react'
import styled from '@emotion/styled'
import { heights, dimensions, colors } from '../../styles/variables'
import Container from '../Container/Container'
import Navigation from '../Navigation/Navigation'
import Link from '../Link/Link'

import logo from '../../images/logo.svg'
import { cx, css } from 'emotion'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
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
      flexDirection="column"
      className={cx(
        css`
          justify-content: center;
          align-items: center;
          height: 100%;
          flex-wrap: wrap;
        `
      )}
    >
      <HomepageLink
        to="/"
        className={cx(
          css`
            align-self: flex-start;
          `
        )}
      >
        <StyledImg src={logo} alt="Bearer logo" />
      </HomepageLink>
      <div
        className={cx(
          css`
            justify-self: flex-end;
            display: flex;
          `
        )}
      >
        <Navigation />
      </div>
    </Container>
  </StyledHeader>
)

export default Header
