import { Snippet } from '../CodeSnippet/CodeSnippet'

const timelineCodeSnippet = {
  connectComponent(): Snippet[] {
    return [
      {
        language: 'JS',
        code: `<script src="https://cdn.jsdelivr.net/npm/@bearer/js@0.111.0/lib/bearer.production.min.js"></script>
<script>
var bearer = new Bearer(SETUP_ID, INTEGRATION_NAME)

bearer.connect(myIntegration).then(console.log)
</script>`
      },
      {
        language: 'React',
        code: `TODO`
      }
    ]
  },

  invokeFunction(): Snippet[] {
    return [
      {
        language: 'JS',
        code: `<script src="https://cdn.jsdelivr.net/npm/@bearer/js@0.111.0/lib/bearer.production.min.js"></script>
<script>
var bearer = new Bearer(SETUP_ID, INTEGRATION_NAME)

bearer
  .invoke("myIntegration", "myFunction")
  .then(({data}) => { console.log(data) })
  .catch(console.error)
</script>`
      },
      {
        language: 'React',
        code: `TODO`
      },
      {
        language: 'NodeJS',
        code: `// First install the Bearer SDK
// npm install --save @bearer/node

import { bearer } from '@bearer/nodejs'

bearer.setup(SETUP_ID, INTEGRATION_NAME)
bearer.invoke("{myFunction}" options)`
      },
      {
        language: 'Ruby',
        code: `TODO`
      },
      {
        language: 'Python',
        code: `TODO`
      }
    ]
  }
}

export default timelineCodeSnippet
