#!/bin/sh -x

aws cloudfront describe-function --name www-surrealdb-com-viewer-response > temp.json
ETAG=$(jq -r '.ETag' temp.json)
aws cloudfront update-function --name www-surrealdb-com-viewer-response --function-code fileb://index.js --function-config Comment="",Runtime="cloudfront-js-1.0" --if-match $ETAG > temp.json
ETAG=$(jq -r '.ETag' temp.json)
aws cloudfront publish-function --name www-surrealdb-com-viewer-response --if-match $ETAG > temp.json
rm -rf temp.json
