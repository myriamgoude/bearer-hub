import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../../components/Page'
import PageHeading from '../../components/PageHeading'
import TimelineStage from '../../components/timeline/TimelineStage'
import IndexLayout from '../../layouts'

interface ITimelineProps {
  title: string
  timelineStages: {
    id: string
    timeToComplete: number
    backendElementType: string
    backendElementName: string
    uiElement: {
      title: string
      codeSnippet: string
    }
  }[]
}

interface IQueryData {
  graphcms: {
    integrations: {
      description: string
      timeline: ITimelineProps
    }[]
  }
}

export const query = graphql`
  query ExplorePresentQuery($id: ID!) {
    graphcms {
      integrations(where: { id: $id }, first: 1) {
        description
        timeline {
          title
          timelineStages(where: { displayOnHub: true }, orderBy: order_ASC) {
            id
            timeToComplete
            backendElementType
            backendElementName
            uiElement {
              title
              codeSnippet
            }
          }
        }
      }
    }
  }
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

const PresentTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const integration = data.graphcms.integrations[0]
  const timeline = integration.timeline

  if (timeline) {
    return (
      <IndexLayout location={location}>
        <Page>
          <PageHeading primaryText={timelineHeading(timeline)} />
          {timeline.timelineStages.map((stage, i) => (
            <TimelineStage key={stage.id} index={i} stage={stage} />
          ))}
        </Page>
      </IndexLayout>
    )
  }
  return <div>Do we want to handle integrations without timelines?</div>
}

export default PresentTemplate
