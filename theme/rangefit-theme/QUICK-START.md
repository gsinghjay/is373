# RangeFit Shopify Theme - Quick Start Guide

⚡ **Fast reference for common development tasks**

---

## 🚀 Start Development Server

```bash
cd /home/jay/github/is373/theme/rangefit-theme
shopify theme dev --store=rangefit-dev.myshopify.com
```

**Preview:** http://127.0.0.1:9292

---

## 📤 Deploy Changes

### Push Everything
```bash
shopify theme push --store=rangefit-dev.myshopify.com --theme=182405005605
```

### Push CSS Only
```bash
shopify theme push --store=rangefit-dev.myshopify.com --theme=182405005605 --only="assets/rangefit-theme.css"
```

### Push Specific Section
```bash
shopify theme push --store=rangefit-dev.myshopify.com --theme=182405005605 --only="sections/hero.liquid"
```

---

## 🔍 Check Theme Health

```bash
shopify theme check
```

---

## 🌐 Important Links

- **Admin:** https://rangefit-dev.myshopify.com/admin
- **Preview:** https://rangefit-dev.myshopify.com/?preview_theme_id=182405005605
- **Editor:** https://rangefit-dev.myshopify.com/admin/themes/182405005605/editor

---

## 📝 Edit Content (No Code)

1. Go to [Theme Editor](https://rangefit-dev.myshopify.com/admin/themes/182405005605/editor)
2. Click on section to edit
3. Change text, upload images, configure settings
4. Click "Save"

---

## 🎨 Customize Sections

### Hero Section
- Upload background image
- Change title: "Get Energy That Lasts All Day"
- Edit CTA buttons
- Modify trust bar items

### Pricing
- Update prices
- Change feature lists (separate with `|`)
- Modify button links

### Value Props
- Update icons (Font Awesome classes: `fas fa-icon-name`)
- Change titles and descriptions

---

## 🐛 Common Issues

### CSS Not Loading
```bash
# Fix: Re-push CSS
shopify theme push --store=rangefit-dev.myshopify.com --theme=182405005605 --only="assets/rangefit-theme.css"
# Then hard refresh browser: Ctrl+Shift+R
```

### Changes Not Showing
```bash
# Clear browser cache
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### Dev Server Issues
```bash
# Restart dev server
# Press Ctrl+C to stop
shopify theme dev --store=rangefit-dev.myshopify.com
```

---

## 📁 File Structure

```
theme/rangefit-theme/
├── assets/
│   ├── rangefit-theme.css  ← Main styles
│   └── rangefit-theme.js   ← Main JavaScript
├── sections/
│   ├── hero.liquid         ← Hero section
│   ├── pricing.liquid      ← Pricing section
│   ├── value-props.liquid  ← Value props
│   ├── header.liquid       ← Header
│   └── footer.liquid       ← Footer
├── layout/
│   └── theme.liquid        ← Main layout
└── templates/
    └── index.json          ← Homepage
```

---

## ✏️ Make Quick Edits

### Edit CSS
```bash
# Open in your editor
code /home/jay/github/is373/theme/rangefit-theme/assets/rangefit-theme.css

# Push changes
shopify theme push --store=rangefit-dev.myshopify.com --theme=182405005605 --only="assets/rangefit-theme.css"
```

### Edit Section
```bash
# Open section
code /home/jay/github/is373/theme/rangefit-theme/sections/hero.liquid

# Push changes
shopify theme push --store=rangefit-dev.myshopify.com --theme=182405005605 --only="sections/hero.liquid"
```

---

## 🎯 Next TODOs

- [ ] Upload hero background image
- [ ] Upload logo
- [ ] Create navigation menus
- [ ] Add favicon files
- [ ] Test on mobile devices
- [ ] Add testimonials section
- [ ] Add FAQ section
- [ ] Set up products

---

**Full docs:** `SETUP-DOCUMENTATION.md`
