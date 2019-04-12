import * as React from 'react'
import { css } from '@emotion/core'

import { CodeSnippet, DashedLine, Section, TimelineStage } from '../index'
import { colors } from '../../styles/variables'
import timelineCodeSnippet from './TimelineOnBearer.snippets'

interface ITimelineOnBearerProps {
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
          heading={`Clone the template`}
          tooltip={'Not sure what to pass here'}
          placement={props.placement.next().value}
        >
          <CodeSnippet
            prism={props.prism}
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
            and let Bearer automatically generate a static access token to query the API in local development.`}
          >
            <CodeSnippet
              prism={props.prism}
              snippets={[timelineCodeSnippet.generateSetup(props.template.apiAuthType)]}
            />
          </TimelineStage>
        )}

        {!isOauth && (
          <TimelineStage
            heading={`Configure your API credentials`}
            tooltip={'Not sure what to pass here'}
            placement={props.placement.next().value}
            hint={`You are now ready query the ${props.template.provider.title} API in local development.`}
          >
            <CodeSnippet
              prism={props.prism}
              snippets={[timelineCodeSnippet.generateSetup(props.template.apiAuthType)]}
            />
          </TimelineStage>
        )}

        <TimelineStage
          heading={`Test the pre-built Function`}
          tooltip={'Not sure what to pass here'}
          placement={props.placement.next().value}
        >
          <>
            <CodeSnippet prism={props.prism} snippets={[timelineCodeSnippet.defaultFunction()]} />
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
              <CodeSnippet prism={props.prism} isWhite isFaded code={props.template.defaultFunctionReturnValue} />
            </div>
          </>
        </TimelineStage>

        <TimelineStage
          heading={`Code your own function`}
          tooltip={'Not sure what to pass here'}
          placement={props.placement.next().value}
          hint={`Use the function to call any ${
            props.template.provider.title
          } API endpoint and map data to your app models.`}
        >
          <CodeSnippet prism={props.prism} snippets={[timelineCodeSnippet.customFunction()]} />
        </TimelineStage>

        <TimelineStage
          heading={`Deploy your integration`}
          tooltip={'Not sure what to pass here'}
          placement={props.placement.next().value}
          hint="Once your integration is ready, deploy it on Bearer platform and you are ready to use it in production."
        >
          <CodeSnippet prism={props.prism} snippets={[timelineCodeSnippet.deployIntegration()]} />
        </TimelineStage>
      </Section>
    </>
  )
}

export default TimelineOnBearer
