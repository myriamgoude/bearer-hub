import * as React from 'react'
import { css } from '@emotion/core'
import CodeSnippet from '../../CodeSnippet'
import Tooltip from '../../Tooltip'

const snippet = `bearerClient.call('{props.functionName}', params)`
const FunctionCall = () => (
  <>
    <h3>
      <Tooltip placement="right" trigger={['hover']} content={`Not sure what to pass here`} />
      <span
        css={css`
          margin-left: 8px;
        `}
      >
        Automate with a function call
      </span>
    </h3>
    <CodeSnippet prism code={snippet} backend />
  </>
)

export default FunctionCall
