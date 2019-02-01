import * as React from 'react'
import Container from './Container'

interface TIntegration {
  name: string
}

export interface IIntegrationProps { integrations: TIntegration[] }

export class IntegrationPanel extends React.Component<IIntegrationProps, {}> {
  render() {
    return <Container>
      <ul>
        {this.props.integrations.map((integration, index) => (
          <li key={index}>{integration.name}</li>
        ))}
      </ul>
    </Container>
  }
}
