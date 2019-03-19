import * as React from 'react'
import { css } from '@emotion/core'

import { Container, Grid, Card, Text } from '../index'

import { path } from '../../services/Explore'

import styles from './IntegrationPanel.style'
import { getEmSize } from '../../styles/mixins'

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
  css?: any
}

export class IntegrationPanel extends React.Component<IIntegrationProps, {}> {
  render() {
    return (
      <Container>
        <Grid fullWidth space="around" gutter={24} col={4}>
          {this.props.integrations.map(integration => {
            const image = integration.providers[0].image ? integration.providers[0].image.url : ''
            return (
              <Card
                key={integration.id}
                link={`${path(integration)}`}
                small
                className={[styles.item, styles.card, integration.featured && styles.featured]}
              >
                <div css={image && styles.cardImageContainer}>
                  {image && <img src={image} css={styles.cardImage} />}
                </div>
                <div
                  css={css`
                    align-self: flex-end;
                  `}
                >
                  <Text
                    text={integration.title}
                    large
                    style={css`
                      font-weight: bold;
                      margin-bottom: ${getEmSize(8)};
                    `}
                  />
                  <Text small text={integration.description} />
                </div>
              </Card>
            )
          })}
        </Grid>
      </Container>
    )
  }
}
export default IntegrationPanel
