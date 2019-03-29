#! /bin/sh
set -e

echo "Import secrets from secret manager with $SECRET_ARN"
echo -e $(aws secretsmanager get-secret-value --secret-id=$SECRET_ARN --region eu-west-1 | jq .SecretString | sed 's/"//g')  > /root/hub.sh
chmod u+x /root/hub.sh