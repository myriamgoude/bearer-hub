# 🐻 Bearer Hub 🐻

## Getting Started

```
$ yarn install && yarn start
```

With `yarn start` running, the local site is available at http://localhost:8000/

GraphiQL, the in-browser GraphQL interface, is available at http://localhost:8000/___graphql 

To create a production build, use `yarn build && yarn serve`. The production preview will be available at http://localhost:9000/

### Using direnv

We use [direnv](https://direnv.net/) to manage environment variables.

1. Install [direnv](https://github.com/direnv/direnv#install).
2. Add the appropriate line to your `~/.bash` or `~/.zshrc` file:
    ```
      eval "$(direnv hook bash)"
    ```
    or
    ```
      eval "$(direnv hook zsh)"
    ```
3. Copy the `.envrc.example` file and rename your copy to `.envrc`. Remember never to commit this `.envrc` file to GitHub!
4. Ask for the necessary secrets from the `.envrc.example` file, such as `ALGOLIA_ADMIN_API_KEY` if you need to be able to re-index Algolia's search, to be sent to you securely and add these to your local `.envrc` file. 

### Troubleshooting

Something not working? Here are some steps to try 

1. Delete your local `.cache/`, `node_modules/`, and `public/` directories to "turn it off and on again"
2. If you're seeing an error running `yarn start`, try `yarn build` in case a different -- and hopefully more helpful -- error is thrown :) 

## Environments

* Staging (`master` branch): https://bearer-hub-staging.netlify.com/
* Production (latest release): https://www.bearer.sh/

Jenkins: https://jenkins.bearer.tech/job/Bearer/job/hub/
