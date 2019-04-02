import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { CodeSnippet, Container, DashedLine, Section, Tooltip } from '../../components/index'
import { colors } from '../../styles/variables'

const StyledDiv = styled.div<{ rightAligned: boolean }>`
  width: 50%;
  ${props => (props.rightAligned ? 'margin-left: auto; padding-left: calc(115px + 20px);' : 'padding-right: 115px')};
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 115px;
    height: 40px;
    color: ${colors.yellow};
    ${props => (props.rightAligned ? 'padding-left:8px;' : 'padding-right:8px;')};
    ${props => (props.rightAligned ? 'left:-1px;' : 'right:-1px;')};
    ${props => (props.rightAligned ? 'text-align: left;' : 'text-align:right;')};
    ${props =>
      props.rightAligned
        ? `background: url(${require('../../images/curve-rtl.svg')}) no-repeat center center / contain;`
        : `background: url(${require('../../images/curve-ltr.svg')}) no-repeat center center / contain;`};
  }
`

interface IBearerTimelineProps {
  template: {
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

const BearerTimeline = (props: IBearerTimelineProps) => (
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
      <Container style={{ marginBottom: 32 }}>
        <StyledDiv rightAligned={true}>
          <h3>
            <Tooltip placement="right" trigger={['hover']} content={`Not sure what to pass here`} />
            <span
              css={css`
                margin-left: 8px;
              `}
            >
              {`Start with the Bearer template for ${props.template.provider.title}`}
            </span>
          </h3>
          <CodeSnippet
            prism={true}
            code={`$ git clone ${props.template.gitHubUrl}\n$ cd ${templateFolderName(
              props.template.gitHubUrl
            )}\n$ npm install`}
            backend
          />
        </StyledDiv>
      </Container>
      <Container style={{ marginBottom: 32 }}>
        <StyledDiv rightAligned={false}>
          <h3>
            <Tooltip placement="right" trigger={['hover']} content={`Not sure what to pass here`} />
            <span
              css={css`
                margin-left: 8px;
              `}
            >
              Generate test Token
            </span>
          </h3>
          <CodeSnippet prism={true} code={`npm / yarn\n$ npm bearer setup:token CLIENT_ID:CLIENT_SECRET`} backend />
          {`Get your credentials on your Dashboard ${props.template.provider.title} settings page`}
        </StyledDiv>
      </Container>
      <Container style={{ marginBottom: 32 }}>
        <StyledDiv rightAligned={true}>
          <h3>
            <Tooltip placement="right" trigger={['hover']} content={`Not sure what to pass here`} />
            <span
              css={css`
                margin-left: 8px;
              `}
            >
              Test initial function
            </span>
          </h3>
          <CodeSnippet prism={true} code={`npm bearer invoke`} backend />
          <CodeSnippet prism={true} code={`JSON { hello: world }`} backend />
        </StyledDiv>
      </Container>
      <Container style={{ marginBottom: 32 }}>
        <StyledDiv rightAligned={false}>
          <h3>
            <Tooltip placement="right" trigger={['hover']} content={`Time to code!`} />
            <span
              css={css`
                margin-left: 8px;
              `}
            >
              Create custom functions
            </span>
          </h3>
          <CodeSnippet prism={true} code={`npm bearer generate:function myFunction`} backend />
        </StyledDiv>
      </Container>
      <Container style={{ marginBottom: 32 }}>
        <StyledDiv rightAligned={true}>
          <h3>
            <Tooltip placement="right" trigger={['hover']} content={`Not sure what to pass here`} />
            <span
              css={css`
                margin-left: 8px;
              `}
            >
              Deploy and monitor
            </span>
          </h3>
          <CodeSnippet
            prism={true}
            code={`npm bearer push\n\nRefreshing tokens... done\n ✓ Generate bundle
✓ Transfer bundle \n\n 🐻Integration successfully pushed.`}
            backend
          />
          You can track and monitor via your integration logs
        </StyledDiv>
      </Container>
    </Section>
  </>
)

export default BearerTimeline
