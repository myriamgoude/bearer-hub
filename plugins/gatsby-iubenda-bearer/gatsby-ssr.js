import React from 'react'

export const onRenderBody = ({ setHeadComponents }, { consentSolutionConfig, cookieSolutionConfig }) => {
  if (!consentSolutionConfig && !cookieSolutionConfig) {
    return
  }
  const snippet = `if(typeof window !== undefined){window._iub = window._iub || [];window._iub.csConfiguration = ${JSON.stringify(
    { ...consentSolutionConfig, ...cookieSolutionConfig }
  )};}`
  return setHeadComponents([
    <script key="iubenda-conf" dangerouslySetInnerHTML={{ __html: snippet }} />,
    <script key="iubenda-cookie-js" src="//cdn.iubenda.com/cookie_solution/safemode/iubenda_cs.js" async={true} />,
    <script key="iubenda-consent-js" src="//cdn.iubenda.com/consent_solution/iubenda_cons.js" async={true} />
  ])
}
