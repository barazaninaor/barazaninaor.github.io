# Save Changes

git add .
git commit -m "update: content or code changes"
git push origin main

# Deployment Guide for GitHub Pages

Follow these steps to update your live website after making changes to your code.

1. Run this command to compile your code:
   npx ng build --base-href "/barazani-naor/"

2. Deploy to GitHub Pages
   Run this command to push the build to your live site:
   npx angular-cli-ghpages --dir=dist/naor-barazani/browser
