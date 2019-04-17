import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  const snippet = `
    function locationHashChanged() {
      if (location.hash !== '') {
        if(window.Intercom){
          window.Intercom('update')
        }
      }
    }
    window.onhashchange = locationHashChanged;`
  
  return setHeadComponents([
    <script type="text/javascript" key="hashwatcher" dangerouslySetInnerHTML={{ __html: snippet }} />
  ])
}