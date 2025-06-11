# BharatBasha - GitHub + Netlify Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and click "New repository"
2. Name it: `bharatbasha-telugu-dictionary` (or your preferred name)
3. Make it **Public** (required for free Netlify)
4. Don't initialize with README (we have files ready)
5. Click "Create repository"

## Step 2: Upload Files to GitHub

You have two options:

### Option A: GitHub Web Interface (Easier)
1. On your new repository page, click "uploading an existing file"
2. Drag ALL files from `github-deploy` folder to upload area
3. Include: index.html, sitemap.xml, robots.txt, _redirects, netlify.toml, README.md
4. Include: entire `word/` folder (94,756 files)
5. Include: entire `english/` folder (26,803 files)
6. Commit message: "BharatBasha Telugu dictionary with 121,560 pages"
7. Click "Commit changes"

### Option B: Git Command Line
```bash
cd github-deploy
git init
git add .
git commit -m "BharatBasha Telugu dictionary with 121,560 pages"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bharatbasha-telugu-dictionary.git
git push -u origin main
```

## Step 3: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as source
4. Select your `bharatbasha-telugu-dictionary` repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
6. Click "Deploy site"

## Step 4: Your Site Goes Live

- Netlify provides a random URL like `amazing-name-123456.netlify.app`
- Your BharatBasha dictionary is immediately accessible
- All 121,560 pages are SEO-indexed via sitemap.xml
- Custom domain can be added in Netlify settings

## What Gets Deployed

- Homepage with BharatBasha branding and logo colors
- 94,756 Telugu word pages targeting searches like "mother meaning in telugu"
- 26,803 English lookup pages for reverse translation
- Complete sitemap for search engine discovery
- Mobile-responsive design with terracotta and deep blue color scheme

Your site will start ranking for Telugu translation searches immediately after deployment.

## Brand Colors Used

- Orange/Terracotta: `#c4744a` (Bharat)
- Deep Blue: `#1e3a5f` (Basha)
- Light Background: `#faf9f7`