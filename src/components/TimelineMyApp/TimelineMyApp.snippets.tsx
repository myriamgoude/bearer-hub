import { Snippet } from '../CodeSnippets/CodeSnippets'

const timelineCodeSnippet = {
  connectComponent(): Snippet[] {
    return [
      {
        language: 'JS',
        code: `<script src="https://cdn.jsdelivr.net/npm/@bearer/js@0.111.0/lib/bearer.production.min.js"></script>
<script>
var bearer = new Bearer(SETUP_ID, INTEGRATION_NAME)

bearer.connect(myIntegration).then(console.log)
</script>`
      },
      {
        language: 'React',
        code: `import React, { useState } from 'react'
import { render } from 'react-dom'
import { MyIntegration } from './invoke'

// Import Bearer SDK for React
import { Bearer, factory } from '@bearer/react'
const { Connect } = factory('integration-id')

function App() {
  const [authId, setAuthId] = useState('')
  return (
    <Bearer clientId='client-id'>
      {!authId ? (
        <Connect setupId='setup-id' authId={authId}
          onSuccess={data => setAuthId(data.authId }}
          render={({ connect }) => <button onClick={connect}> Connect </button>}
        />
      ) : ( <MyIntegration authId={authId} /> )}
    </Bearer>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)`
      }
    ]
  },

  invokeFunction(): Snippet[] {
    return [
      {
        language: 'JS',
        code: `<script src="https://cdn.jsdelivr.net/npm/@bearer/js@0.111.0/lib/bearer.production.min.js"></script>
<script>
var bearer = new Bearer(SETUP_ID, INTEGRATION_NAME)

bearer
  .invoke("myIntegration", "myFunction")
  .then(({data}) => { console.log(data) })
  .catch(console.error)
</script>`
      },
      {
        language: 'React',
        code: `import React from 'react'
import { BearerContext } from '@bearer/react/lib/bearer-provider'

export class MyIntegration extends React.Component<any, any> {
  static contextType = BearerContext
  context!: React.ContextType<typeof BearerContext>

  constructor(props: any) {
    super(props)
    this.state = { channels: [] }
  }

  componentDidMount() {
    this.context.bearer.invoke('integration-id', 'myFunction')
      .then((data: any) => { this.setState({ channels: data.channels }) })
      .catch(console.error)
  }

  render() => (
    <ul>
      {this.state.channels.map((value: string, index: number) => {
        return <li key={index}>{value}</li>
      })}
    </ul>
  )
}`
      },
      {
        language: 'NodeJS',
        code: `// First install the Bearer SDK
// npm install --save @bearer/node

import { bearer } from '@bearer/nodejs'

bearer.setup(SETUP_ID, INTEGRATION_NAME)
bearer.invoke("{myFunction}" options)`
      },
      {
        language: 'Ruby',
        code: `TODO`
      }
    ]
  }
}

export default timelineCodeSnippet
