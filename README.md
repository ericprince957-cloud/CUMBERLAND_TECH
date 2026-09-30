# Cumberland Tech (NIG.) - HVAC Solutions Website

Professional website for Cumberland Tech (NIG.), an HVAC company based in Delta State, Nigeria.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push this project to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - Cumberland Tech website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cumberland-tech.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📁 Project Structure

```
CUMBERLAND_TECH/
├── index.html              # Vite entry point
├── vercel.json             # Vercel deployment config
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite build config
├── src/
│   ├── App.tsx             # Main React component (full website)
│   ├── main.tsx            # React entry point
│   └── index.css           # Tailwind CSS imports
├── public/
│   ├── style.css           # Standalone CSS (available at /style.css)
│   ├── script.js           # Standalone JS (available at /script.js)
│   └── static-site.html    # Standalone HTML version
└── README.md               # This file
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Features

- ✅ Mobile-first responsive design
- ✅ Sticky navigation with mobile hamburger menu
- ✅ WhatsApp integration (all buttons link to wa.me/2347066350488)
- ✅ Service cards with pre-filled WhatsApp messages
- ✅ Image gallery with hover effects
- ✅ Google Maps embed for location
- ✅ Floating WhatsApp button
- ✅ Smooth scroll navigation
- ✅ Professional color scheme (Deep Blue, White, Orange)

## 🎨 Color Palette

- **Primary Blue:** #1e3a5f (Trust/Professional)
- **Accent Orange:** #f97316 (Energy/Action)
- **WhatsApp Green:** #22c55e (Communication)
- **White:** #ffffff (Cleanliness)

## 📞 Business Details

- **Business:** Cumberland Tech (Nig.)
- **Phone:** 07066350488
- **WhatsApp:** https://wa.me/2347066350488
- **Address:** ShopRite Km 1, Refinery Road, Effurun Roundabout, Delta State

## 🛠 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Font Awesome 6 (icons)
- Google Fonts (Inter)

## 📄 License

© 2026 Cumberland Tech (Nig.). All Rights Reserved.
Built by Vector Codes.
