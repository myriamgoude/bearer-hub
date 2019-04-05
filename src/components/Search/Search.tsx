import * as React from 'react'

import { Configure, connectMenu } from 'react-instantsearch-dom'

import { CustomHits } from './components/CustomHits'
import { CustomSearchBox } from './components/CustomSearchBox'

interface ISearchProps {
  defaultCategory?: string
}

export default class Search extends React.Component<ISearchProps> {
  render() {
    const categoriesAttribute = 'categories.title'

    const VirtualMenu = connectMenu(() => null)

    return (
      <div>
        <div>
          <CustomSearchBox />
          <CustomHits />
          {this.props.defaultCategory ? (
            <VirtualMenu attribute={categoriesAttribute} defaultRefinement={this.props.defaultCategory} />
          ) : null}
          <Configure hitsPerPage={8} />
        </div>
      </div>
    )
  }
}
