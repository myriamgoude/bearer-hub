import * as React from 'react'
import Markdown from 'react-markdown'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  Button,
  DashedLine,
  HeroPanel,
  IntegrationPanel,
  Page,
  PageHeading,
  Section,
  SectionHeading,
  Text,
  SectionCTA
} from '../../components/index'
import TimelineStage from '../../components/timeline/TimelineStage'

import IndexLayout from '../../layouts'

import heroStyles from '../../components/HeroPanel/HeroPanel.style'
import { getEmSize } from '../../styles/mixins'
import { colors, dimensions } from '../../styles/variables'

interface ITimelineProps {
  title: string
  storyText: string
  timelineStages: {
    id: string
    timeToComplete: number
    backendElementType: string
    backendElementName: string
    uiElement: {
      title: string
      codeSnippet: string
      tooltip: string
      helperText: string
      image: {
        handle: string
        height: number
        width: number
      }
    }
  }[]
}

interface IQueryData {
  graphcms: {
    integrations: {
      mdDescription: string
      timeline: ITimelineProps
      id: string
      hubID: string
      title: string
      description: string
      featured: boolean
      provider: {
        hubID: string
        title: string
        image: {
          url: string
        }
      }
    }[]
  }
}

export const query = graphql`
  query ExplorePresentQuery($id: ID!) {
    graphcms {
      integrations(where: { id: $id }, first: 1) {
        id
        hubID
        title
        hubID
        description
        featured
        provider {
          hubID
          title
          image {
            url
          }
        }
        mdDescription
        timeline {
          title
          storyText
          timelineStages(where: { displayOnHub: true }, orderBy: order_ASC) {
            id
            timeToComplete
            backendElementType
            backendElementName
            uiElement {
              title
              codeSnippet
              tooltip
              helperText
              image {
                handle
                height
                width
              }
            }
          }
        }
      }
    }
  }
`

const StyledMarkDown = styled(Markdown)`
  margin: 24px 0 32px;

  & ul {
    padding: 0;
    margin: 32px 0;
    text-align: center;
  }
  & li {
    display: list-item;
    list-style-position: inside;
  }

  & p {
    color: ${colors.darkBlue};
    font-size: ${getEmSize(dimensions.fontSize.large)};
    display: inline;
  }
`

const labelStyle = css`
  background: ${colors.yellow};
  height: 48px;
  line-height: 48px;
  width: 132px;
  border-radius: 24px;
  margin: auto;
  color: #fff;
  z-index: 10;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
  font-size: 24px;
`

function timelineHeading(timeline?: ITimelineProps): string {
  if (timeline) {
    const totalTime = timeline.timelineStages.reduce((sum, stage) => {
      return sum + stage.timeToComplete
    }, 0)
    return `${timeline.title}${totalTime ? ` in ${totalTime} minutes` : ''}`
  }
  return ''
}

function generateMinutesLength(arr: any) {
  let min = 0
  arr.map((stage: any) => {
    min += stage.timeToComplete
  })
  return `${min}mn`
}

const PresentTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const integration = data.graphcms.integrations[0]
  const timeline = integration.timeline
  let timeElapsed = 0

  return (
    <IndexLayout location={location}>
      <Page>
        <div
          css={[
            css`
              position: relative;
              text-align: center;
              background-image: radial-gradient(circle at 62% 40%, #f6faff, #f6faff 1%, #f0f2fc);
            `,
            heroStyles.curvedSection
          ]}
        >
          <HeroPanel
            title={
              <PageHeading
                primaryText={timelineHeading(timeline)}
                style={css`
                  max-width: 700px;
                  margin: auto;
                `}
              />
            }
            paddingBottom={true}
            style={{ paddingBottom: '2.5vw', zIndex: 90 }}
          >
            <StyledMarkDown source={integration.mdDescription} escapeHtml={false} className="markdown-header" />

            <div>
              <Button
                primary
                link={`${process.env.GATSBY_BEARER_DASHBOARD_SETUP_URL}${integration.hubID}`}
                text="Embed this Integration"
              />
              <Button secondary link="/how-it-works" text="Documentation" />
            </div>
          </HeroPanel>
        </div>
        <Section>
          <div
            css={css`
              position: absolute;
              width: 2px;
              height: 100%;
              background: ${colors.yellow};
              left: 0;
              right: 0;
              margin: auto;
            `}
          />
          <div
            css={css`
              border-bottom: 3px solid ${colors.yellow};
              max-width: 380px;
              width: 100%;
              margin: auto;
              margin-bottom: 120px;
              background: ${colors.lightGrey};
              position: relative;
              z-index: 5;
            `}
          >
            <SectionHeading primaryText={timeline.storyText} tag="h5" />
          </div>
        </Section>
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
          {timeline.timelineStages.map((stage, i) => {
            timeElapsed += stage.timeToComplete
            return <TimelineStage key={stage.id} index={i} stage={stage} timeElasped={timeElapsed} />
          })}
          <div css={labelStyle}>
            <img src={require('../../images/shared/icon-timer.svg')} />
            <span>{generateMinutesLength(timeline.timelineStages)}</span>
          </div>
        </Section>

        {/*
          Uncomment this if the timeline returns a video

          <VideoSection thumbnail="<thumbnail>" src={require('../../videos/hero_landing_5.mp4')} /> */}

        <Section
          css={css`
            margin: 40px 0 120px;
            text-align: center;
            background: url(${require('../../images/shared/yellow-splash.svg')}) no-repeat center center / 122px;
          `}
        >
          <Button primary text="Embed this integration" link={'#'} />
          <Button secondary text="See the documentations" link={'#'} />
        </Section>

        <Section
          withTail
          css={css`
            max-width: 440px;
            margin: auto;
          `}
        >
          <Text
            style={css`
              text-align: center;
            `}
            large
          >
            This Integration matches to different real use cases we got from users and partners. These are insights but
            feel free to adapt to your own project !
          </Text>
        </Section>

        <Section withTail>
          <div
            css={css`
              background-image: url(${require('../../images/shared/yellow-splash.svg')}),
                url(${require('../../images/shared/gradient-splash.svg')});
              background-position: top right 148px, bottom left 162px;
              background-repeat: no-repeat;
              padding: 2em 0;
            `}
          >
            <IntegrationPanel integrations={data.graphcms.integrations} />
          </div>
        </Section>

        <SectionCTA integrationsCta />
      </Page>
    </IndexLayout>
  )
}

export default PresentTemplate
