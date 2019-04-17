import * as React from 'react'
import { css } from '@emotion/core'

import { Container, Grid, Card, Tag, Text } from '../index'

import { humanizeAuthType, templatePath } from '../../services/Explore'

import styles from './IntegrationPanel.style'
import { getEmSize } from '../../styles/mixins'
import { breakpoints } from '../../styles/variables'
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
        <Grid
          fullWidth
          space="around"
          gutter={24}
          col={4}
          style={css`
            overflow: auto;
            justify-content: ${this.props.templates.length <= 2 ? 'flex-start !important' : null};
            @media (max-width: ${breakpoints.lg}px) {
              display: flex;
              flex-wrap: nowrap;
              flex-direction: row;
              justify-content: flex-start;
              width: ${(this.props.templates.length + 1) * 152 + (this.props.templates.length = 2 ? 16 : 0)}px;
            }
          `}
          childrenStyle={css`
            -webkit-transition: box-shadow 0.2s; /* Safari */
            transition: box-shadow 0.2s;
            margin-bottom: 16px;
            margin-right: ${(this.props.templates.length = 2 ? 16 : 0)}px;
            @media (max-width: ${breakpoints.lg}px) {
              display: inline-block;
            }
            &:hover {
              box-shadow: 0 3px 4px 0 rgba(30, 9, 54, 0.1);
            }
          `}
        >
          {this.props.templates.map(template => {
            const tags = [humanizeAuthType(template.apiAuthType), template.apiArchType]
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
                <div
                  css={css`
                    margin-top: 1rem;
                    height: 4rem;
                    margin-bottom: 1rem;
                  `}
                >
                  {image && <img src={image} css={styles.cardImage} itemProp="logo" />}
                </div>
                <div
                  css={css`
                    align-self: normal;
                  `}
                  itemProp="brand"
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
                <div css={blockStyles.cardTags}>
                  {tags && tags.map((tag: string, index: number) => <Tag key={index} text={tag} color="#1339D7" />)}
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
