#! /bin/sh

set -e

export AWS_ACCESS_KEY_ID=$AWS_ACCESS_USR
export AWS_SECRET_ACCESS_KEY=$AWS_ACCESS_PSW

credentials=$(aws sts assume-role --role-arn=arn:aws:iam::794568872834:role/identity-admin-dev  --role-session-name=jenkins)

export AWS_ACCESS_KEY_ID=$(echo $credentials | jq -r .Credentials.AccessKeyId)
export AWS_SECRET_ACCESS_KEY=$(echo $credentials | jq -r .Credentials.SecretAccessKey)
export AWS_SESSION_TOKEN=$(echo $credentials | jq -r .Credentials.SessionToken)