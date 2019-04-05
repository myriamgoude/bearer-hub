import * as React from 'react'
import { css } from '@emotion/core'
import { categoryPath } from '../../../services/Explore'
import { Label, Link } from '../../index'
import { colors } from '../../../styles/variables'

interface ISearchListProps {
  selected?: string
  categories: {
    id: string
    hubID: string
    title: string
  }[]
}

const navStyle = css`
  border: 1px solid #d4d7e4;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(3, 13, 54, 0.14);
  padding: 32px;
  position: sticky;
  top: 16px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
const navLinkStyle = css`
  color: #030d36;
  font-family: 'Proxima Nova';
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.13px;
  line-height: 19px;
  margin-bottom: 8px;
`

export const SearchList = (props: ISearchListProps) => {
  return (
    <nav css={navStyle}>
      <section
        css={css`
          margin-top: 16px;
        `}
      >
        <Label text="Categories" />
        <ul>
          <li key={0}>
            <Link
              to="/integrations"
              css={navLinkStyle}
              style={!props.selected ? { borderBottom: `1px dashed ${colors.gray.dark}` } : { color: colors.darkBlue }}
            >
              All
            </Link>
          </li>
          {props.categories.map(category => (
            <li key={category.id}>
              <Link
                to={categoryPath({ hubID: category.hubID, title: category.title })}
                css={navLinkStyle}
                style={
                  props.selected === category.id
                    ? { borderBottom: `1px dashed ${colors.gray.dark}` }
                    : { color: colors.darkBlue }
                }
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}
