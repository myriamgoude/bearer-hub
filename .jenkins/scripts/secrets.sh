#! /bin/sh
set -e

SECRET_ARN=$1
echo "Import secrets from secret manager"
echo -e $(aws secretsmanager get-secret-value --secret-id=$SECRET_ARN --region eu-west-1 | jq .SecretString | sed 's/"//g')  > /root/corp.sh
chmod u+x /root/hub.sh
. /root/hub.sh