#!/bin/sh -x

rm -rf code.zip
zip -r --symlinks code.zip .
aws s3 cp --profile surreal --region us-east-1 code.zip s3://deploy.surrealdb.com/surrealdb-com.zip
aws lambda --profile surreal --region us-east-1 update-function-code --function-name surrealdb-com --s3-bucket deploy.surrealdb.com --s3-key surrealdb-com.zip
aws lambda --profile surreal --region us-east-1 update-function-configuration --function-name surrealdb-com --runtime nodejs12.x --handler index.main --timeout 5 --memory-size 128
ARN=$(aws lambda --profile surreal --region us-east-1 publish-version --function-name surrealdb-com | jq -r ".FunctionArn")
rm -rf code.zip

aws --profile surreal cloudfront get-distribution --id E2KXLJYI4QY45M > config.json
ETAG=$(jq -r '.ETag' config.json)
jq '.Distribution.DistributionConfig' config.json > temp.json && mv temp.json config.json
jq --arg ARN "$ARN" '.DefaultCacheBehavior.LambdaFunctionAssociations.Items = [.DefaultCacheBehavior.LambdaFunctionAssociations.Items[] | if (.EventType == "viewer-request") then (.LambdaFunctionARN = $ARN) else . end]' config.json > temp.json && mv temp.json config.json
aws --profile surreal cloudfront update-distribution --id E2KXLJYI4QY45M --if-match $ETAG --distribution-config file://config.json > /dev/null
rm -rf config.json
