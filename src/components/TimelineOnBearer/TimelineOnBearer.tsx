import * as React from 'react'
import { css } from '@emotion/core'

import { CodeSnippet, CodeSnippets, DashedLine, Link, Section, TimelineStage } from '../index'
import { apiProviderCredentials } from '../../services/Explore'
import { colors, breakpoints } from '../../styles/variables'
import timelineCodeSnippet from './TimelineOnBearer.snippets'

interface ITimelineOnBearerProps {
  placement: IterableIterator<string>
  template: {
    title: string
    gitHubUrl: string
    apiAuthType: string
    apiCredentialsUrl: string
    defaultFunctionName: string
    defaultFunctionCode: string
    defaultFunctionReturnValue: string
    oauthScopes?: any
    provider: {
      title: string
    }
  }
}

const TimelineOnBearer = (props: ITimelineOnBearerProps) => {
  return (
    <>
      <DashedLine
        mention="On Bearer"
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

            @media (max-width: ${breakpoints.lg}px) {
              right: inherit;
              margin-left: 8px;
              margin-top: 16px;
            }
          `}
        />
        <TimelineStage heading={`Clone the template`} placement={props.placement.next().value}>
          <CodeSnippets snippets={[timelineCodeSnippet.cloneTemplate(props.template.provider.title.toLowerCase())]} />
        </TimelineStage>

        {
          <TimelineStage
            heading={`Configure your API credentials`}
            placement={props.placement.next().value}
            hint={
              <span>
                Setup the integration with your{' '}
                {apiProviderCredentials(props.template.apiAuthType, props.template.provider.title)}. This will allow you
                to make authenticated API requests.{' '}
                {props.template.apiCredentialsUrl && (
                  <Link to={props.template.apiCredentialsUrl}>
                    Don't know your {apiProviderCredentials(props.template.apiAuthType, props.template.provider.title)}?
                  </Link>
                )}
              </span>
            }
          >
            <CodeSnippets
              snippets={[timelineCodeSnippet.generateSetup(props.template.apiAuthType, props.template.provider.title)]}
            />
          </TimelineStage>
        }

        <TimelineStage heading={`Test the pre-built function`} placement={props.placement.next().value}>
          <>
            <CodeSnippets snippets={[timelineCodeSnippet.defaultFunction()]} />
            <div
              css={css`
                padding-top: 1rem;
                padding-left: 3.5rem;
                position: relative;

                &::before {
                  content: '';
                  display: block;
                  position: absolute;
                  background: url(${require('../../images/curve-subsnippet.svg')}) no-repeat;
                  width: 100px;
                  height: 100px;
                  top: 0;
                  left: 2.1rem;
                }
              `}
            >
              <CodeSnippet isWhite isFaded code={props.template.defaultFunctionReturnValue} />
            </div>
          </>
        </TimelineStage>

        <TimelineStage
          heading={`Code your own function`}
          placement={props.placement.next().value}
          hint={`Use your function to call any ${
            props.template.provider.title
          } endpoint and map the data to your app models.`}
        >
          <CodeSnippets snippets={[timelineCodeSnippet.customFunction()]} />
        </TimelineStage>

        <TimelineStage
          heading={`Deploy your integration`}
          placement={props.placement.next().value}
          hint="Once your integration is ready, deploy it on the Bearer platform and you’re good to go!"
        >
          <CodeSnippets snippets={[timelineCodeSnippet.deployIntegration()]} />
        </TimelineStage>
      </Section>
    </>
  )
}

export default TimelineOnBearer
