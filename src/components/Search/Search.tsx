import * as React from 'react'
import Link from '../Link/Link'
import { path } from '../../services/Integration'

import {
  ClearRefinements,
  Configure,
  connectMenu,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox
} from 'react-instantsearch-dom'

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
            {this.props.defaultCategory && this.props.defaultProvider ? null : (
              <ClearRefinements
                transformItems={(items: any) => {
                  return items.filter(
                    (item: any) =>
                      this.props.defaultCategory
                        ? item.attribute !== categoriesAttribute // filter items that aren't in the default category
                        : this.props.defaultProvider
                        ? item.attribute !== providersAttribute // filter items that aren't from the default provider
                        : true // don't filter items since there's no default filters set
                  )
                }}
              />
            )}

            {this.props.defaultCategory ? (
              <VirtualMenu attribute={categoriesAttribute} defaultRefinement={this.props.defaultCategory} />
            ) : (
              <>
                <h2>Category</h2>
                <RefinementList attribute={categoriesAttribute} />
              </>
            )}

            {this.props.defaultProvider ? (
              <VirtualMenu attribute={providersAttribute} defaultRefinement={this.props.defaultProvider} />
            ) : (
              <>
                <h2>Provider</h2>
                <RefinementList attribute={providersAttribute} />
              </>
            )}
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
