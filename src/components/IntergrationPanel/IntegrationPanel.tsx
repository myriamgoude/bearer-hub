import * as React from 'react'
import { css } from '@emotion/core'

import { Container, Grid, Card, Text } from '../index'

import { templatePath } from '../../services/Explore'

import styles from './IntegrationPanel.style'
import { getEmSize } from '../../styles/mixins'

interface IIntegrationProps {
  templates: {
    id: string
    hubID: string
    title: string
    featured: boolean
    provider: {
      hubID: string
      title: string
      image: {
        url: string
      }
    }
  }[]
  css?: any
}

export class IntegrationPanel extends React.Component<IIntegrationProps, {}> {
  render() {
    return (
      <Container>
        <Grid fullWidth space="around" gutter={24} col={4}>
          {this.props.templates.map(template => {
            const image = template.provider.image ? template.provider.image.url : ''
            return (
              <Card
                key={template.id}
                link={`${templatePath(template)}`}
                trackLink
                trackingAction="explore-template"
                trackingOptions={{
                  category: 'Template',
                  label: template.hubID
                }}
                small
                className={[styles.item, styles.card, template.featured && styles.featured]}
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
                    text={`${template.provider.title} API`}
                    large
                    style={css`
                      font-weight: bold;
                      margin-bottom: ${getEmSize(8)};
                    `}
                  />
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
