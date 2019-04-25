import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { isBrowser } from '../../services/Browser'

interface ILinkProps {
  to: string
  trackLink?: boolean
  [key: string]: any
}

class Link extends React.Component<ILinkProps> {
  constructor(props: ILinkProps) {
    super(props)
  }

  // Typically the action (event name) is the internal link (e.g. /explore)
  // but this may be overridden and there are exceptions e.g. for some external links
  private getTrackingAction = () => {
    if (this.props.trackingAction) {
      return this.props.trackingAction
    }
    switch (this.props.to) {
      case 'https://docs.bearer.sh': {
        return 'general-documentation'
      }
      case '/integrations': {
        return 'explore-page'
      }
      case '/product': {
        return 'product-page'
      }
      default: {
        return this.props.to.replace(/\//g, '')
      }
    }
  }

  public handleOnClick = (event: any) => {
    // onClick action to track analytics
    if (this.props.trackLink && isBrowser) {
      const currentWindow = window as any
      currentWindow.analytics.track(this.getTrackingAction(), this.props.trackingOptions || {})
    }

    // other onClick actions (if present)
    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render() {
    const internal = this.props.to.indexOf('http') !== 0
    const { to, trackLink, trackingAction, trackingOptions, onClick, ...remainingProps } = this.props

    if (internal) {
      return (
        <GatsbyLink
          to={this.props.to}
          {...(this.props.trackLink || this.props.onClick ? { onClick: this.handleOnClick } : null)}
          {...remainingProps}
        >
          {this.props.children}
        </GatsbyLink>
      )
    }
    const { activeClassName, partiallyActive, ...aTagRemainingProps } = remainingProps
    return (
      <a
        href={this.props.to}
        {...(this.props.trackLink || this.props.onClick ? { onClick: this.handleOnClick } : null)}
        // All external links to be opened in a new browser tab
        target="_blank"
        rel="noopener"
        {...aTagRemainingProps}
      >
        {this.props.children}
      </a>
    )
  }
}

export default Link
