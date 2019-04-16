import * as React from 'react'
import { css } from '@emotion/core'

import { CodeSnippet, CodeSnippets, DashedLine, Section, TimelineStage } from '../index'
import { colors, breakpoints } from '../../styles/variables'
import timelineCodeSnippet from './TimelineOnBearer.snippets'

interface ITimelineOnBearerProps {
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

const TimelineOnBearer = (props: ITimelineOnBearerProps) => {
  const apiAuthType = props.template.apiAuthType.toLowerCase()
  const isOauth = apiAuthType === 'oauth2' || apiAuthType === 'oauth1'
  return (
    <>
      <DashedLine
        mention="On Bearer"
        mentionBg={colors.lightGrey}
        className={css`
          z-index: 99;
        `}
      />
      <div
        css={css`
          position: relative;
          width: 100%;
          height: 100px;
          background: url(${require('../../images/shared/mobile-line.svg')}) no-repeat center center / contain;
          left: 0;
          right: 0;
          margin: auto;

          @media (min-width: ${breakpoints.lg}px) {
            display: none;
          }
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
            }
          `}
        />
        <TimelineStage
          heading={`Clone the template`}
          tooltip={'Not sure what to pass here'}
          placement={props.placement.next().value}
        >
          <CodeSnippets
            snippets={[
              timelineCodeSnippet.cloneTemplate(props.template.gitHubUrl, props.template.provider.title.toLowerCase())
            ]}
          />
        </TimelineStage>

        {isOauth && (
          <TimelineStage
            heading={`Generate an access token`}
            tooltip={'Not sure what to pass here'}
            placement={props.placement.next().value}
            hint={`Use your ${props.template.provider.title} OAuth credentials \
            to let Bearer automatically generate a static access token. This will query the API in local development.`}
          >
            <CodeSnippets snippets={[timelineCodeSnippet.generateSetup(props.template.apiAuthType)]} />
          </TimelineStage>
        )}

        {!isOauth && (
          <TimelineStage
            heading={`Configure your API credentials`}
            tooltip={'Not sure what to pass here'}
            placement={props.placement.next().value}
            hint={`You are now ready query the ${props.template.provider.title} API in local development.`}
          >
            <CodeSnippets snippets={[timelineCodeSnippet.generateSetup(props.template.apiAuthType)]} />
          </TimelineStage>
        )}

        <TimelineStage
          heading={`Test the pre-built function`}
          tooltip={'Not sure what to pass here'}
          placement={props.placement.next().value}
        >
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
          tooltip={'Not sure what to pass here'}
          placement={props.placement.next().value}
          hint={`Use your function to call any ${
            props.template.provider.title
          } endpoint and map the data to your app models.`}
        >
          <CodeSnippets snippets={[timelineCodeSnippet.customFunction()]} />
        </TimelineStage>

        <TimelineStage
          heading={`Deploy your integration`}
          tooltip={'Not sure what to pass here'}
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
