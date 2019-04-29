interface IItem {
  hubID: string
  title: string
}

interface ITemplate {
  hubID: string
  title: string
  provider: {
    hubID: string
    title: string
  }
}

// Returns a path to a Template page, given its Hub ID (a unique
// and required integer column) and title, and Hub ID and title
// of its provider
//
// E.g. "/integrations/5/slack-notification"
export function templatePath(template: ITemplate) {
  return `/integrations/${template.hubID}/${slug(template.title)}`
}

// Returns a path to a Category page, given its Hub ID (a unique
// and required integer column) and title
//
// E.g. "/integrations/category/3/communication/"
export function categoryPath(category: IItem) {
  return `/integrations/category/${category.hubID}/${slug(category.title)}`
}

// Generates a slug given an item with a title
//
// E.g. given item title "My Title", the generated slug will be
// "my-title"
export function slug(title: string) {
  return `${title.toLowerCase().replace(/\s/g, '-')}`
}

// See also onPostBuild.js which has a similar function
export function humanizeAuthType(authType: string) {
  if (authType === 'APIKey') {
    return 'API Key'
  }
  return authType
}

// Helper to create the right provider credentials naming
// e.g. Dropbox OAuth2 credentials, PagerDuty API key, etc.
export function apiProviderCredentials(apiAuthType: string, apiProviderName: string) {
  switch (apiAuthType.toLowerCase()) {
    case 'oauth2':
    case 'oauth1':
      return `${apiProviderName} ${apiAuthType} credentials`
    case 'apikey':
      return `${apiProviderName} API key`
    default:
      return `${apiProviderName} credentials`
  }
}
