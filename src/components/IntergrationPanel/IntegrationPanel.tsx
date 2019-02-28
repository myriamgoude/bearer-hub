import * as React from 'react'
import Container from '../Container/Container'

import { Grid, Card, Text } from '../index'

import { path } from '../../services/Integration'

import { css, cx } from 'emotion'

import styles from './IntegrationPanel.css'

interface IIntegrationProps {
  integrations: {
    id: string
    title: string
    description: string
    featured: boolean
    providers: {
      title: string
      image: {
        url: string
      }
    }[]
  }[]
}

export class IntegrationPanel extends React.Component<IIntegrationProps, {}> {
  render() {
    return (
      <Container>
        <Grid fullWidth gutter={24} col={4}>
          {this.props.integrations.map(integration => {
            const image = integration.providers[0].image ? integration.providers[0].image.url : ''
            return (
              <Card
                key={integration.id}
                link={`${path(integration)}`}
                small
                className={cx(styles.item, integration.featured && styles.featured)}
              >
                <div className={image && styles.cardImageContainer}>
                  {image && <img src={image} className={styles.cardImage} />}
                </div>
                <Text
                  text={integration.title}
                  large
                  className={cx(
                    css`
                      font-weight: bold;
                    `
                  )}
                />
                <Text small text={integration.description} />
              </Card>
            )
          })}
        </Grid>
      </Container>
    )
  }
}

export default IntegrationPanel
