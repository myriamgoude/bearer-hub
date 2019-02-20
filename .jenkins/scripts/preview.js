const github = require('octonode')
const util = require('util')
const fs = require('fs')

const repoName = 'bearer/hub'
const pullRequestNumber = process.argv[2].split('-')[1]
const filePath = process.argv[3]

const githubClient = () => {
  return github.client(process.env['GITHUB_JENKINS_TOKEN'])
}

const getPr = (repoName, prNumber) => {
  const client = githubClient()
  return client.pr(repoName, prNumber)
}

const prInfo = pr => {
  return new Promise((resolve, reject) => {
    pr.info((err, data, server) => {
      if (err) {
        reject(err)
      }

      resolve(data)
    })
  })
}

const prUpdate = (pr, params) => {
  return new Promise((resolve, reject) => {
    pr.update(params, (err, data, server) => {
      if (err) {
        reject(err)
      }

      resolve(data)
    })
  })
}

const extractPreviewUrl = filePath => {
  url = fs
    .readFileSync(filePath, 'utf8')
    .split('\n')[6]
    .split('URL:')[1]
  return url
}

const main = async () => {
  try {
    const pr = getPr(repoName, pullRequestNumber)
    console.log(`Update the pull request preview url for ${pullRequestNumber} in the repo ${repoName}`)
    const previewUrl = extractPreviewUrl(filePath)
    console.log('The preview url is ', previewUrl)
    const info = await prInfo(pr)
    const originalBody = info.body.split('[PREVIEW URL]')[0]
    result = await prUpdate(pr, {
      body: `${originalBody}\n\n[PREVIEW URL](${previewUrl})`
    })
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

main()
