import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

interface ILinkProps {
  to: string
  [key: string]: any
}

const Link: React.SFC<ILinkProps> = ({ children, to, ...rest }: ILinkProps) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink to={to} {...rest}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}

export default Link
