import * as React from 'react'
import { css } from '@emotion/core'

import { CodeSnippet, DashedLine, Section, TimelineStage } from '../index'
import { colors } from '../../styles/variables'
import timelineCodeSnippet from './TimelineMyApp.snippets'

interface ITimelineMyAppProps {
  prism: boolean
  placement: IterableIterator<string>
  template: {
    title: string
    gitHubUrl: string
    apiAuthType: string
    defaultFunctionName: string
    defaultFunctionCode: string
    defaultFunctionReturnValue: string
    oauthScopes?: any
    provider: {
      title: string
    }
  }
}

const TimelineMyApp = (props: ITimelineMyAppProps) => {
  const apiAuthType = props.template.apiAuthType.toLowerCase()
  const useConnectAction = apiAuthType === 'oauth2' || apiAuthType === 'oauth1'
  return (
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

        {useConnectAction && (
          <TimelineStage
            heading="Add a Connect Component"
            placement={props.placement.next().value}
            tooltip={`Not sure what to pass here`}
            hint={`Once users logged-in with their ${props.template.provider.title} account, your \
            functions are able to query the API using their credentials.`}
          >
            <CodeSnippet prism={props.prism} snippets={timelineCodeSnippet.connectComponent()} />
          </TimelineStage>
        )}

        <TimelineStage
          heading="Call your functions"
          placement={props.placement.next().value}
          tooltip={`Not sure what to pass here`}
          hint={`Use our integration clients to call your functions from your app.`}
        >
          <CodeSnippet prism={props.prism} snippets={timelineCodeSnippet.invokeFunction()} />
        </TimelineStage>
      </Section>
    </>
  )
}

export default TimelineMyApp
