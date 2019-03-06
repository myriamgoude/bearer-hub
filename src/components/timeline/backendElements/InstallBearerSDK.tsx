import * as React from 'react'
import CodeSnippet from '../CodeSnippet'

const InstallBearerSDK = () => (
  <>
    <h4>Install the Bearer SDK</h4>
    <CodeSnippet>
      $ npm install --save @bearer/react
      <br />
      // Initialize Bearer client
      <br />
      import {'{ Bearer Client }'} from '@bearer/node'
      <br />
      const bearerClient = BearerClient.new
    </CodeSnippet>
  </>
)

export default InstallBearerSDK
