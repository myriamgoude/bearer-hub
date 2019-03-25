import * as React from 'react'
import { css } from '@emotion/core'
import { CodeSnippet, Tooltip } from '../../index'

const snippet = `npm install @bearer/react`

const InstallBearerLibrary = () => (
  <>
    <h3>
      <Tooltip placement="right" trigger={['hover']} content={`Not sure what to pass here`} />
      <span
        css={css`
          margin-left: 8px;
        `}
      >
        Install the Bearer Library
      </span>
    </h3>
    <CodeSnippet prism code={snippet} backend />
  </>
)

export default InstallBearerLibrary
