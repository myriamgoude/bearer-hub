import * as React from 'react'
import { path } from '../../services/Explore'
import Link from '../../components/Link/Link'

interface ISearchListProps {
  selected?: string
  categories: {
    id: string
    title: string
  }[]
  providers: {
    id: string
    title: string
  }[]
}

const SearchList = (props: ISearchListProps) => {
  return (
    <div>
      <h2>Providers</h2>
      <ul>
        {props.providers.map(provider => (
          <li key={provider.id}>
            <Link to={path({ title: provider.title })}>
              {props.selected === provider.id ? 'Selected -> ' : ''}
              {provider.title}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Categories</h2>
      <ul>
        {props.categories.map(category => (
          <li key={category.id}>
            <Link to={path({ title: category.title })}>
              {props.selected === category.id ? 'Selected -> ' : ''}
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchList
