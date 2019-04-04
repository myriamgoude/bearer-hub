import * as React from 'react'
import { css } from '@emotion/core'

import { CodeSnippet, DashedLine, Section, TimelineStage } from '../index'
import { colors } from '../../styles/variables'

interface ITimelineOnBearerProps {
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

function templateFolderName(gitHubUrl: string) {
  return gitHubUrl.replace('https://github.com/bearer/', '')
}

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
        heading={`Clone Template`}
        tooltip={'Not sure what to pass here'}
        placement={props.placement.next().value}
      >
        <CodeSnippet
          prism={props.prism}
          code={`$ git clone ${props.template.gitHubUrl}\n$ cd ${templateFolderName(
            props.template.gitHubUrl
          )}\n$ npm install`}
        />
      </TimelineStage>

      <TimelineStage
        heading={`Generate test Token`}
        tooltip={'Not sure what to pass here'}
        placement={props.placement.next().value}
        hint={`You will find your credentials on ${props.template.provider.title} settings page`}
      >
        <>
          <CodeSnippet prism={props.prism} code={`npm / yarn\n$ npm bearer setup:token CLIENT_ID:CLIENT_SECRET`} />
        </>
      </TimelineStage>

      <TimelineStage
        heading={`Test initial function`}
        tooltip={'Not sure what to pass here'}
        placement={props.placement.next().value}
      >
        <>
          <CodeSnippet prism={props.prism} code={`npm bearer invoke`} backend />
          <div
            css={css`
              margin-top: 1rem;
              margin-left: 3.5rem;
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
              backend
            />
          </div>
        </>
      </TimelineStage>

      <TimelineStage
        heading={`Create custom Functions`}
        tooltip={'Not sure what to pass here'}
        placement={props.placement.next().value}
      >
        <CodeSnippet prism={props.prism} code={`npm bearer generate:function myFunction`} backend />
      </TimelineStage>

      <TimelineStage
        heading={`Deploy and Monitor`}
        tooltip={'Not sure what to pass here'}
        placement={props.placement.next().value}
        hint="Login to the developer portal to view and search through your logs"
      >
        <CodeSnippet
          prism={props.prism}
          code={`npm bearer push\n\nRefreshing tokens... done\n ✓ Generate bundle
✓ Transfer bundle \n\n 🐻Integration successfully pushed.`}
        />
      </TimelineStage>
    </Section>
  </>
)

export default TimelineOnBearer
