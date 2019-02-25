import * as React from 'react'
import CodeSnippet from '../CodeSnippet'

interface IInstallBearerLibraryProps {
  functionName: string
}

const InstallBearerLibrary = (props: IInstallBearerLibraryProps) => (
  <>
    <h4>Install the Bearer Library</h4>
    <CodeSnippet>
      // from dir/{props.functionName}
      <br />
      npm install @bearer/react
    </CodeSnippet>
  </>
)

export default InstallBearerLibrary
