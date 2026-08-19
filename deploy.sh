#!/bin/bash
# Silverton Publishing deploy script
# Usage: ./deploy.sh "commit message"
#
# Stage your changes explicitly first (git add <files>) — this script does
# NOT run `git add -A`, so untracked files never ship by accident. If
# nothing is staged, the commit below will fail with "nothing to commit."

set -e

MSG="${1:-Update site}"

git commit -m "$MSG"
git push origin main

echo ""
echo "Pushed to GitHub. Vercel will auto-deploy."
echo "Check: https://vercel.com/malulo2025s-projects/silverton-publishing"
echo "Site: https://silvertonpublishing.com"
