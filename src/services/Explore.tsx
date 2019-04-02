interface IItem {
  hubID: string
  title: string
}

interface IIntegration {
  hubID: string
  title: string
  provider: {
    hubID: string
    title: string
  }
}

interface ITemplate {
  hubID: string
  provider: {
    hubID: string
    title: string
  }
}

// Returns a path to a Template page, given its Hub ID (a unique
// and required integer column) and title, and Hub ID and title
// of its provider
//
// E.g. "/explore/2/slack/5/slack-notification"
export function templatePath(template: ITemplate) {
  return `/explore/${template.provider.hubID}/${slug(template.provider.title)}/${template.hubID}/${slug(
    template.provider.title
  )}-api`
}

// Returns a path to an Integration page, given its Hub ID (a unique
// and required integer column) and title, and Hub ID and title
// of its provider
//
// E.g. "/explore/2/slack/5/slack-notification"
export function integrationPath(integration: IIntegration) {
  return `/explore/${integration.provider.hubID}/${slug(integration.provider.title)}/${integration.hubID}/${slug(
    integration.title
  )}`
}

// Returns a path to a Provider page, given its Hub ID (a unique
// and required integer column) and title
//
// E.g. "/explore/provider/2/slack/"
export function providerPath(provider: IItem) {
  return `/explore/provider/${provider.hubID}/${slug(provider.title)}`
}

// Returns a path to a Category page, given its Hub ID (a unique
// and required integer column) and title
//
// E.g. "/explore/category/3/communication/"
export function categoryPath(category: IItem) {
  return `/explore/category/${category.hubID}/${slug(category.title)}`
}

// Generates a slug given an item with a title
//
// E.g. given item title "My Title", the generated slug will be
// "my-title"
export function slug(title: string) {
  return `${title.toLowerCase().replace(/\s/g, '-')}`
}

// Adds a given number of minutes to the current time
//
// Returns a String
export function timer(time: number) {
  const now = new Date()
  const minutesAdded = new Date(now.getTime() + time * 60 * 1000)
  const realTime = `${minutesAdded.getHours()}:${minutesAdded
    .getMinutes()
    .toString()
    .padStart(2, '0')}`
  return realTime
}
