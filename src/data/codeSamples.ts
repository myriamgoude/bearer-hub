export default {
  backendSamples: [
    {
      name: 'Express',
      slug: 'express',
      language: 'javascript',
      code_push: `import express from 'express'
import bearerWebhooks from '@bearer/node/lib/express'

const app = express()

const webhookHandlers = {
  ['bearer-integration-uuid']: async req => {
    console.log(req.body)
  }
}

app.use('/bearer/webhooks', bearerWebhooks(webhookHandlers), { token: 'BEARER_ENCRYPTION_KEY' })
    `
    },
    {
      name: 'Javascript',
      slug: 'javascript-back',
      language: 'javascript',
      code_push: `import { BearerClient } from '@bearer/node/lib/client'

const bearerClient = new BearerClient('BEARER_SECRET_TOKEN')

bearerClient
  .call('bearer-integration-uuid', 'Share', {
    authId: 'user-token',
    message: 'Hello World'
  })
  .then(({data}) => {
    console.log('Successful call', data)
  })
  .catch(() => {
    console.log('Oops there is something wrong')
  })
    `
    },
    {
      name: 'Ruby',
      slug: 'ruby',
      language: 'ruby',
      code_push: `Bearer.setup { |bearer| bearer.BEARER_SECRET_TOKEN = 'BEARER_SECRET_TOKEN' }
bearerClient.call("bearer-integration-uuid", "share", {
    authId: "user-token"
    message: 'Hello World'
})
    `
    }
  ],

  frontendSamples: [
    {
      name: 'JavaScript',
      slug: 'javascript-front',
      language: 'markup',
      code_query: `<script src="https://cdn.jsdelivr.net/npm/@bearer/js@beta5/lib/bearer.production.min.js"></script>
<script type="text/javascript">
  bearer(clientId)
</script>

<bearer-integration-uuid auth-id='user-token' message='Hello World!'></bearer-integration-uuid>`
    },
    {
      name: 'React',
      slug: 'react',
      language: 'jsx',
      code_query: `//Import BearerComponent
import { Bearer, bearerComponent } from '@bearer/react'

//Initialize Share Component
const Share = bearerComponent<{auth-id?:string, message?:string}>('bearer-integration-uuid')

const App = () => (
  <Bearer client={clientId}>
    <Share 
      auth-id='user-token'
      message='Hello World!'
    />
  </Bearer>
);`
    }
  ]
}
