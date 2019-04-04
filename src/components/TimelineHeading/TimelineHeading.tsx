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
    <div css={[styles.root, props.style && props.style]}>
      <h1 css={styles.heading}>
        Quickly build{' '}
        <span
          css={styles.provider}
          style={{ color: props.providerColor, borderColor: props.providerColor }}
          title={props.providerDescription}
        >
          {props.providerName}
        </span>{' '}
        API Integration using Bearer Framework
      </h1>
      <div>
        <ul css={styles.features}>
          <li css={[styles.feature, styles.featureIconClock]}>
            Don't spend time understanding {props.templateTitle} mechanism
          </li>
          <li css={[styles.feature, styles.featureIconRabbit]}>
            Use a pre-configured API Client and {props.templateApiAuthType} implementation
          </li>
          <li css={[styles.feature, styles.featureIcon3d]}>
            Consume &amp; transform {props.templateTitle} data with simple functions
          </li>
          <li css={[styles.feature, styles.featureIconHome]}>
            Host &amp; scale your Integration for free on our platform
          </li>
          <li css={[styles.feature, styles.featureIconMonitor]}>
            Log &amp; monitor every call to the {props.templateTitle} out-of-the-box
          </li>
          <li css={[styles.feature, styles.featureIconAtomium]}>Integration in seconds into your App with our SDKs</li>
        </ul>
      </div>

      <div>
        <Button
          primary
          callToAction
          link={`${process.env.GATSBY_BEARER_DASHBOARD_SETUP_URL}${props.templateHubId}`}
          trackLink
          trackingAction="embed-integration"
          trackingOptions={{
            category: 'Integration',
            label: props.templateHubId
          }}
          text="Get started"
        />
      </div>
      <Small>
        Check the <Link to="https://docs.bearer.sh">documentation</Link> or <Link to="/product">explore product</Link>
      </Small>
    </div>
  )
}
export default TimelineHeading
