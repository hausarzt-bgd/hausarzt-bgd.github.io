#!/bin/sh

# Define variables
CUSTOM_DOMAIN="www.hausarzt-bgd.de"  # Replace with your custom domain
BRANCH="gh-pages"
BUILD_DIR="_site"
REPO_URL="origin"  # Default remote repository

# Build the Jekyll site
jekyll build

# Ensure the CNAME file is present in the root of the build directory
echo $CUSTOM_DOMAIN > $BUILD_DIR/CNAME

# Change to the build directory
cd $BUILD_DIR

# Initialize a new Git repository in the build directory
git init

# Configure Git user (optional, if needed)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add files to the Git repository
git add -A

# Commit changes
git commit -m "Deploying to GitHub Pages"

# Force push to the specified branch on the remote repository
git push -f $REPO_URL master:$BRANCH

# Go back to the root directory
cd ..

# Serve the site locally for development/testing
jekyll serve