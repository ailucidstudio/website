# AILucid Studio Website - Deployment Guide

## 🚀 Quick Start

This is a fully static website built with vanilla HTML, CSS, and JavaScript. No build process required!

## 📦 What's Included

- ✅ Responsive design with futuristic minimalist style
- ✅ All core pages (Home, Laboratorio, Sistema, Roles, Colaborar, Comunidad)
- ✅ Individual role pages (4 roles detailed)
- ✅ Global CSS and JavaScript
- ✅ Email modal functionality
- ✅ Mobile-first responsive layout

## 🌐 Deployment Options

### Option 1: GitHub Pages

1. Push this folder to a GitHub repository
2. Go to Settings > Pages
3. Select branch (main) and root folder
4. Your site will be live at `https://yourusername.github.io/repo-name/`

### Option 2: Netlify

1. Drag and drop this folder to Netlify
2. Or connect your GitHub repo
3. No build settings needed - it's static!
4. Site will be live instantly

### Option 3: Vercel

1. Import your repository to Vercel
2. No build configuration needed
3. Deploy with one click
4. Automatic deployments on push

## 📁 File Structure

```
/
├── index.html              # Home page
├── css/
│   └── main.css           # Global styles (futuristic minimalist)
├── js/
│   └── main.js            # Global JS (modal, utilities)
├── assets/
│   └── logo.png           # Logo SVG
├── laboratorio/
│   └── index.html         # Laboratory page
├── sistema/
│   └── index.html         # System page
├── roles/
│   ├── index.html         # Roles overview
│   ├── arquitecto-notion.html
│   ├── community-manager-ia.html
│   ├── content-creator-ia.html
│   └── integrador-sistemas.html
├── colaborar/
│   └── index.html         # Collaboration page
└── comunidad/
    └── index.html         # Community page
```

## 🎨 Customization

### Colors
Edit CSS variables in `/css/main.css`:
```css
:root {
  --primary: #00d9ff;      /* Main brand color */
  --secondary: #6366f1;    /* Secondary accent */
  --dark: #0a0e27;         /* Dark backgrounds */
  --darker: #050814;       /* Darker backgrounds */
  --accent: #64ffda;       /* Accent highlights */
}
```

### Content
- Each page is self-contained HTML
- Update text directly in HTML files
- All pages use the same header/footer (copy-pasted for simplicity)

### Email
Change the email in `/js/main.js`:
```javascript
const emailModal = {
  email: 'your-email@example.com',
  // ...
}
```

## 📱 Testing Locally

### Option 1: Python Server
```bash
cd AILucid_Web_Structure
python -m http.server 8000
```
Then visit: http://localhost:8000

### Option 2: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## ✅ Pre-deployment Checklist

- [ ] Update email address in `js/main.js`
- [ ] Replace placeholder content with real information
- [ ] Add real social media links (currently placeholders)
- [ ] Test all navigation links
- [ ] Test email modal functionality
- [ ] Test on mobile devices
- [ ] Verify all images load (if added)

## 🔧 Maintenance

This is a static site, so updates require:
1. Edit the HTML/CSS/JS files directly
2. Push changes to your repository
3. Site will auto-deploy (GitHub Pages, Netlify, Vercel)

## 📊 Analytics (Optional)

Add Google Analytics or Plausible by adding their script before `</head>`:
```html
<!-- Add your analytics script here -->
```

## 🌟 Features

- Fully responsive (mobile, tablet, desktop)
- Futuristic minimalist design
- Email contact modal
- Smooth animations
- SEO-friendly structure
- Fast loading (no frameworks!)
- 100% static (no backend needed)

## 🚨 Important Notes

1. All paths are relative - works anywhere
2. No build process required
3. No dependencies to install
4. Pure HTML/CSS/JavaScript
5. Ready to deploy as-is

## 📞 Support

For questions about the architecture or modifications, refer to the main README.md or contact the development team.

---

Built with ❤️ by AILucid Studio
Human Intelligence + AI