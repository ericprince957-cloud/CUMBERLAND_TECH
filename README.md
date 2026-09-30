# Cumberland Tech (NIG.) - Professional HVAC Solutions Website

A modern, mobile-responsive, single-page website for Cumberland Tech (NIG.), an HVAC company based in Delta State, Nigeria.

![Website Preview](https://img.shields.io/badge/Status-Live-success)
![Mobile Responsive](https://img.shields.io/badge/Mobile-Responsive-blue)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# 1. Clone or download this repository
git clone https://github.com/YOUR_USERNAME/cumberland-tech.git
cd cumberland-tech

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:3000
```

## 📦 Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist/` folder.

## 🌐 Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - Cumberland Tech website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cumberland-tech.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"
   - ✅ Your site is live!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 3: Deploy Built Files

```bash
# Build the project
npm run build

# Deploy the dist folder
vercel --prod dist
```

## 📁 Project Structure

```
cumberland-tech/
├── index.html              # HTML entry point
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment config
├── tsconfig.json           # TypeScript configuration
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── DEPLOYMENT.md           # Detailed deployment guide
├── src/
│   ├── main.tsx           # React entry point
│   ├── App.tsx            # Main application component
│   └── index.css          # Global styles & Tailwind imports
└── public/
    ├── style.css          # Standalone CSS (optional)
    ├── script.js          # Standalone JS (optional)
    └── static-site.html   # Static HTML version (optional)
```

## 🎨 Features

### Design
- ✅ Mobile-first responsive design
- ✅ Professional color scheme (Deep Blue, White, Orange)
- ✅ Smooth animations and transitions
- ✅ Modern UI with Tailwind CSS
- ✅ Custom fonts (Inter)

### Functionality
- ✅ Sticky navigation with mobile menu
- ✅ Hero section with call-to-action
- ✅ Services grid with WhatsApp integration
- ✅ Image gallery with hover effects
- ✅ Contact section with Google Maps
- ✅ Floating WhatsApp button
- ✅ **EMERGENCY: Sticky "Urgent Repair?" button** (red, pulsing)
- ✅ **INTERACTIVE: Before & After image slider** (drag to compare)
- ✅ **SERVICE AREA: Visual grid with animated map** (5 locations)
- ✅ Smooth scroll navigation
- ✅ SEO optimized meta tags

### WhatsApp Integration
All buttons link to WhatsApp with pre-filled messages:
- Main CTA: "Book a Service via WhatsApp"
- Service cards: "Hi Cumberland Tech, I'm interested in [Service Name]"
- Contact section: "Chat on WhatsApp"
- Floating button: Direct WhatsApp chat

## 📱 Business Information

- **Business Name:** Cumberland Tech (Nig.)
- **Phone:** 07066350488
- **WhatsApp:** https://wa.me/2347066350488
- **Address:** ShopRite Km 1, Refinery Road, Effurun Roundabout, Delta State, Nigeria
- **Services:** Industrial & Domestic HVAC Solutions

## 🛠 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Font Awesome 6
- **Fonts:** Google Fonts (Inter)
- **Deployment:** Vercel

## 🎯 Services Offered

1. Industrial and Domestic Air Conditioning
2. Repair of Freezers
3. Split AC Unit Installation & Repair
4. Standing/Floor AC Unit Services
5. Central HVAC Systems
6. Installation, Maintenance & Repair Services
7. Installation and Servicing of Kitchen Canopy

## 🔧 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run typecheck # Run TypeScript type checking
```

## 📄 License

© 2026 Cumberland Tech (Nig.). All Rights Reserved.

**Built by Vector Codes**

## 🤝 Support

For questions or support, contact:
- WhatsApp: https://wa.me/2347066350488
- Phone: 07066350488

---

**Note:** This is a professional website template designed for HVAC businesses. Customize the content, images, and contact information as needed.
