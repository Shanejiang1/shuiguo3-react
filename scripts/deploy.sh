#!/usr/bin/env bash

yarn build &&

cd build &&

git init &&

git add . &&

git commit -m 'deploy' &&

git remote add origin git@github.com:Shanejiang1/shuiguo-3-website.git &&

git push --set-upstream origin master -f

cd -