#!/bin/sh

# Build the Jekyll site
jekyll build

# Ensure the CNAME file is copied into the _site directory
# This is usually done automatically by Jekyll, but it's good to confirm
if [ -f "CNAME" ]; then
    cp CNAME _site/
fi

# Add changes to the _site directory
git add _site/

# Commit the changes
git commit -m "Site Update"

# Force push the changes to the gh-pages branch
git push -f origin `git subtree split --prefix _site/ master`:gh-pages

# Serve the site locally for development/testing
jekyll serve