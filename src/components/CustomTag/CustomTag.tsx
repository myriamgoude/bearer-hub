import * as React from 'react'

interface ICustomTagProps {
  tag: any
  children?: any
  className?: any
}

const CustomTag = (props: ICustomTagProps) => {
  const Tag = props.tag
  return <Tag css={props.className}>{props.children}</Tag>
}

export default CustomTag
