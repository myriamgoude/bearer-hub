exports.onRouteUpdate = () => {
  if (!window.analytics) {
    return
  }

  window.analytics.page()
}
/*
  add font faces globally to site this ensures they are not reloaded for any reason
  as reloading causes 'flashing' display issues
*/
require('./src/styles/font-face.css')
