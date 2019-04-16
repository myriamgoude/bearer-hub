import React from 'react'

export const onRenderBody = ({ setHeadComponents }, { consentSolutionConfig, cookieSolutionConfig }) => {
  if (!consentSolutionConfig && !cookieSolutionConfig) {
    return
  }

  const snippet = `window._iub = _iub || [];window._iub.csConfiguration = ${JSON.stringify({
    ...consentSolutionConfig,
    ...cookieSolutionConfig
  })};`

  return setHeadComponents([
    <script key="1" src="//cdn.iubenda.com/cs/tcf/stub.js" />,
    <script key="2" dangerouslySetInnerHTML={{ __html: snippet }} />,
    <script key="3" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async={true} />
  ])
}
