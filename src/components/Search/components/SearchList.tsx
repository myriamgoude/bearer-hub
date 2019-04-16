import * as React from 'react'
import { navigate } from 'gatsby'

import { css } from '@emotion/core'
import { categoryPath } from '../../../services/Explore'
import { Label, Link } from '../../index'
import { colors, breakpoints } from '../../../styles/variables'

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

  .component-select {
    display: none;
  }

  select {
    appearance: none;
    background: transparent;
    border: none;
    color: #030d36;
    font-family: 'Proxima Nova';
    font-size: 16px;
    font-weight: 600;
  }

  @media (max-width: ${breakpoints.lg}px) {
    border: none;
    box-shadow: none;
    padding: 0;
    margin: 16px 0;
    position: relative;

    .component-select {
      display: block;
    }
    .component-list {
      display: none;
    }
  }
`
const navLinkStyle = css`
  color: #030d36;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.13px;
  line-height: 19px;
  margin-bottom: 8px;
`

export const SearchList = (props: ISearchListProps) => {
  const showOptions = (s: any) => {
    if (s[s.selectedIndex].value === 'All') {
      navigate('/integrations')
    } else {
      navigate(categoryPath({ hubID: s[s.selectedIndex].id, title: s[s.selectedIndex].value }))
    }
  }

  const caretDown = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        css={css`
          width: 12px;
          display: inline - block;
        `}
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    )
  }

  return (
    <nav css={navStyle}>
      <section
        itemScope
        itemType="http://schema.org/Thing"
        css={css`
          margin-top: 16px;
        `}
      >
        <div className="component-select">
          <Label text="Sort by categories" />

          <select
            onChange={e => {
              showOptions(e.target)
            }}
          >
            <option key={0} value={'All'} id={'0'} selected={props.selected ? false : true}>
              All
            </option>
            {props.categories.map(category => (
              <option
                key={category.id}
                value={category.title}
                id={category.hubID}
                selected={props.selected === category.id}
              >
                {category.title}
              </option>
            ))}
          </select>
          {caretDown()}
        </div>
        <div className="component-list">
          <Label text="Categories" />
          <ul>
            <li key={0}>
              <Link
                to="/integrations"
                css={navLinkStyle}
                style={
                  !props.selected ? { borderBottom: `1px dashed ${colors.gray.dark}` } : { color: colors.darkBlue }
                }
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
        </div>
      </section>
    </nav>
  )
}
