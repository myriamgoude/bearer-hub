import * as React from 'react'
import CodeSnippet from '../CodeSnippet'

interface IFunctionCallProps {
  functionName: string
}

const FunctionCall = (props: IFunctionCallProps) => (
  <>
    <h4>Automate with a function call</h4>
    <CodeSnippet>
      bearerClient.call('{props.functionName}', params)
      <br />
    </CodeSnippet>
  </>
)

export default FunctionCall
