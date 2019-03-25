import * as React from 'react'
import { css } from '@emotion/core'

export const AlertKey = 'alertType'
export enum AlertType {
  Default,
  LoginError
}

interface IAlertProps {
  alertType?: AlertType
  dismissAlert: () => void
}

export class Alert extends React.Component<IAlertProps> {
  private alertMessage(alertType: AlertType) {
    switch (alertType) {
      case AlertType.LoginError:
        return "Something's gone wrong and we couldn't log you in. Please try again."
      default:
        return "Something's gone wrong. Please try again."
    }
  }

  public render() {
    return (
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          margin: 1em;
          max-width: 25%;
          z-index: 50;
          border-radius: 3px;
          font-color: #dc4c4c;
          background: #fbeded;
          color: red;
          padding: 1em;
          box-shadow: 0 2px 4px 0 rgba(3, 13, 54, 0.26);
          display: flex;
        `}
      >
        <div
          css={css`
            width: 90%;
          `}
        >
          {this.alertMessage(this.props.alertType || AlertType.Default)}
        </div>
        <div
          css={css`
            padding: 1em;
            cursor: pointer;
            width: 10%;
          `}
          onClick={() => this.props.dismissAlert()}
        >
          X
        </div>
      </div>
    )
  }
}
