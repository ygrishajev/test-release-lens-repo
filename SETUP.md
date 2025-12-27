# Setup Instructions

## Push to GitHub

1. Create a new repository on GitHub (e.g., `test-release-lens-repo`)

2. Add the remote and push:
```bash
cd ~/DevArea/personal/test-release-lens-repo
git remote add origin https://github.com/YOUR_USERNAME/test-release-lens-repo.git
git branch -M main
git push -u origin main
git push --tags
```

## Create Pull Requests

After pushing, create some PRs on GitHub:

1. **PR #1: Add new feature**
   ```bash
   git checkout -b feature/new-feature
   echo "// New feature" >> src/new-feature.js
   git add src/new-feature.js
   git commit -m "Add new feature"
   git push -u origin feature/new-feature
   ```
   - Then create PR on GitHub and merge it

2. **PR #2: Fix bug**
   ```bash
   git checkout main
   git checkout -b fix/bug-fix
   echo "// Bug fix" >> src/fix.js
   git add src/fix.js
   git commit -m "Fix bug"
   git push -u origin fix/bug-fix
   ```
   - Then create PR on GitHub and merge it

3. **PR #3: Add documentation**
   ```bash
   git checkout main
   git checkout -b docs/update-readme
   echo "## New Section" >> README.md
   git add README.md
   git commit -m "Update documentation"
   git push -u origin docs/update-readme
   ```
   - Then create PR on GitHub and merge it

## Current State

- **Tags created**: v1.0.0, v1.1.0, v1.2.0, v1.2.1, v1.3.0, v1.4.0
- **Commits**: 7 commits total
- **Files**: README.md, package.json, src/index.js, src/utils.js, src/features.js, src/bugfix.js, src/improvements.js

## Quick Test Commands

```bash
# View tags
git tag -l

# View commit history
git log --oneline --decorate

# View commits between tags
git log v1.2.0..v1.3.0 --oneline
```
