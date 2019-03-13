import * as React from 'react'
import { css } from '@emotion/core'

import { CodeSnippet, Tooltip } from '../../index'

const snippet = `$ npm install --save @bearer/react

// Initialize Bearer client

import {'{ Bearer Client }'} from '@bearer/node'

const bearerClient = BearerClient.new
`

const InstallBearerSDK = () => (
  <>
    <h3>
      <Tooltip
        placement="right"
        trigger={['hover']}
        content={`Not sure what to pass here`}
        description={`Not sure what to pass here`}
        overlay={`Not sure what to pass here`}
      >
        <img src={require('../../../images/shared/icon-question.svg')} />
      </Tooltip>
      <span
        css={css`
          margin-left: 8px;
        `}
      >
        Install the Bearer SDK
      </span>
    </h3>
    <CodeSnippet prism={true} code={snippet} backend />
  </>
)

export default InstallBearerSDK
