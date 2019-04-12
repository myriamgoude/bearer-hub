import * as React from 'react'
import { css } from '@emotion/core'

import { Container, Clearfix, Grid, Card, Tag, Text } from '../index'

import { templatePath } from '../../services/Explore'

import styles from './IntegrationPanel.style'
import { getEmSize } from '../../styles/mixins'
import blockStyles from '../../components/IntergrationPanel/IntegrationPanel.style'

interface ITemplate {
  id: string
  hubID: string
  title: string
  apiAuthType: string
  apiArchType: string
  provider: {
    hubID: string
    title: string
    image: {
      url: string
    }
  }
}

interface IIntegrationProps {
  templates: ITemplate[]
  css?: any
  currentTemplate?: ITemplate
}

export class IntegrationPanel extends React.Component<IIntegrationProps, {}> {
  render() {
    return (
      <Container>
        <Grid fullWidth space="around" gutter={24} col={4}>
          {this.props.templates.map(template => {
            const tags = [template.apiAuthType, template.apiArchType]
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
                className={[styles.item]}
              >
                <div>{image && <img src={image} css={styles.cardImage} />}</div>
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
                  <Clearfix />
                  <div css={blockStyles.cardTags}>
                    {tags && tags.map((tag: string, index: number) => <Tag key={index} text={tag} color="#1339D7" />)}
                  </div>
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
