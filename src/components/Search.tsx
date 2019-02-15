import * as React from 'react'
import Link from './Link'
import { path } from '../services/Integration'

import {
  ClearRefinements,
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox
} from 'react-instantsearch-dom'

export default class Search extends React.Component {
  hit({ hit }: any) {
    return (
      <Link to={`${path({ id: hit.id, title: hit.title })}`}>
        <div>
          <h4>
            <Highlight attribute="title" hit={hit} />
          </h4>
        </div>
      </Link>
    )
  }

  render() {
    return (
      <div>
        <InstantSearch
          appId={`${process.env.GATSBY_ALGOLIA_APP_ID}`}
          apiKey={`${process.env.GATSBY_ALGOLIA_SEARCH_API_KEY}`}
          indexName={`${process.env.GATSBY_ALGOLIA_INDEX_NAME}`}
        >
          <div>
            <ClearRefinements />
            <h2>Category</h2>
            <RefinementList attribute="categories.title" />
            <h2>Provider</h2>
            <RefinementList attribute="providers.title" />
            <Configure hitsPerPage={8} />
          </div>
          <div>
            <SearchBox />
            <Hits hitComponent={this.hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    )
  }
}
