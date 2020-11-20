#!/bin/bash

version=0.0.1

npm i
npm run build
docker build --rm -f Dockerfile -t hophop/stalkit-client:$version .
docker push hophop/stalkit-client:$version