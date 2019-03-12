import * as React from 'react'
import Link from '../Link/Link'
import { path } from '../../services/Explore'

import { Configure, connectMenu, Highlight, Hits, InstantSearch, Pagination, SearchBox } from 'react-instantsearch-dom'

interface ISearchProps {
  defaultCategory?: string
  defaultProvider?: string
}

export default class Search extends React.Component<ISearchProps> {
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
    const categoriesAttribute = 'categories.title'
    const providersAttribute = 'providers.title'

    const VirtualMenu = connectMenu(() => null)

    return (
      <div>
        <InstantSearch
          appId={`${process.env.GATSBY_ALGOLIA_APP_ID}`}
          apiKey={`${process.env.GATSBY_ALGOLIA_SEARCH_API_KEY}`}
          indexName={`${process.env.GATSBY_ALGOLIA_INDEX_NAME}`}
        >
          <div>
            {this.props.defaultCategory ? (
              <VirtualMenu attribute={categoriesAttribute} defaultRefinement={this.props.defaultCategory} />
            ) : null}

            {this.props.defaultProvider ? (
              <VirtualMenu attribute={providersAttribute} defaultRefinement={this.props.defaultProvider} />
            ) : null}
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
