interface IIntegration {
  id: string
  title: string
}

export function path(integration: IIntegration) {
  return `/explore/${slug(integration)}`
}

// Generate a slug given an Integration with an ID and title
//
// e.g. given Integration with ID "123abc" and title "My Title", the
// generated slug will be "123abc-my-title"
export function slug({ id, title }: IIntegration) {
  if (id && title) {
    // This logic is duplicated when the GraphCMS pages are created
    // See /gatsby/createPages.js
    return `${id}-${title.toLowerCase().replace(/\s/g, '-')}`
  }

  return ''
}
