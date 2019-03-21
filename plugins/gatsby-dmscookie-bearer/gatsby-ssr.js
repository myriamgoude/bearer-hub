import React from 'react'

export const onRenderBody = ({ setHeadComponents }, { policy }) => {
  if (!policy) {
    return
  }
  return setHeadComponents([
    <script
      key="dmscookie-js"
      type="text/javascript"
      charSet="UTF-8"
      src={`https://private.dmscookie.com/scripts/${policy}.js`}
      async={true}
    />
  ])
}
