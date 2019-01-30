#! /bin/sh
set -e

echo "Import secrets from secret manager with $SECRET_ARN"
echo $(aws secretsmanager get-secret-value --secret-id=$SECRET_ARN --region eu-west-1 | jq .SecretString | sed 's/"//g')  > /root/hub.sh
chmod u+x /root/hub.sh
cat /root/hub.sh
. /root/hub.sh