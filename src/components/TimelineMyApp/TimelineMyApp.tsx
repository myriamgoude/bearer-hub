import * as React from 'react'
import { css } from '@emotion/core'

import { CodeSnippet, DashedLine, Section, TimelineStage } from '../index'
import { colors } from '../../styles/variables'

interface ITimelineMyAppProps {
  prism: boolean
  placement: IterableIterator<string>
  template: {
    title: string
    gitHubUrl: string
    defaultFunctionName: string
    defaultFunctionCode: string
    defaultFunctionReturnValue: string
    oauthScopes?: any
    provider: {
      title: string
    }
  }
}

const TimelineMyApp = (props: ITimelineMyAppProps) => (
  <>
    <DashedLine
      mention="On Your App"
      mentionBg={colors.lightGrey}
      className={css`
        z-index: 99;
      `}
    />
    <Section>
      <div
        css={css`
          position: absolute;
          width: 2px;
          height: 100%;
          background: ${colors.yellow};
          left: 0;
          right: 0;
          top: 0;
          margin: auto;
        `}
      />

      <TimelineStage
        heading="Add the Connect component"
        placement={props.placement.next().value}
        tooltip={`Not sure what to pass here`}
      >
        <CodeSnippet
          prism={props.prism}
          snippets={[
            {
              language: 'JS',
              code: `<script id=”bearer-script” src=”https://…”></script>
<script>
var bearer = new Bearer(SETUP_ID, INTEGRATION_NAME)

bearer.connect(myIntegration).then(console.log)
</script>`
            },
            {
              language: 'React',
              code: `<script id=”bearer-script” src=”https://…”></script>
<script>
var bearer = new Bearer(SETUP_ID, INTEGRATION_NAME)

bearer.connect(myIntegration).then(console.log)
</script>`
            }
          ]}
        />
      </TimelineStage>

      <TimelineStage
        heading="Deploy and Monitor"
        placement={props.placement.next().value}
        tooltip={`Not sure what to pass here`}
      >
        <CodeSnippet
          prism={props.prism}
          snippets={[
            {
              language: 'JS',
              code: `// First install the Bearer SDK
// npm install --save @bearer/node

import { bearer } from ‘@bearer/nodejs’

bearer.setup(SETUP_ID, INTEGRATION_NAME)
bearer.invoke(“{myFunction}”, options)`
            }
          ]}
        />
      </TimelineStage>
    </Section>
  </>
)

export default TimelineMyApp
