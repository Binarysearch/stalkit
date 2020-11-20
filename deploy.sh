#!/bin/bash

export KUBECONFIG=/home/atenea/.kube/hophop-kubeconfig.yaml

kubectl apply -f ./stalkit-client.yaml