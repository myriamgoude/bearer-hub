import * as React from 'react'
import { Link } from 'gatsby'
import Container from './Container'

export interface IIntegration {
  name: string,
  slug: string
}

interface IIntegrationProps { integrations: IIntegration[] }

export class IntegrationPanel extends React.Component<IIntegrationProps, {}> {
  render() {
    return <Container>
      <ul>
        {this.props.integrations.map((integration, index) => (
          <li key={index}><Link to={`/explore/${integration.slug}`} >{integration.name}</Link></li>
        ))}
      </ul>
    </Container>
  }
}
