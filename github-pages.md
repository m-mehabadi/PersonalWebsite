# Configuring GitHub Pages Deployment for Angular Project

This guide explains how to set up GitHub Actions to build and deploy an Angular project to **GitHub Pages**.

---

## 1. Repository Setup

- If your repository is named **`<username>.github.io`**, GitHub will serve your site at:

  - `https://<username>.github.io/`

- If your repo has another name, the site will be available at:

  - `https://<username>.github.io/<repo-name>/`

---

## 2. Check Angular Output Path

Open `angular.json` and confirm the output path. For Angular v17+, the build output usually looks like this:

```json
"options": {
  "outputPath": "dist"
}
```

Angular’s **application builder** places the final site inside `dist/browser/`. We’ll need that path in the workflow.

---

## 3. Create GitHub Action Workflow

Create the file: `.github/workflows/deploy.yml`

```yaml
name: Build and Deploy Angular to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: write

jobs:
  build-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build Angular app
        run: npm run build -- --configuration production --base-href="/"

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./dist/browser
```

### Explanation

- **`--base-href "/"`** → required since this is a user site (`username.github.io`).
- **`publish_dir: ./dist/browser`** → points to the Angular v17+ build folder.
- **`github_token: ${{ secrets.GITHUB_TOKEN }}`** → automatically provided by GitHub for secure deploys.

---

## 4. Enable GitHub Pages

1. Go to **Repo → Settings → Pages**.
2. Under **Source**, select:

   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`

3. Click **Save**.

---

## 5. Verify Deployment

- Push changes to `main` → GitHub Actions will run.
- A `gh-pages` branch will be created with the build files.
- Your site will be live at:

👉 [https://m-mehabadi.github.io](https://m-mehabadi.github.io)

<!-- ---

## 6. (Optional) Handle Angular Routing

If your app uses Angular Router, refreshing a subpath (e.g., `/about`) may cause 404 errors. To fix this:

* Add a **`404.html`** that redirects all routes to `index.html`, or
* Use the `angular-cli-ghpages` package (`ng add angular-cli-ghpages`) which auto-handles redirects.

---

✅ That’s it! Now your Angular site will automatically build and deploy to GitHub Pages every time you push to `main`. -->
