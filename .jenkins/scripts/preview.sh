#! /bin/sh
set -e

export NETLIFY_SITE_ID=$1
export SECRET_ARN=$2
CURRENT_BRANCH=$BRANCH_NAME
STAGING=$4


echo "Inject secrets to the hub application"
. ./.jenkins/scripts/env.sh
sh ./.jenkins/scripts/secrets.sh
. /root/hub.sh

if [ $STAGING ]
then
    echo "Build the hub application in STAGING"
    yarn && GATSBY_ACTIVE_ENV=staging yarn build
else
    echo "Build the hub application"
    yarn && yarn build
fi

echo "Deploy the the hub application"
yarn netlify deploy --dir=public > preview
cat ./preview

node ./.jenkins/scripts/preview.js $CURRENT_BRANCH './preview'
