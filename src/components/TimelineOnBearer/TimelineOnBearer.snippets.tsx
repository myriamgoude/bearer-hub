import { Snippet } from '../CodeSnippets/CodeSnippets'

const timelineCodeSnippet = {
  cloneTemplate(templateTitle: string): Snippet {
    // Returnse.g. Google Drive Calendar becomes google-drive-calendar
    function formatTemplateTitle(templateTitle: string) {
      return templateTitle
        .toLowerCase()
        .split(' ')
        .join('-')
    }

    // Returns e.g. providers/asana, providers/dropbox
    function templateFolderPath(templateTitle: string) {
      return `providers/${formatTemplateTitle(templateTitle)}`
    }

    return {
      language: 'bash',
      code: `$ npm init bearer ${formatTemplateTitle(templateTitle)} -t -d ${templateFolderPath(templateTitle)}
$ cd ${formatTemplateTitle(templateTitle)}`
    }
  },

  generateSetup(apiAuthType: string, apiProviderName: string): Snippet {
    function getSnippetByApiAuthType(apiAuthType: string, apiProviderName: string) {
      switch (apiAuthType.toLowerCase()) {
        case 'oauth1':
        case 'oauth2':
          return `$ npm run bearer setup:auth

 ? Enter ${apiProviderName} Client ID:  
 ? Enter ${apiProviderName} Client Secret:`
        case 'apikey':
          return `$ npm run bearer setup:auth

 ? Enter ${apiProviderName}API key:`
        case 'basic':
          return '$ npm run bearer setup:auth USERNAME:PASSWORD'

        default:
          return '$ npm run bearer setup:auth'
      }
    }

    const snippet = getSnippetByApiAuthType(apiAuthType, apiProviderName)

    return {
      language: 'bash',
      code: snippet
    }
  },

  defaultFunction(): Snippet {
    return {
      language: 'bash',
      code: '$ npm run bearer invoke defaultFunction'
    }
  },

  customFunction(): Snippet {
    return {
      language: 'bash',
      code: `$ npm run bearer generate:function myFunction

    create: functions/myFunction.ts

Function generated
✨ Done`
    }
  },

  deployIntegration(): Snippet {
    return {
      language: 'bash',
      code: `$ npm run bearer push

Refreshing tokens... done
  ✓ Generate bundle
  ✓ Transfer bundle

🐻 Integration successfully pushed.`
    }
  }
}

export default timelineCodeSnippet
