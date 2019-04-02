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

interface IMyAppTimelineProps {
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

const MyAppTimeline = (props: IMyAppTimelineProps) => (
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
      <Container style={{ marginBottom: 32 }}>
        <StyledDiv rightAligned={true}>
          <h3>
            <Tooltip placement="right" trigger={['hover']} content={`Not sure what to pass here`} />
            <span
              css={css`
                margin-left: 8px;
              `}
            >
              Add the Connect component
            </span>
          </h3>
          <CodeSnippet
            prism={true}
            code={`<script id=”bearer-script” src=”https://…”></script>
<script>
var bearer = new Bearer(SETUP_ID, INTEGRATION_NAME)

bearer.connect(myIntegration).then(console.log)
</script>`}
            backend
          />
          {`This component connects your integration to your ${props.template.provider.title} account`}
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
              Invoke functions
            </span>
          </h3>
          <CodeSnippet
            prism={true}
            code={`// First install the Bearer SDK
// npm install --save @bearer/node

import { bearer } from ‘@bearer/nodejs’

bearer.setup(SETUP_ID, INTEGRATION_NAME)

bearer.invoke(“{myFunction}”, options)`}
            backend
          />
          Bind and trigger bearer functions into your app code
        </StyledDiv>
      </Container>
    </Section>
  </>
)

export default MyAppTimeline
