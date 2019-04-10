import { Snippet } from '../CodeSnippet/CodeSnippet'

const timelineCodeSnippet = {
  cloneTemplate(gitHubUrl: string, templateTitle: string): Snippet {
    return {
      language: 'bash',
      code: `$ git clone ${gitHubUrl}
$ cd ${templateTitle}
$ npm install`
    }
  },

  generateSetup(apiAuthType: string): Snippet {
    function getSnippetByApiAuthType(apiAuthType: string) {
      switch (apiAuthType.toLowerCase()) {
        case 'oauth1':
        case 'oauth2':
          return '$ npm bearer setup:auth CLIENT_ID:CLIENT_SECRET'
        case 'apikey':
          return '$ npm bearer setup:auth API_KEY'
        case 'basic':
          return '$ npm bearer setup:auth USERNAME:PASSWORD'

        default:
          return '$ npm bearer setup:auth'
      }
    }

    const snippet = getSnippetByApiAuthType(apiAuthType)

    return {
      language: 'bash',
      code: snippet
    }
  },

  defaultFunction(): Snippet {
    return {
      language: 'bash',
      code: '$ npm bearer invoke defaultFunction'
    }
  },

  customFunction(): Snippet {
    return {
      language: 'bash',
      code: `$ npm bearer generate:function myFunction`
    }
  },

  deployIntegration(): Snippet {
    return {
      language: 'bash',
      code: `$ npm bearer push

Refreshing tokens... done
  ✓ Generate bundle
  ✓ Transfer bundle

🐻Integration successfully pushed.`
    }
  }
}

export default timelineCodeSnippet
