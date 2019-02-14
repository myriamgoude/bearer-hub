import React from 'react'

export const onRenderBody = ({ setHeadComponents }, { cookieSolutionConfig }) => {
  if(!cookieSolutionConfig){
    return
  }
  const snippet = `var _iub = _iub || []; _iub.csConfiguration = ${JSON.stringify(cookieSolutionConfig)};`
  return setHeadComponents([
      <script key='iubenda-cookie-conf' dangerouslySetInnerHTML={{ __html: snippet }} />,
      <script key='iubenda-cookie-js' src='//cdn.iubenda.com/cookie_solution/safemode/iubenda_cs.js' async={true} />
  ])
}
