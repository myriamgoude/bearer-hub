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

// function templateFolderName(gitHubUrl: string) {
//   return gitHubUrl.replace('https://github.com/bearer/', '')
// }

const TimelineOnBearer = (props: ITimelineOnBearerProps) => (
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
        heading={`Start with the Bearer template`}
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

      <TimelineStage
        heading={`Generate test Token`}
        tooltip={'Not sure what to pass here'}
        placement={props.placement.next().value}
        hint={`You will find your credentials on ${props.template.provider.title} settings page`}
      >
        <CodeSnippet prism={props.prism} snippets={[timelineCodeSnippet.generateSetup(props.template.apiAuthType)]} />
      </TimelineStage>

      <TimelineStage
        heading={`Test a pre-built Function locally`}
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
            <CodeSnippet
              prism={props.prism}
              isWhite
              isFaded
              code={`{
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}`}
            />
          </div>
        </>
      </TimelineStage>

      <TimelineStage
        heading={`Create custom Functions`}
        tooltip={'Not sure what to pass here'}
        placement={props.placement.next().value}
      >
        <CodeSnippet prism={props.prism} snippets={[timelineCodeSnippet.customFunction()]} />
      </TimelineStage>

      <TimelineStage
        heading={`Deploy and Monitor`}
        tooltip={'Not sure what to pass here'}
        placement={props.placement.next().value}
        hint="Login to the developer portal to view and search through your logs"
      >
        <CodeSnippet prism={props.prism} snippets={[timelineCodeSnippet.deployIntegration()]} />
      </TimelineStage>
    </Section>
  </>
)

export default TimelineOnBearer
