import * as React from 'react'
import { css, cx } from 'emotion'

import { colors, dimensions } from '../../styles/variables'
import { getEmSize } from '../../styles/mixins'

import Text from '../Text'

interface IColoredTextBlocks {
  children?: any
  title: string
  text: any
  onClick?: any
  color?: string
  icon?: string
  iconBg?: string
}

const ColoredTextBlock = (props: IColoredTextBlocks) => {
  const color = props.color ? props.color : colors.branded.black
  return (
    <div
      className={cx(css`
        padding: 0 ${getEmSize(16)};
      `)}
    >
      <div
        className={cx(
          css`
            position: relative;
          `
        )}
      >
        <object
          className={cx(
            css`
              position: absolute;
              display: block;
              top: -70px;
              left: -40px;
              width: ${getEmSize(100)};
              height: ${getEmSize(100)};
            `
          )}
        >
          <img
            src={props.iconBg}
            className={cx(
              css`
                position: absolute;
                width: 100%;
                height: 100%;
              `
            )}
          />
          <img
            src={props.icon}
            className={cx(
              css`
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
              `
            )}
          />
        </object>
        <h3
          className={cx(
            css`
              color: ${color};
              font-size: ${dimensions.headingSizes.h3}em;
            `
          )}
        >
          {props.title}
        </h3>
      </div>
      <Text text={props.text} />
    </div>
  )
}

export default ColoredTextBlock
