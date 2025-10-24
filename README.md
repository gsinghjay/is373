# RangeFit - Shopify Fitness Subscription Platform

**Glucose-aware fitness platform built on Shopify with AI-powered workout personalization**

[![Shopify](https://img.shields.io/badge/Shopify-Basic-96bf48?logo=shopify)](https://rangefit-dev.myshopify.com)
[![Status](https://img.shields.io/badge/Status-Epic%201%20Complete-success)](https://github.com)
[![Theme](https://img.shields.io/badge/Theme-Skeleton-blue)](https://github.com/Shopify/skeleton-theme)

---

## 🎯 Project Overview

RangeFit is a SaaS fitness platform designed for people managing blood sugar through exercise. Built entirely on Shopify infrastructure, it combines e-commerce, content delivery, and member management without custom servers.

**Key Features:**
- 💪 21+ glucose-friendly workout library (member-only access)
- 🔐 Trial subscriptions ($4.99/7 days → $14.99/month)
- 📧 Automated email nurture sequences (ConvertKit)
- 💬 Private Discord community
- 📊 Energy level tracking (Google Forms → Sheets)
- 🎨 Custom design system (3,456 lines CSS migrated)

**Architecture:** Shopify-centric SaaS integration platform
**Budget:** <$60/month operational costs
**Timeline:** 5 weeks to MVP

---

## 📦 Current Status

### ✅ Epic 1: Foundation & Landing Page (COMPLETED)

**Theme Deployed:** `rangefit-theme` (ID: 182405005605)
**Store:** [rangefit-dev.myshopify.com](https://rangefit-dev.myshopify.com/?preview_theme_id=182405005605)
**Location:** `/theme/rangefit-theme/`

**Implemented Sections:**
- ✅ Header with navigation & CTA
- ✅ Hero section with trust bar
- ✅ Value proposition cards (3 blocks)
- ✅ Pricing tiers (Free/Premium/Pro)
- ✅ Footer with links & contact info
- ✅ FAQ accordion
- ✅ Custom CSS (96KB) & JavaScript (17KB)

### 🔜 Upcoming Epics

- **Epic 2:** Email Nurture & Free Plan Delivery (Week 3)
- **Epic 3:** Trial Signup & Subscription Commerce (Week 4)
- **Epic 4:** Member Experience & Workout Library (Week 5)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org))
- **Shopify CLI** 3.86+
- **Git**

### Installation

```bash
# Clone repository
git clone https://github.com/gsinghjay/is373.git
cd is373/theme/rangefit-theme

# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Authenticate with Shopify
shopify auth login
# Use: js426@njit.edu
# Store: rangefit-dev.myshopify.com
```

### Development Commands

```bash
# Start development server (hot reload)
shopify theme dev --store=rangefit-dev.myshopify.com

# Preview at: http://127.0.0.1:9292

# Push changes to development theme
shopify theme push --store=rangefit-dev.myshopify.com --theme=182405005605

# Push CSS only (faster iteration)
shopify theme push --only="assets/rangefit-theme.css"

# Run theme validation
shopify theme check

# List all themes
shopify theme list
```

### Quick Links

- **🎨 Theme Editor:** [Customize Theme](https://rangefit-dev.myshopify.com/admin/themes/182405005605/editor)
- **👁️ Preview:** [Preview Store](https://rangefit-dev.myshopify.com/?preview_theme_id=182405005605)
- **⚙️ Admin:** [Shopify Admin](https://rangefit-dev.myshopify.com/admin)

---

## 📁 Project Structure

```
is373/
├── docs/                          # Project documentation
│   ├── architecture.md            # ✅ Complete technical architecture
│   ├── prd.md                     # Product requirements
│   ├── brief.md                   # Project brief
│   └── prd/                       # Sharded PRD by epic
│
├── theme/rangefit-theme/          # 🎯 Shopify theme (active development)
│   ├── layout/
│   │   └── theme.liquid           # Master layout
│   ├── sections/
│   │   ├── header.liquid          # ✅ Custom header
│   │   ├── hero.liquid            # ✅ Hero section
│   │   ├── value-props.liquid     # ✅ Value props
│   │   ├── pricing.liquid         # ✅ Pricing tiers
│   │   ├── footer.liquid          # ✅ Footer
│   │   └── faq.liquid             # ✅ FAQ accordion
│   ├── templates/
│   │   ├── index.json             # Homepage template
│   │   ├── article.liquid         # 🔜 Workout blog posts
│   │   └── page.dashboard.liquid  # 🔜 Member dashboard
│   ├── assets/
│   │   ├── rangefit-theme.css     # 96KB design system
│   │   └── rangefit-theme.js      # 17KB interactions
│   ├── SETUP-DOCUMENTATION.md     # Complete setup guide
│   ├── QUICK-START.md             # Quick reference
│   └── PUBLISH-TO-PRODUCTION.md   # Deployment guide
│
├── docs_site/                     # Static site (reference)
│   ├── index.html                 # Original landing page
│   ├── styles.css                 # Source CSS (migrated)
│   └── main.js                    # Source JS (migrated)
│
├── documents/                     # Supporting materials
│   ├── customer-discovery.pdf
│   ├── rangefit-kpi-tracker.csv
│   └── *.md                       # Marketing & content docs
│
└── .bmad-core/                    # BMAD™ development framework
    ├── core-config.yaml           # Project configuration
    └── tasks/                     # Development tasks
```

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Platform** | Shopify Basic ($39/mo) | E-commerce, subscriptions, hosting |
| **Theme Base** | Shopify Skeleton | Minimal CSS conflicts |
| **Templating** | Liquid | Shopify theme language |
| **Styling** | Custom CSS (96KB) | Ported "Legs on the Ground v2.0" design system |
| **JavaScript** | Vanilla ES6+ | Minimal framework (accordion, mobile menu) |
| **Email** | ConvertKit | Automation, nurture sequences |
| **Orchestration** | Zapier Starter ($20/mo) | Shopify ↔ ConvertKit ↔ Sheets |
| **Community** | Discord | Member support & engagement |
| **Analytics** | Google Sheets | Funnel tracking, energy logs |
| **Payments** | Shopify Payments | PCI-compliant subscriptions |
| **Version Control** | Git + GitHub | Source control |
| **CLI** | Shopify CLI 3.86+ | Theme deployment |

---

## 📚 Documentation

### Quick Reference
- **🚀 [Quick Start Guide](theme/rangefit-theme/QUICK-START.md)** - Daily development commands
- **📖 [Setup Documentation](theme/rangefit-theme/SETUP-DOCUMENTATION.md)** - Complete technical setup
- **🚢 [Deployment Guide](theme/rangefit-theme/PUBLISH-TO-PRODUCTION.md)** - Safe production publishing

### Architecture & Planning
- **🏗️ [Technical Architecture](docs/architecture.md)** - System design, integrations, workflows
- **📋 [Product Requirements](docs/prd.md)** - Features, user stories, acceptance criteria
- **📝 [Project Brief](docs/brief.md)** - Business context, goals, constraints

### Epics & Stories
- **[Epic 1: Foundation & Landing Page](docs/prd/epic-1-foundation-landing-page-lead-capture.md)** ✅ Completed
- **[Epic 2: Email Nurture & Free Plan](docs/prd/epic-2-email-nurture-free-plan-delivery-system.md)** 🔜 Next
- **[Epic 3: Trial Signup & Subscriptions](docs/prd/epic-3-trial-signup-subscription-commerce.md)**
- **[Epic 4: Member Experience & Workouts](docs/prd/epic-4-member-experience-workout-library-community-integration.md)**

---

## 🚢 Deployment

### Safe Deployment Process

```bash
# 1. Push as unpublished theme (safe preview)
cd theme/rangefit-theme
shopify theme push --store=rangefit-dev.myshopify.com --unpublished

# 2. Test preview URL provided in output

# 3. Publish via Shopify Admin when ready
# Go to: Admin → Themes → Find new theme → Click "Publish"
```

### Pre-Deployment Checklist

**Required:**
- [ ] Hero background image uploaded
- [ ] Logo uploaded to header
- [ ] Navigation menu created
- [ ] Footer menu created
- [ ] Contact information updated
- [ ] All section text reviewed
- [ ] Pricing information correct

**Testing:**
- [ ] Desktop browser tested
- [ ] Mobile browser tested
- [ ] CSS loads correctly
- [ ] JavaScript works (menu, accordion)
- [ ] No console errors (F12)
- [ ] Images optimized (<500KB)

See [PUBLISH-TO-PRODUCTION.md](theme/rangefit-theme/PUBLISH-TO-PRODUCTION.md) for complete checklist.

---

## 🔧 Configuration

### Environment Setup

```bash
# Shopify CLI config (auto-generated)
# Located in: theme/rangefit-theme/.shopify/

# Important: Add to .gitignore
.shopify/
.env
.env.local
```

### Theme Settings

**Edit via Theme Editor:**
- Logo & branding colors
- Section visibility toggles
- Content blocks (testimonials, FAQs)
- Menu navigation

**Or edit JSON directly:**
- `config/settings_data.json` - Active theme settings
- `config/settings_schema.json` - Customization options

---

## 🐛 Troubleshooting

### Common Issues

**CSS not loading (404 error)?**
```bash
# Check for syntax errors
shopify theme check

# Force push CSS
shopify theme push --force --only="assets/rangefit-theme.css"
```

**Development server won't start?**
```bash
# Re-authenticate
shopify auth logout
shopify auth login

# Check Shopify CLI version
shopify version
# Should be 3.86+
```

**Theme upload warnings?**
```
# Temporary file warnings are normal during dev server
# Ignore: *.tmp.* file warnings
# Use `shopify theme push` for clean uploads
```

### Getting Help

- **Theme Issues:** Check [SETUP-DOCUMENTATION.md](theme/rangefit-theme/SETUP-DOCUMENTATION.md) → Issues & Solutions
- **Deployment:** See [PUBLISH-TO-PRODUCTION.md](theme/rangefit-theme/PUBLISH-TO-PRODUCTION.md) → Troubleshooting
- **Architecture:** Review [docs/architecture.md](docs/architecture.md)

---

## 📈 Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| **LCP (Largest Contentful Paint)** | <2.5s | ✅ TBD (test pre-launch) |
| **FID (First Input Delay)** | <100ms | ✅ TBD |
| **CLS (Cumulative Layout Shift)** | <0.1 | ✅ TBD |
| **Mobile Page Load** | <3s | ✅ Target (NFR1) |
| **CSS File Size** | <150KB | ✅ 96KB |
| **JavaScript File Size** | <100KB | ✅ 17KB |

**Testing Tools:**
- Google PageSpeed Insights
- WebPageTest
- Chrome DevTools (Lighthouse)

---

## 🗺️ Roadmap

### MVP (5 Weeks)
- [x] **Week 1:** Shopify setup, theme foundation ✅ COMPLETED
- [x] **Week 2:** Landing page sections ✅ COMPLETED
- [ ] **Week 3:** Email automation, PDF delivery
- [ ] **Week 4:** Subscriptions, trial flow, checkout
- [ ] **Week 5:** Workout library, member dashboard, Discord

### Post-MVP (Months 4-6)
- [ ] AI recommendation engine (workout personalization)
- [ ] Automated progress tracking (streaks, badges)
- [ ] Discord bot integration (auto-roles)
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)

---

## 📄 License

**Proprietary** - RangeFit © 2025

For educational purposes (IS373 - Web Systems Development)

---

## 🙏 Acknowledgments

- **Design System:** Migrated from "Legs on the Ground v2.0" static site
- **Base Theme:** [Shopify Skeleton Theme](https://github.com/Shopify/skeleton-theme)
- **Fonts:** Plus Jakarta Sans, Inter (Google Fonts)
- **Icons:** Font Awesome 6.4.0

---

## 📞 Contact

**Developer:** Jay Singh (js426@njit.edu)
**Course:** IS373 - Web Systems Development
**Institution:** New Jersey Institute of Technology

**Store:** [rangefit-dev.myshopify.com](https://rangefit-dev.myshopify.com)
**Repository:** [github.com/gsinghjay/is373](https://github.com/gsinghjay/is373)

