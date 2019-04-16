import * as React from 'react'
import { css } from '@emotion/core'

import { Container, Link, Navigation, Tag } from '../index'
import styles from './Header.style'
import logo from '../../images/logo.svg'

interface IHeaderProps {
  enriched?: boolean
}

const Header = (props: IHeaderProps) => (
  <header css={styles.root}>
    <Container>
      <div css={styles.container}>
        <Link
          to="/"
          css={[
            styles.link,
            css`
              flex: 0 1 10%;
            `
          ]}
        >
          <div
            css={
              props.enriched &&
              css`
                border-bottom-right-radius: 9px;
                border-bottom-left-radius: 9px;
                background-color: #ffffff;
                box-shadow: 0 4px 8px 0 rgba(3, 13, 54, 0.08);
                height: 90px;
                position: absolute;
                top: 0;
                padding: 16px;

                &img {
                  margin-right: 0;
                }
              `
            }
          >
            <img src={logo} css={styles.image} alt="Bearer logo" />

            {props.enriched && (
              <div
                css={css`
                  margin: 8px 0;
                  a {
                    padding: 2px;
                  }
                `}
              >
                <a href="">
                  <Tag text="SVG" color="#1339D7" />
                </a>
                <a href="">
                  <Tag text="PNG" color="#1339D7" />
                </a>
                <a href="">
                  <Tag text="AI" color="#1339D7" />
                </a>
              </div>
            )}
          </div>
        </Link>
        <Navigation
          css={css`
            justify-self: flex-end;
          `}
        />
      </div>
    </Container>
  </header>
)

export default Header
