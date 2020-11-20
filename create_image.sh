#!/bin/bash

version=0.0.1

npm i
npm run build
docker build --rm -f Dockerfile -t binarysearch/stalkit-client:$version .
#docker push binarysearch/stalkit-client:$version