import * as React from 'react'
import renderer from 'react-test-renderer'
import Search from '../Search'
import { InstantSearch } from 'react-instantsearch-dom'

const searchClient = {
  async search(requests: any) {
    return {
      results: requests.map(() => {
        // faking the return so we can render
        return {
          processingTimeMS: 0,
          nbHits: 0,
          hits: [],
          facets: {}
        }
      })
    }
  },
  async searchForFacetValues(requests: any) {
    return {
      results: requests.map(() => {
        return {}
      })
    }
  }
}

describe('Search', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        // @ts-ignore typings say apiKey & appId are required, but they aren't
        <InstantSearch indexName="test" searchClient={searchClient}>
          <Search />
        </InstantSearch>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
