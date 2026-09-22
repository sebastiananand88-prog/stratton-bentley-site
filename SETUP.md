# Stratton & Bentley Opticians Website - Complete Handoff

## What's Included
✅ Full production-ready React/Vite website  
✅ All 27 clinic images integrated  
✅ All pages built and deployed  
✅ Source code for future edits  
✅ Configuration files for Netlify  

## GitHub Repository
**Link:** https://github.com/tobyand-aioperators/stratton  
**Branch:** main

---

## Deploy to Netlify (3 Steps)

### Step 1: Connect GitHub to Netlify
1. Go to **netlify.com**
2. Sign in / Create account
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** as your Git provider
5. Authorize Netlify to access your GitHub account
6. Select the **`stratton`** repository

### Step 2: Configure Build Settings
1. **Build command:** `npm run build`
2. **Publish directory:** `dist/public`
3. Leave everything else blank

### Step 3: Deploy
Click **"Deploy site"**

Netlify will build and deploy automatically. You'll get a live URL in ~2-3 minutes.

---

## After Deployment

### To Update the Website
1. Clone the repo: `git clone https://github.com/tobyand-aioperators/stratton.git`
2. Make changes in `client/src/` folder
3. Push to GitHub: 
   ```bash
   git add .
   git commit -m "Your message"
   git push
   ```
4. Netlify auto-deploys on every push ✅

### Project Structure
```
stratton-handoff/
├── client/                 ← All React pages & components
│   ├── src/pages/         ← Website pages (About, Services, etc)
│   ├── src/components/    ← Reusable components
│   └── public/images/     ← All 27 clinic photos
├── dist/                  ← Production build (ready to deploy)
├── package.json           ← Dependencies
├── vite.config.ts         ← Build configuration
└── netlify.toml           ← Netlify settings
```

### Key Files to Edit
- **Homepage:** `client/src/pages/StrattonHome.tsx`
- **Services pages:** `client/src/pages/EyeExaminations.tsx`, etc.
- **About page:** `client/src/pages/About.tsx`
- **Images:** `client/public/images/`

---

## Support

**If you need help:**
- All pages are fully functional and tested
- Images are optimized and in place
- SEO meta tags configured on all pages
- Mobile responsive design implemented

**To rebuild locally:**
```bash
npm install
npm run build
```

The `dist/public` folder contains your production site ready to deploy anywhere.

---

**Website is ready to go live! 🚀**
