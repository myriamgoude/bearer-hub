import { Snippet } from '../CodeSnippets/CodeSnippets'

const timelineCodeSnippet = {
  cloneTemplate(gitHubUrl: string, templateTitle: string): Snippet {
    return {
      language: 'bash',
      code: `$ git clone ${gitHubUrl} && cd templates/${templateTitle}
$ yarn install`
    }
  },

  generateSetup(apiAuthType: string): Snippet {
    function getSnippetByApiAuthType(apiAuthType: string) {
      switch (apiAuthType.toLowerCase()) {
        case 'oauth1':
        case 'oauth2':
          return '$ yarn bearer setup:auth CLIENT_ID:CLIENT_SECRET'
        case 'apikey':
          return '$ yarn bearer setup:auth API_KEY'
        case 'basic':
          return '$ yarn bearer setup:auth USERNAME:PASSWORD'

        default:
          return '$ yarn bearer setup:auth'
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
      code: '$ yarn bearer invoke defaultFunction'
    }
  },

  customFunction(): Snippet {
    return {
      language: 'bash',
      code: `$ yarn bearer generate:function myFunction

    create: functions/myFunction.ts

Function generated
✨ Done`
    }
  },

  deployIntegration(): Snippet {
    return {
      language: 'bash',
      code: `$ yarn bearer push

Refreshing tokens... done
  ✓ Generate bundle
  ✓ Transfer bundle

🐻 Integration successfully pushed.`
    }
  }
}

export default timelineCodeSnippet
