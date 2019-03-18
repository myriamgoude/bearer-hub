interface IItem {
  id?: string
  title: string
}

// Returns a path to the Explore pages.
// These can be Integration, Category, or Provider pages
export function path(item: IItem) {
  return `/explore/${slug(item)}`
}

// Generate a slug given an item with a title and an optional ID
//
// Examples
//
// - Given item title "My Title", the generated slug will be "my-title"
// - Given item with ID "123abc" and title "My Title", the generated
// slug will be "123abc-my-title"
export function slug({ id, title }: IItem) {
  if (id && title) {
    // This logic is duplicated when the GraphCMS pages are created
    // See /gatsby/createPages.js
    return `${id}-${title.toLowerCase().replace(/\s/g, '-')}`
  }
  if (title) {
    // This logic is duplicated when the GraphCMS pages are created
    // See /gatsby/createPages.js
    return `${title.toLowerCase().replace(/\s/g, '-')}`
  }

  return ''
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
