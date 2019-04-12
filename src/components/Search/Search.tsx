import * as React from 'react'

import { connectMenu } from 'react-instantsearch-dom'

import { CustomHits } from './components/CustomHits'

interface ISearchProps {
  defaultCategory?: string
}

export default class Search extends React.Component<ISearchProps> {
  render() {
    const categoriesAttribute = 'categories.title'

    const VirtualMenu = connectMenu(() => null)

    return (
      <>
        <CustomHits />
        {this.props.defaultCategory ? (
          <VirtualMenu attribute={categoriesAttribute} defaultRefinement={this.props.defaultCategory} />
        ) : null}
      </>
    )
  }
}
