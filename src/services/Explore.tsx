interface IItem {
  uuid: string
  title: string
}

interface IIntegration {
  uuid: string
  title: string
  provider: {
    uuid: string
    title: string
  }
}

// Returns a path to an Integration page, given its UUID and title
// and the title and UUID of its provider.
// These can be Integration, Category, or Provider pages
export function integrationPath(integration: IIntegration) {
  return `/explore/${integration.provider.uuid}/${slug(integration.provider.title)}/${integration.uuid}/${slug(
    integration.title
  )}`
}

export function providerPath(provider: IItem) {
  return `/explore/provider/${provider.uuid}/${slug(provider.title)}`
}

export function categoryPath(category: IItem) {
  return `/explore/category/${category.uuid}/${slug(category.title)}`
}

// Generate a slug given an item with a title
// E.g. given item title "My Title", the generated slug will be "my-title"
export function slug(title: string) {
  return `${title.toLowerCase().replace(/\s/g, '-')}`
}

export function timer(time: number) {
  const now = new Date()
  const minutesAdded = new Date(now.getTime() + time * 60 * 1000)
  const realTime = `${minutesAdded.getHours()}:${minutesAdded
    .getMinutes()
    .toString()
    .padStart(2, '0')}`
  return realTime
}
