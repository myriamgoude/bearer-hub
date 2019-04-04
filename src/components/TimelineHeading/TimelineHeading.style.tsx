import { css } from '@emotion/core'
import { breakpoints } from '../../styles/variables'

import timelineHeaderIconClock from '../../images/timeline/clock.svg'
import timelineHeaderIconRabbit from '../../images/timeline/rabbit.svg'
import timelineHeaderIconGlasses from '../../images/timeline/glasses.svg'
import timelineHeaderIconHome from '../../images/timeline/home.svg'
import timelineHeaderIconMonitor from '../../images/timeline/monitor.svg'
import timelineHeaderIconAtomium from '../../images/timeline/atomium.svg'

export default {
  root: css`
    width: 100%;
  `,
  heading: css`
    max-width: 600px;
    margin-bottom: 2rem;
  `,
  provider: css`
    border-bottom-width: 2px;
    border-bottom-style: dashed;
  `,
  features: css`
    margin: 0 0 1.75rem 0;
    padding: 0;

    @media (min-width: ${breakpoints.xl}px) {
      columns: 2;
      -webkit-columns: 2;
      -moz-columns: 2;
    }
  `,
  feature: css`
    display: flex;
    list-style: none;
    line-height: 1.375rem;
    padding: 0;
    margin-bottom: 1.25rem;
    &:before {
      content: '';
      display: inline-block;
      margin-right: 1rem;
      height: 1.25rem;
      width: 20px;
      background-size: 1.25rem;
      background-repeat: no-repeat;
      background-position: center center;
    }
  `,
  featureIconClock: css`
    &:before {
      background-image: url(${timelineHeaderIconClock});
    }
  `,
  featureIconRabbit: css`
    &:before {
      background-image: url(${timelineHeaderIconRabbit});
    }
  `,
  featureIconGlasses: css`
    &:before {
      background-image: url(${timelineHeaderIconGlasses});
    }
  `,
  featureIconHome: css`
    &:before {
      background-image: url(${timelineHeaderIconHome});
    }
  `,
  featureIconMonitor: css`
    &:before {
      background-image: url(${timelineHeaderIconMonitor});
    }
  `,
  featureIconAtomium: css`
    &:before {
      background-image: url(${timelineHeaderIconAtomium});
    }
  `
}
