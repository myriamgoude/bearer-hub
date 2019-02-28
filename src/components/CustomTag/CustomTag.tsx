import * as React from 'react'

interface ICustomTagProps {
  tag: any
  children?: any
}

const CustomTag = (props: ICustomTagProps) => {
  const Tag = props.tag
  return <Tag>{props.children}</Tag>
}

export default CustomTag
