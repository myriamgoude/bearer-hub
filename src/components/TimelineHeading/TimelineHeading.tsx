import * as React from 'react'

import { ButtonToDashboard, Link, Small } from '../../components/index'
import { humanizeAuthType } from '../../services/Explore'
import styles from './TimelineHeading.style'

interface TimelineHeadingProps {
  providerName: string
  providerDescription: string
  providerColor: string
  templateTitle: string
  templateApiAuthType: string
  templateHubId: string
  style?: any
}

const TimelineHeading = (props: TimelineHeadingProps) => {
  return (
    <div itemScope itemType="http://schema.org/Thing" css={[styles.root, props.style && props.style]}>
      <h1 itemProp="Name" css={styles.heading}>
        Quickly build your own{' '}
        <span
          itemProp="Provider"
          css={styles.provider}
          style={{ color: props.providerColor, borderColor: props.providerColor }}
          title={props.providerDescription}
        >
          {props.providerName}
        </span>{' '}
        API Integration
      </h1>
      <div>
        <ul itemProp="featureList" css={styles.features}>
          <li css={[styles.feature, styles.featureIconClock]}>
            <span>Don’t waste time learning the {props.templateTitle} behaviour</span>
          </li>
          <li css={[styles.feature, styles.featureIconRabbit]}>
            <span>
              Use a pre-configured API client and {humanizeAuthType(props.templateApiAuthType)} implementation
            </span>
          </li>
          <li css={[styles.feature, styles.featureIcon3d]}>
            <span>Consume and transform the {props.templateTitle} with functions</span>
          </li>
          <li css={[styles.feature, styles.featureIconHome]}>
            <span>Host and scale your integration for free</span>
          </li>
          <li css={[styles.feature, styles.featureIconMonitor]}>
            <span>Monitor and log every API call to the {props.templateTitle} out of the box.</span>
          </li>
          <li css={[styles.feature, styles.featureIconAtomium]}>
            <span>Integrate into your app within seconds using our integration clients</span>
          </li>
        </ul>
      </div>

      <div itemProp="url">
        <ButtonToDashboard
          primary
          callToAction
          link={`${process.env.GATSBY_BEARER_DASHBOARD_SETUP_URL}${props.templateHubId}`}
          trackLink
          trackingAction="embed-template"
          trackingOptions={{
            category: 'Template',
            label: props.templateHubId
          }}
          text="Start building"
        />
      </div>
      <Small>
        or read the{' '}
        <Link itemProp="documentation" to="https://docs.bearer.sh" targetBlank>
          documentation
        </Link>{' '}
      </Small>
    </div>
  )
}
export default TimelineHeading
