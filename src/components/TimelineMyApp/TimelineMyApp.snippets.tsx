import { Snippet } from '../CodeSnippets/CodeSnippets'

const timelineCodeSnippet = {
  connectComponent(): Snippet[] {
    return [
      {
        language: 'JS',
        code: `<script src="https://cdn.jsdelivr.net/npm/@bearer/js/lib/bearer.production.min.js"></script>
<script>
const bearerClient = bearer('BEARER_CLIENT_ID')

bearerClient.connect(
  'INTEGRATION_UUID', 
  'YOUR_SETUP_ID', 
  { authId: 'YOUR_USER_IDENTIFIER' }
)
</script>`
      },
      {
        language: 'React',
        code: `import * as React from "react"
import { factory } from "@bearer/react"
import { BearerContext } from "@bearer/react/lib/bearer-provider"

const { Connect } = factory(INTEGRATION_UUID);

const MyComponent = () => { 
  const [authId, setAuthId] = React.useState();

  return (
    <Connect authId={YOUR_USER_IDENTIFIER} setupId={YOUR_SETUP_ID} 
      onSuccess={data => {
        setAuthId(data.authId);
      }}
      render={({ connect }) => {
        return (
          <button onClick={connect}>Connect</button>
        )
      }}
    />
  )
}`
      }
    ]
  },

  invokeFunction(): Snippet[] {
    return [
      {
        language: 'JS',
        code: `<script src="https://cdn.jsdelivr.net/npm/@bearer/js/lib/bearer.production.min.js"></script>
<script>
const bearerClient = bearer('BEARER_CLIENT_ID')

bearerClient.invoke('INTEGRATION_UUID', 'FUNCTION_NAME', {
  query: { params: 'value' }
})
  .then(() => {
    console.log('Successfully invoked function')
  })
  .catch(() => {
    console.log('Something went wrong')
  })
</script>`
      },
      {
        language: 'React',
        code: `import * as React from 'react'
import { Bearer } from "@bearer/react"

const App = () => 
  <Bearer clientId="BEARER_CLIENT_ID">
    <MyComponent />
  </Bearer>

const MyComponent = () => { 
  const context = useContext(BearerContext);
  const handleClick = (e: any) => {
    context.bearer
      .invoke("INTEGRATION_UUID", "FUNCTION_NAME", { query: { params: "value" } })
      .then(data => { console.log(data) })
      .catch(console.error);
  }
  
  return (
    <button type="button" onClick={this.handleClick}>Click Me</button>
  )
}`
      },
      {
        language: 'NodeJS',
        code: `import bearer from '@bearer/node'

const bearerClient = bearer(process.env.BEARER_API_KEY)

bearerClient.invoke('INTEGRATION_UUID', 'FUNCTION_NAME', {
  query: { params: 'value' }
})
  .then(() => {
    console.log('Successfully invoked function')
  })
  .catch(() => {
    console.log('Something went wrong')
  })`
      },
      {
        language: 'Ruby',
        code: `Bearer::Configuration.setup do |config|
  config.api_key = BEARER_API_KEY
end

Bearer.invoke(
  "INTEGRATION_UUID", 
  "FUNCTION_NAME", 
  params: { params: "value" }
)`
      }
    ]
  }
}

export default timelineCodeSnippet
