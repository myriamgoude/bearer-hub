import * as React from 'react'

import { Button, Link, Small } from '../../components/index'

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
            <span>Don't spend time understanding {props.templateTitle} mechanism</span>
          </li>
          <li css={[styles.feature, styles.featureIconRabbit]}>
            Use a pre-configured API Client and {props.templateApiAuthType} implementation
          </li>
          <li css={[styles.feature, styles.featureIcon3d]}>
            Consume &amp; transform {props.templateTitle} with functions
          </li>
          <li css={[styles.feature, styles.featureIconHome]}>
            Host &amp; scale your Integration for free on our platform
          </li>
          <li css={[styles.feature, styles.featureIconMonitor]}>
            Monitor &amp; log every API call to the {props.templateTitle} out-of-the-box
          </li>
          <li css={[styles.feature, styles.featureIconAtomium]}>
            Integrate in seconds into your App with our Integration Clients
          </li>
        </ul>
      </div>

      <div itemProp="url">
        <Button
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
        <Link itemProp="documentation" to="https://docs.bearer.sh">
          documentation
        </Link>{' '}
      </Small>
    </div>
  )
}
export default TimelineHeading
