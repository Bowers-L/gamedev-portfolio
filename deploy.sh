#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git remote add origin https://github.com/Bowers-L/Bowers-L.github.io.git
git add -A
git commit -m 'deploy'
git branch -M main

# if you are deploying to https://<USERNAME>.github.io
git push -f origin main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -