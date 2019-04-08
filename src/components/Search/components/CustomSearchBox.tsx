import * as React from 'react'
import { css } from '@emotion/core'
import { connectSearchBox } from 'react-instantsearch-dom'

const searchBoxStyle = css`
  height: 72px;
  width: 512px;
  border: 1px solid #d4d9ea;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(3, 13, 54, 0.49);
  position: absolute;
  top: -250px;
  left: 0;
  right: 0;
  margin: auto;

  input {
    appearance: none;
    width: 100%;
    height: 100%;
    background: transparent url(${require('../../../images/shared/icon-search.svg')}) no-repeat center left 1em / 32px;
    border: none;
    padding: 1em 1em 1em 3.5em;

    &:focus {
      outline-offset: 2px;
    }
  }
`
export const CustomSearchBox = connectSearchBox(({ currentRefinement, refine }: any) => (
  <form noValidate action="" role="search" css={searchBoxStyle} onSubmit={event => event.preventDefault()}>
    <input
      type="search"
      value={currentRefinement}
      placeholder="Search for an API Provider"
      onChange={event => refine(event.currentTarget.value)}
    />
  </form>
))
