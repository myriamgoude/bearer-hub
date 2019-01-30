exports.onRouteUpdate = () => {
  if (!window.analytics) { return }

  window.analytics.page()
}
