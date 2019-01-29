set -e

export NETLIFY_SITE_ID=$1
SECRET_ARN=$2

echo "Inject secrets to the hub application"
. ./.jenkins/scripts/env.sh
. ./.jenkins/scripts/secrets.sh $SECRET_ARN

echo "Build the hub application"
yarn && yarn build

echo "Deploy the the hub application"
yarn netlify deploy --prod  --dir=public