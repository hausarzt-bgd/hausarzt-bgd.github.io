#!/bin/sh

jekyll build
git add _site/
git commit -m "Site Update"
git push -f origin `git subtree split --prefix _site/ master`:gh-pages
jekyll serve