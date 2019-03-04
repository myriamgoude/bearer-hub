import * as React from 'react'
import { css } from '@emotion/core'

import { Error } from '../Error/Error'

import styles from './Grid.style'
import { breakpoints } from '../../styles/variables'

interface IGridProps {
  children: any
  space?: string
  childrenClassName?: any
  fullWidth?: boolean
  gutter?: number
  className?: any
  col?: number
  css?: any
}

const Grid = (props: IGridProps) => {
  if (props.children.length <= 6) {
    return (
      <div
        css={[
          styles.root,
          props.space === 'around' && styles.spaceAround,
          props.space === 'between' && styles.spaceBetween,
          props.fullWidth && styles.fullWidth,
          props.css && props.css,
          props.className && props.className
        ]}
      >
        {props.children.map((item: any, index: number) => (
          <div
            key={index}
            css={[
              props.gutter
                ? props.col
                  ? css`
                      width: calc(${(100 / props.col) * 2}% - ${props.gutter}px);
                      @media (min-width: ${breakpoints.lg}px) {
                        width: calc(${100 / props.col}% - ${props.gutter}px);
                      }
                    `
                  : css`
                      width: calc(${(100 / props.children.length) * 2}% - ${props.gutter}px);
                      @media (min-width: ${breakpoints.lg}px) {
                        width: calc(${100 / props.children.length}% - ${props.gutter}px);
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
              props.childrenClassName && props.childrenClassName
            ]}
          >
            {item}
          </div>
        ))}
      </div>
    )
  }
  return <Error message="Grid only takes up to 6 children" />
}

export default Grid
