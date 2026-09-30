# Deployment Guide - Cumberland Tech Website

This guide provides step-by-step instructions for deploying the Cumberland Tech website to various platforms.

## Table of Contents
- [Deploy to Vercel (Recommended)](#deploy-to-vercel-recommended)
- [Deploy to Netlify](#deploy-to-netlify)
- [Deploy to GitHub Pages](#deploy-to-github-pages)
- [Manual Deployment](#manual-deployment)
- [Troubleshooting](#troubleshooting)

---

## Deploy to Vercel (Recommended)

Vercel is the recommended platform for this project as it's optimized for Vite/React applications.

### Method 1: GitHub Integration (Easiest)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Cumberland Tech website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cumberland-tech.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Select your repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - ✅ Your site is live at `https://your-project.vercel.app`

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `cumberlandtech.com`)
   - Follow DNS configuration instructions

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to project directory
cd cumberland-tech

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Method 3: Deploy Built Files

```bash
# Build the project
npm run build

# Deploy the dist folder
vercel --prod dist
```

---

## Deploy to Netlify

### Method 1: Drag and Drop

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the Netlify drop zone
4. ✅ Site is deployed!

### Method 2: GitHub Integration

1. Push code to GitHub (see Vercel instructions)
2. Go to Netlify → "Add new site" → "Import an existing project"
3. Select GitHub and your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

### Method 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

---

## Deploy to GitHub Pages

### Using GitHub Actions

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to GitHub
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Select "gh-pages" branch
6. ✅ Site is live at `https://YOUR_USERNAME.github.io/cumberland-tech/`

**Note:** Update `vite.config.js` to add base path:
```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/cumberland-tech/', // Add this line
})
```

---

## Manual Deployment

### Build the Project

```bash
npm install
npm run build
```

### Upload Files

Upload the contents of the `dist/` folder to your web host:
- cPanel File Manager
- FTP/SFTP
- Any web hosting service

### Required Files

Make sure these files are uploaded:
- `index.html`
- `assets/` folder (contains CSS and JS)
- All image files

---

## Troubleshooting

### Issue: 404 Error on Page Refresh

**Solution:** Ensure `vercel.json` has rewrites configured:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Issue: Images Not Loading

**Solution:** 
- Check image paths in `src/App.tsx`
- Ensure images are in the `public/` folder
- Verify image URLs are correct

### Issue: WhatsApp Links Not Working

**Solution:**
- Verify phone number format: `https://wa.me/2347066350488`
- Ensure no spaces or special characters in the number
- Test links on mobile device

### Issue: Build Fails

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Issue: Styles Not Loading

**Solution:**
- Check that Tailwind CSS is properly imported in `src/index.css`
- Verify `@import "tailwindcss";` is present
- Clear browser cache

---

## Environment Variables (Optional)

If you need to add environment variables:

1. Create `.env` file:
```env
VITE_WHATSAPP_NUMBER=2347066350488
VITE_BUSINESS_NAME=Cumberland Tech
```

2. Use in code:
```typescript
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
```

3. Add to `.gitignore`:
```
.env
.env.local
.env.production
```

---

## Performance Optimization

### Enable Compression

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### Optimize Images

- Use WebP format for better compression
- Resize images to appropriate dimensions
- Use lazy loading for gallery images

---

## Post-Deployment Checklist

- [ ] Test all pages on mobile and desktop
- [ ] Verify all WhatsApp links work
- [ ] Check Google Maps embed loads
- [ ] Test contact form (if added)
- [ ] Verify all images load correctly
- [ ] Check SEO meta tags
- [ ] Test navigation menu on mobile
- [ ] Verify floating WhatsApp button works
- [ ] Check page load speed
- [ ] Set up custom domain (optional)
- [ ] Add SSL certificate (automatic on Vercel)

---

## Support

If you encounter any issues:
- Check the [Vercel Documentation](https://vercel.com/docs)
- Review [Vite Documentation](https://vitejs.dev/)
- Contact: WhatsApp 07066350488

---

**Last Updated:** 2026
**Built by:** Vector Codes
