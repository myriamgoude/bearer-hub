import * as React from 'react'
import Link from './Link'
import Container from './Container'

import { path } from '../services/Integration'

interface IIntegrationProps {
  integrations: {
    id: string
    title: string
  }[]
}

export class IntegrationPanel extends React.Component<IIntegrationProps, {}> {
  render() {
    return (
      <Container>
        <ul>
          {this.props.integrations.map((integration, index) => (
            <li key={index}>
              <Link to={`${path(integration)}`}>{integration.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    )
  }
}
