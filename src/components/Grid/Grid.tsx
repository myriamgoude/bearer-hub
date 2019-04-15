import * as React from 'react'
import { css } from '@emotion/core'

import styles from './Grid.style'
import { breakpoints } from '../../styles/variables'

interface IGridProps {
  children: any
  space?: string
  childrenStyle?: any
  fullWidth?: boolean
  gutter?: number
  col?: number
  style?: any
  wrapperStyle?: any
  width?: string
  childrenClassName?: string
}

const Grid = (props: IGridProps) => {
  return (
    <div
      css={[
        css`
          @media (max-width: ${breakpoints.lg}px) {
            overflow: scroll;
            width: ${props.width};
          }
        `,
        props.wrapperStyle
      ]}
    >
      <div
        css={[
          styles.root,
          props.space === 'around' && styles.spaceAround,
          props.space === 'between' && styles.spaceBetween,
          props.fullWidth && styles.fullWidth,
          props.style && props.style,
          props.children.length <= 1 && styles.itemCentered
        ]}
      >
        {props.children.map((item: any, index: number) => (
          <div
            key={index}
            className={props.childrenClassName}
            css={[
              props.gutter
                ? props.col
                  ? css`
                      flex: calc(${(100 / props.col) * 2}% - ${props.gutter}px);
                      @media (min-width: ${breakpoints.lg}px) {
                        flex: calc(${100 / props.col}% - ${props.gutter}px);
                      }
                    `
                  : css`
                      flex: calc(${(100 / props.children.length) * 2}% - ${props.gutter}px);
                      @media (min-width: ${breakpoints.lg}px) {
                        flex: calc(${100 / props.children.length}% - ${props.gutter}px);
                      }
                    `
                : props.col
                ? css`
                    flex: 0 1 ${100 / props.col}%;
                    @media (min-width: ${breakpoints.md}px) {
                      flex: 0 1 ${100 / props.col}%;
                    }
                  `
                : css`
                    flex: 0 1 ${100 / props.children.length}%;
                    @media (min-width: ${breakpoints.md}px) {
                      flex: 0 1 ${100 / props.children.length}%;
                    }
                  `,
              props.childrenStyle
            ]}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
