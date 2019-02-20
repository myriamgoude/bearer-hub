#! /bin/sh
set -e

export NETLIFY_SITE_ID=$1
export SECRET_ARN=$2
CURRENT_BRANCH=$BRANCH_NAME


echo "Inject secrets to the hub application"
. ./.jenkins/scripts/env.sh
sh ./.jenkins/scripts/secrets.sh
. /root/hub.sh


echo "Build the hub application"
yarn && yarn build

echo "Deploy the the hub application"
yarn netlify deploy --dir=public > preview

node ./.jenkins/scripts/preview.js $CURRENT_BRANCH './preview'
