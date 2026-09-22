# Stratton Website - Partner Setup Guide
## Simple Step-by-Step Instructions

---

## PART 1: Download & Extract (2 minutes)

**Step 1:** You should have received `stratton-complete-handoff.zip`

**Step 2:** Double-click the ZIP file to extract it
- Creates a folder called `stratton-handoff`

**Step 3:** That's it! You now have the complete website.

---

## PART 2: Deploy to Netlify (5 minutes)

### Step 1: Go to Netlify
- Open your browser
- Go to **netlify.com**
- Sign up for free (or log in if you have an account)

### Step 2: Click "Add new site"
- Look for a button that says **"Add new site"**
- Click it
- Select **"Import an existing project"**

### Step 3: Connect GitHub
- Click **"GitHub"**
- Click **"Authorize Netlify"**
- Log in with your GitHub account
- Authorize the connection

### Step 4: Select the Repository
- You'll see a list of repositories
- Find and click **`stratton`**
- Click "Install and authorize"

### Step 5: Configure Build Settings
You'll see a form with settings. Fill in:

| Field | Value |
|-------|-------|
| **Build command** | `npm run build` |
| **Publish directory** | `dist/public` |
| Everything else | Leave blank |

### Step 6: Click "Deploy Site"
- Click the big **"Deploy site"** button
- Wait 2-3 minutes for deployment to complete
- Netlify gives you a live URL (e.g., `https://stratton-abc123.netlify.app`)

### ✅ DONE! Your website is live!

---

## PART 3: Making Changes Later (when needed)

### If You Need to Edit the Website:

**Step 1:** Clone the repository
```bash
git clone https://github.com/tobyand-aioperators/stratton.git
cd stratton
```

**Step 2:** Make your changes
- Edit files in the `client/src/pages/` folder
- Add new images to `client/public/images/`

**Step 3:** Upload changes to GitHub
```bash
git add .
git commit -m "Description of what you changed"
git push
```

**Step 4:** Netlify automatically deploys
- Your changes appear on the live website within 2-3 minutes
- No extra steps needed!

---

## QUICK REFERENCE

### Website Locations
- **Homepage:** `client/src/pages/StrattonHome.tsx`
- **About page:** `client/src/pages/About.tsx`
- **Service pages:** `client/src/pages/EyeExaminations.tsx`, etc.
- **Images:** `client/public/images/`
- **Live site:** Check Netlify dashboard for your URL

### What's Already Done
✅ Website fully built and tested  
✅ All 27 clinic images added  
✅ All pages created and styled  
✅ SEO optimized  
✅ Mobile responsive  
✅ Ready to deploy  

### Important Files
- `SETUP.md` - Full technical guide
- `netlify.toml` - Netlify configuration
- `package.json` - Project dependencies

---

## Need Help?

**If deployment fails:**
- Check you entered `dist/public` in the Publish directory field
- Check you entered `npm run build` in the Build command field
- Try deploying again

**If changes aren't showing:**
- Wait 2-3 minutes after pushing to GitHub
- Refresh the website in your browser
- Check the Netlify deploy log to see if build succeeded

---

## That's Everything! 🎉

You now control the complete website. Good luck!
