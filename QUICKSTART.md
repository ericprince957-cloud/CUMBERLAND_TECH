# Quick Start Guide - Cumberland Tech Website

Get your website up and running in 5 minutes!

## 📦 What's Included

```
cumberland-tech/
├── 📄 README.md              # Full documentation
├── 📄 DEPLOYMENT.md          # Deployment instructions
├── 📄 CHANGELOG.md           # Version history
├── 📄 .gitignore             # Git ignore rules
├── 📄 vercel.json            # Vercel config
├── 📄 package.json           # Dependencies
├── 📄 vite.config.js         # Build config
├── 📄 tsconfig.json          # TypeScript config
├── 📄 index.html             # HTML entry point
├── 📁 src/                   # Source code
│   ├── App.tsx              # Main website component
│   ├── main.tsx             # React entry
│   └── index.css            # Styles
└── 📁 public/                # Static assets
    ├── style.css            # Standalone CSS
    ├── script.js            # Standalone JS
    └── static-site.html     # Static HTML version
```

## 🚀 Quick Deploy (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Test Locally
```bash
npm run dev
# Open http://localhost:3000
```

### Step 3: Deploy to Vercel
```bash
# Option A: Via GitHub (Recommended)
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/cumberland-tech.git
git push -u origin main
# Then connect to Vercel at vercel.com

# Option B: Via CLI
npm install -g vercel
vercel --prod
```

## 📱 Features Ready to Use

✅ Mobile-responsive design
✅ WhatsApp integration (07066350488)
✅ 7 service cards with quote requests
✅ Image gallery (4 projects)
✅ Contact section with Google Maps
✅ Floating WhatsApp button
✅ Professional HVAC branding
✅ SEO optimized

## 🎨 Customize

### Change Business Info
Edit `src/App.tsx`:
```typescript
const WHATSAPP_LINK = 'https://wa.me/2347066350488';
const PHONE_NUMBER = '07066350488';
```

### Update Services
Edit the `services` array in `src/App.tsx`:
```typescript
const services = [
  { name: 'Your Service 1', icon: 'fa-icon-name' },
  // ...
];
```

### Change Images
Update `galleryImages` array with your image URLs:
```typescript
const galleryImages = [
  { url: 'your-image-url.jpg', label: 'Project 1' },
  // ...
];
```

## 🌐 Deploy Options

### Vercel (Recommended)
- Auto-deploys from GitHub
- Free SSL certificate
- Custom domain support
- Fast CDN

### Netlify
- Drag & drop deployment
- Free hosting
- Form handling

### GitHub Pages
- Free hosting
- Custom domain support
- Requires base path config

## 📞 Support

- **WhatsApp:** https://wa.me/2347066350488
- **Phone:** 07066350488
- **Location:** ShopRite Km 1, Refinery Road, Effurun, Delta State

## 📚 Documentation

- **README.md** - Full project documentation
- **DEPLOYMENT.md** - Detailed deployment guide
- **CHANGELOG.md** - Version history

## ⚡ Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

## ✅ Pre-Deployment Checklist

- [ ] Test on mobile device
- [ ] Verify WhatsApp links work
- [ ] Check all images load
- [ ] Test Google Maps embed
- [ ] Verify contact info is correct
- [ ] Check navigation menu
- [ ] Test floating WhatsApp button

## 🎯 Next Steps

1. Deploy to Vercel
2. Set up custom domain (optional)
3. Share website link with customers
4. Add to Google My Business
5. Promote on social media

---

**Built by Vector Codes** | © 2026 Cumberland Tech (Nig.)
