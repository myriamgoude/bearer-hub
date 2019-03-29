import * as React from 'react'

import { Configure, connectMenu } from 'react-instantsearch-dom'

import { CustomHits } from './components/CustomHits'
import { CustomSearchBox } from './components/CustomSearchBox'

interface ISearchProps {
  defaultCategory?: string
  defaultProvider?: string
}

export default class Search extends React.Component<ISearchProps> {
  render() {
    const categoriesAttribute = 'categories.title'
    const providerAttribute = 'provider.title'

    const VirtualMenu = connectMenu(() => null)

    return (
      <div>
        <div>
          <CustomSearchBox />
          <CustomHits />

          {this.props.defaultCategory ? (
            <VirtualMenu attribute={categoriesAttribute} defaultRefinement={this.props.defaultCategory} />
          ) : null}

          {this.props.defaultProvider ? (
            <VirtualMenu attribute={providerAttribute} defaultRefinement={this.props.defaultProvider} />
          ) : null}
          <Configure hitsPerPage={8} />
        </div>
      </div>
    )
  }
}
