#!/usr/bin/env bash

SITE_DIRECTORY="site"
DIST_DIRECTORY="dist"
GITHUB_REPO="git@github.com:masogit/apm.git"
GH_PAGES_SITE="https://masogit.github.io/apm/"

npm run build

rm -rf "$SITE_DIRECTORY"
git clone "$GITHUB_REPO" "$SITE_DIRECTORY"
cd "$SITE_DIRECTORY"
rm -rf *
cp -R ../"$DIST_DIRECTORY"/* .


git add --all
git commit -m "Update website"
git push -f
sleep 1

cd ..
rm -rf "$SITE_DIRECTORY"
open "$GH_PAGES_SITE"