# Publishing RangeFit Theme to Production

## ⚠️ Important - Read First

Publishing to production will make this theme **LIVE** on your store at **rangefit-dev.myshopify.com**. All visitors will see the new design immediately.

---

## 🚀 Recommended Method (Safest)

### Step 1: Push as New Unpublished Theme

```bash
cd /home/jay/github/is373/theme/rangefit-theme
shopify theme push --store=rangefit-dev.myshopify.com --unpublished
```

When prompted, confirm you want to create a new theme.

### Step 2: Preview & Test

The command will output a preview URL like:
```
https://rangefit-dev.myshopify.com/?preview_theme_id=XXXXX
```

**Test thoroughly:**
- [ ] Check all sections display correctly
- [ ] Test navigation links
- [ ] Verify images load
- [ ] Test on mobile
- [ ] Test CTA buttons
- [ ] Check cart functionality

### Step 3: Publish via Shopify Admin

1. Go to: https://rangefit-dev.myshopify.com/admin/themes
2. Find your new theme in the "Theme library"
3. Click the **"Publish"** button
4. Confirm when prompted

✅ **Your theme is now LIVE!**

---

## ⚡ Alternative: Direct Update (Faster but Riskier)

**Only use if you're confident everything works!**

### Update Existing Live Theme

```bash
cd /home/jay/github/is373/theme/rangefit-theme
shopify theme push --store=rangefit-dev.myshopify.com --theme=182404940069
```

When prompted:
- **"Push theme files to the live theme?"** → Type `yes`

⚠️ **Warning:** This immediately updates your live theme with no rollback option!

---

## 📋 Pre-Publish Checklist

Before publishing, make sure you've completed:

### Required
- [ ] Hero background image uploaded
- [ ] Logo uploaded in header
- [ ] Navigation menu created
- [ ] Footer menu created
- [ ] Contact information updated
- [ ] All section text reviewed
- [ ] Pricing information correct
- [ ] CTA buttons link to correct pages

### Testing
- [ ] Tested on desktop browser
- [ ] Tested on mobile browser
- [ ] All links work
- [ ] Images load correctly
- [ ] No console errors (F12 → Console)
- [ ] CSS loads correctly
- [ ] JavaScript works (mobile menu, scroll buttons)

### Content
- [ ] Remove placeholder text
- [ ] Add real testimonials (if section exists)
- [ ] Update FAQ answers
- [ ] Set correct product links
- [ ] Add privacy policy link
- [ ] Add terms of service link

---

## 🔄 Rollback Instructions

If something goes wrong after publishing, you can quickly rollback:

### Via Shopify Admin (Fastest)

1. Go to: https://rangefit-dev.myshopify.com/admin/themes
2. Find your previous theme (e.g., "test-data")
3. Click **"Publish"**
4. Your old theme is now live again

### Via CLI

```bash
shopify theme publish --theme=182357885221 --store=rangefit-dev.myshopify.com
```
*(Replace theme ID with your backup theme)*

---

## 📊 After Publishing

### Monitor Your Store

1. **Visit live store:** https://rangefit-dev.myshopify.com
2. **Check Analytics:** Admin → Analytics
3. **Test checkout:** Make a test order
4. **Mobile test:** Open on phone

### Configure Apps

If using apps, make sure they're configured:
- **Subscriptions:** For Premium/Pro plans
- **Email marketing:** For free plan signups
- **Reviews:** Customer testimonials
- **Chat:** Customer support

---

## 🆘 Troubleshooting

### Theme Looks Broken After Publishing

**Solution:**
1. Hard refresh browser: `Ctrl+Shift+R` (Win/Linux) or `Cmd+Shift+R` (Mac)
2. Check browser console for errors (F12 → Console)
3. Verify CSS file uploaded: Check Network tab in DevTools
4. Rollback to previous theme if needed

### Images Not Loading

**Solution:**
1. Go to Theme Editor
2. Upload images again
3. Verify image URLs are correct
4. Check image file sizes (optimize if >500KB)

### Sections Missing

**Solution:**
1. Go to Theme Editor: https://rangefit-dev.myshopify.com/admin/themes/THEME_ID/editor
2. Click "Add section"
3. Add missing sections
4. Save changes

---

## 📞 Support

If you encounter issues:

1. **Check Documentation:**
   - `SETUP-DOCUMENTATION.md` - Full technical docs
   - `QUICK-START.md` - Common tasks

2. **Shopify Support:**
   - Help Center: https://help.shopify.com
   - Community: https://community.shopify.com

3. **Theme Issues:**
   - Check `shopify theme check` output
   - Review browser console errors
   - Verify all files pushed: `shopify theme list --store=rangefit-dev.myshopify.com`

---

## ✅ Success Checklist

After publishing, verify:

- [ ] Homepage loads correctly
- [ ] All sections visible
- [ ] CSS styles applied
- [ ] Images display
- [ ] Navigation works
- [ ] Mobile menu works
- [ ] CTA buttons functional
- [ ] Cart works
- [ ] Checkout process works
- [ ] No JavaScript errors
- [ ] Fast page load (<3 seconds)

---

**Ready to publish?** Run the commands above in your terminal! 🚀
