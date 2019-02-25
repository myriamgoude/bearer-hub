import * as React from 'react'
import CodeSnippet from '../CodeSnippet'

interface IInstallBearerSDKProps {
  functionName: string
}

const InstallBearerSDK = (props: IInstallBearerSDKProps) => (
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

    <h4>Automate with a function call</h4>
    <CodeSnippet>
      bearerClient.call('{props.functionName}', params)
      <br />
    </CodeSnippet>
  </>
)

export default InstallBearerSDK
