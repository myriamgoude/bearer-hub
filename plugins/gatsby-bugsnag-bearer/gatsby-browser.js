exports.onClientEntry = (_, pluginOptions) => {
  if (process.env.NODE_ENV === 'production' && pluginOptions.apiKey) {
    const bugsnag = require('@bugsnag/js')
    window.bugsnagClient = bugsnag(pluginOptions)
  }
}
