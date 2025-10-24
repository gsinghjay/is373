# Epic 4: Member Experience, Workout Library & Community Integration

**Epic Goal:** Create member-only workout library accessible via Shopify, build member dashboard for progress tracking, implement energy logging system, and integrate Discord community with automated invites to deliver complete member value and drive retention.

**Success Criteria:**
- 21+ workouts published and accessible to members only (FR7)
- Members can log energy levels before/after workouts (FR10)
- Trial and paid members automatically receive Discord invite within 5 minutes (FR14)
- Member dashboard shows workout progress and community link (FR9, FR15)
- 60%+ trial activation rate (complete 2+ workouts in 7-day trial per brief)
- 30%+ monthly active users in Discord community (per brief)

---

## Story 4.1: Create Workout Content (21 Workouts for Library)

**As a** content creator,
**I want** 21 high-quality, glucose-aware workouts created and ready for publishing,
**so that** members have 3 weeks of daily workout content.

**Acceptance Criteria:**

1. **21 Workouts Planned and Scripted:**
   - Workouts cover 3 weeks (7 days × 3)
   - Mix of intensities:
     - 7 Low-intensity workouts (gentle, suitable for low blood sugar)
     - 10 Moderate-intensity workouts (balanced, main content)
     - 4 High-intensity workouts (for stable/high energy days)
   - Mix of types:
     - Cardio (walking, light jogging, dancing)
     - Strength (bodyweight exercises, resistance)
     - Flexibility (yoga, stretching)
     - Combination (circuit training, HIIT variations)
   - Duration range: 15-30 minutes each
   - No equipment required (bodyweight only, per NFR)

2. **Each Workout Includes:**
   - **Title:** Clear, descriptive (e.g., "Morning Energy Boost - Low Impact Cardio")
   - **Description:** 2-3 sentences explaining workout purpose and benefits
   - **Duration:** Exact time (e.g., "20 minutes")
   - **Intensity Level:** Low / Moderate / High
   - **Glucose Guidance:** When to do it (e.g., "Best for stable energy", "Avoid if blood sugar <70", "Great after breakfast")
   - **Exercise List:** Step-by-step instructions
     - Exercise name
     - Reps/time (e.g., "10 squats", "30 sec plank")
     - Form tips (brief, 1 sentence each)
   - **Video Embed (Optional for MVP):** YouTube video link if available
     - Can use free stock workout videos or create later
     - Placeholder text: "Video coming soon" if not ready

3. **Content Format:**
   - Workouts written in Google Docs or Markdown for easy copy-paste
   - Consistent formatting for all 21 workouts
   - Reviewed for clarity, accuracy, safety disclaimers

4. **Glucose-Awareness Validation:**
   - All workouts designed with blood sugar stability in mind
   - Low-intensity workouts suitable for glucose-sensitive times
   - Disclaimer added: "Not medical advice. Consult your doctor before starting any exercise program."

5. **Content Ready for Publishing:**
   - 21 workout files/docs prepared
   - Images/thumbnails sourced (stock photos or Canva graphics, one per workout)
   - All content reviewed and approved by founder

**Note:** This story is primarily content creation, not technical implementation. Can be done in parallel with other Epic 4 technical stories.

---

## Story 4.2: Build Workout Library Using Shopify Blog

**As a** member,
**I want** to browse and access a library of 21 workouts on the Shopify site,
**so that** I can choose workouts that fit my energy level and schedule.

**Acceptance Criteria:**

1. **Shopify Blog Created:**
   - Blog name: "Workouts" or "Workout Library"
   - URL: `/blogs/workouts`
   - Blog settings:
     - Comments disabled (or enabled for member engagement - TBD)
     - Publicly visible OR members-only (access control in Story 4.4)

2. **21 Workout Blog Posts Created:**
   - Each workout from Story 4.1 is published as a blog post
   - Blog post structure:
     - **Title:** Workout title (H1)
     - **Featured Image:** Workout thumbnail/image
     - **Meta Description:** Workout description (for SEO)
     - **Content:**
       - Workout description (intro paragraph)
       - Duration, Intensity, Glucose Guidance (formatted as badges or list)
       - Exercise list (numbered list with instructions)
       - Video embed (if available, iframe or YouTube link)
       - Disclaimer: "Not medical advice..."
     - **Tags:** Used for filtering (e.g., "Low Intensity", "Cardio", "Morning", "20 min")
     - **Publish Date:** Staggered or all on same day (founder decides)

3. **Blog Post Template Customization:**
   - Edit `templates/article.liquid` to match Legs on the Ground design:
     - Use `.card` styling for workout container
     - Intensity level displayed as colored badge (green=Low, yellow=Moderate, red=High)
     - Glucose guidance displayed prominently (callout box with icon)
     - Exercise list styled clearly (numbered, good spacing)
   - Mobile-responsive design (content readable on phone)

4. **Workout Library Landing Page:**
   - Blog index page (`/blogs/workouts`) shows all 21 workouts as grid:
     - Thumbnail image
     - Title
     - Duration + Intensity badges
     - "View Workout" link/button
   - Filter/Sort options (Shopify blog has basic tagging):
     - Filter by tag: Low/Moderate/High intensity, Cardio/Strength/Flexibility
     - Sort by: Newest, Oldest, A-Z (Shopify default options)
   - Page uses `grid grid-auto-fit-lg gap-xl` responsive layout

5. **Navigation Link Added:**
   - Header navigation (from Epic 1) includes "Workouts" link
   - Footer includes "Workouts" link
   - Member dashboard (Story 4.3) links to workout library

6. **SEO Optimization:**
   - Each blog post has meta title and description
   - Blog posts indexed by Google (or noindex if members-only)
   - Canonical URLs set correctly

---

## Story 4.3: Create Member Dashboard with Progress Tracking

**As a** member,
**I want** a personalized dashboard showing my workout progress and quick links,
**so that** I can easily track my journey and access key features.

**Acceptance Criteria:**

1. **Shopify Customer Account Page Customized:**
   - Edit `/account` page template (or create custom `/dashboard` page)
   - Dashboard accessible only to logged-in customers with active subscription
   - URL: `/account` OR `/pages/dashboard`

2. **Dashboard Content Sections:**

   **A. Welcome Header:**
   - Personalized greeting: "Welcome back, {{customer.first_name}}!"
   - Current subscription status: "RangeFit Premium - Active" or "Trial (3 days remaining)"
   - Next billing date (if available via Shopify Liquid)

   **B. Quick Stats (Simple Version for MVP):**
   - Display basic progress metrics:
     - "Workouts Completed: 5" (manually tracked for MVP, see Story 4.5 for tracking method)
     - "Current Streak: 3 days" (optional, may defer to post-MVP)
     - "Energy Trend: Improving ↑" (based on energy logs, manual analysis for MVP)
   - **Implementation:** Static placeholders or pull from Google Sheets if Zapier integration exists
   - **Post-MVP:** Replace with dynamic database-driven tracking

   **C. Today's Recommended Workout:**
   - Display 1 suggested workout based on:
     - **MVP:** Random or sequential (Day 1 → Workout 1, Day 2 → Workout 2, etc.)
     - **Post-MVP:** AI-based recommendation from energy logs
   - Card showing:
     - Workout thumbnail
     - Title, duration, intensity
     - "Start Workout" button (links to blog post)

   **D. Quick Links:**
   - **Button: "Browse All Workouts"** (links to `/blogs/workouts`)
   - **Button: "Join Community (Discord)"** (links to Discord invite or embedded widget, see Story 4.6)
   - **Button: "Log Energy"** (links to energy logging form, see Story 4.5)
   - **Button: "Manage Subscription"** (links to Shopify subscription management from Epic 3)

   **E. Community Widget (FR15):**
   - Prominent Discord community section:
     - Heading: "Your Community"
     - Text: "Join 2,000+ members in the RangeFit Discord"
     - **Option 1:** Discord server widget embed (iframe) showing online members
     - **Option 2:** Static image + "Join Discord" button
   - Button: "Join Discord" or "Open Discord" (if already joined)

3. **Dashboard Design:**
   - Matches Legs on the Ground design system
   - Uses `.card` components for sections
   - Mobile-responsive (dashboard stacks vertically on mobile)
   - Loads quickly (<2 seconds per NFR2)

4. **Access Control:**
   - Dashboard only accessible to logged-in customers
   - If not logged in, redirect to `/account/login`
   - If subscription expired, show message: "Your membership has ended. Reactivate to access workouts."

5. **Dashboard Navigation:**
   - Dashboard linked from header navigation (for logged-in users only - conditional display)
   - Welcome email (Epic 3, Story 3.5) links to dashboard

---

## Story 4.4: Implement Member-Only Access Control for Workouts

**As a** site owner,
**I want** workouts accessible only to active trial/paid members,
**so that** non-paying visitors cannot access premium content.

**Acceptance Criteria:**

1. **Workout Blog Posts Gated:**
   - Edit `templates/article.liquid` (blog post template) to check customer status:
     ```liquid
     {% if customer %}
       {% if customer.tags contains 'active_member' or customer.orders_count > 0 %}
         <!-- Show full workout content -->
       {% else %}
         <!-- Show paywall message -->
       {% endif %}
     {% else %}
       <!-- Redirect to login or show paywall -->
     {% endif %}
     ```
   - **Implementation Options:**
     - **Option A:** Use Shopify Liquid logic to check if customer has active subscription (check `customer.tags` or `customer.orders_count`)
     - **Option B:** Use Shopify app for membership access control (e.g., "Locksmith" app ~$9/mo)
     - **Option C:** Manual tagging: Apply "active_member" tag to all trial/paid customers via Zapier

2. **Paywall Message for Non-Members:**
   - If user is not logged in or not a member, show message:
     - Heading: "This Workout is Members-Only"
     - Text: "Join RangeFit to access 21+ glucose-friendly workouts designed for your body."
     - CTA: "Start $4.99 Trial" (button linking to trial product)
     - Secondary CTA: "Already a member? Log in" (link to `/account/login`)
   - Paywall styled with Legs on the Ground `.card` design
   - Blur or hide workout content (not just hide with CSS - use Liquid logic to not render)

3. **Zapier Workflow: Tag Active Members (Option C Implementation):**
   - Workflow: "Shopify Order (Trial/Paid) → Tag Customer as 'active_member'"
   - Trigger: New order for subscription products
   - Action: Add tag "active_member" to Shopify customer
   - **Churn Handling:** When subscription cancels, remove "active_member" tag (Zapier workflow or manual cleanup)

4. **Workout Library Page Access:**
   - Blog index (`/blogs/workouts`) can be publicly visible (teaser) OR members-only
   - **Recommendation:** Show workout titles and thumbnails publicly, but lock individual workout content
   - Clicking workout from index checks access and shows paywall if not member

5. **Testing:**
   - **Test 1:** Log in as member with active subscription → Can access all workouts
   - **Test 2:** Log out → Workout pages show paywall
   - **Test 3:** Log in as customer without subscription → Show paywall
   - **Test 4:** Cancel subscription → Access removed (test after billing period ends)

6. **User Experience:**
   - Access checks load quickly (no performance impact per NFR2)
   - Error messages are friendly, not technical
   - Login redirect works smoothly (return to workout after login)

---

## Story 4.5: Implement Energy Logging System

**As a** member,
**I want** to easily log my energy levels before and after workouts,
**so that** RangeFit can learn my patterns and provide better recommendations.

**Acceptance Criteria:**

1. **Google Form Created: "Energy Logging Form"**
   - Form fields:
     - Email Address (required, pre-populated if possible)
     - Workout Name (dropdown with 21 workout titles OR text input)
     - Pre-Workout Energy (dropdown: Low / Medium / High)
     - Post-Workout Energy (dropdown: Low / Medium / High)
     - Date (auto-filled with today's date or date picker)
     - Optional: Notes (text area for free-form feedback)
   - Form responses go to Google Sheet: "RangeFit Energy Logs"

2. **Energy Logging Form Embedded on Each Workout Page:**
   - Edit `templates/article.liquid` to include form embed at bottom of workout content
   - **Implementation:**
     - Embed Google Form iframe at bottom of workout post
     - OR create custom Shopify form that posts to Google Sheets via Zapier
   - Form is visible only to logged-in members (same access control as workout content)

3. **Energy Logging Button on Dashboard:**
   - Member dashboard (Story 4.3) includes "Log Energy" quick link
   - Link opens:
     - **Option A:** Standalone page with embedded form (`/pages/log-energy`)
     - **Option B:** Modal/popup with form
     - **Option C:** Direct link to Google Form (simpler for MVP)

4. **Google Sheet: "RangeFit Energy Logs"**
   - Columns: Timestamp, Email, Workout Name, Pre-Workout Energy, Post-Workout Energy, Date, Notes
   - Data automatically collected from Google Form
   - Founder can analyze weekly to identify patterns (manual for MVP)
   - **Post-MVP:** Use this data to train AI recommendation engine

5. **User Experience Optimization:**
   - Form is short and quick (<1 minute to complete)
   - Mobile-friendly (large tap targets, dropdown easy to select)
   - Confirmation message after submission: "Thanks! Your energy log helps us personalize your experience."
   - Optional: Incentivize logging with gamification (e.g., "Log 7 days in a row for a badge!") - defer to post-MVP

6. **Progress Tracking Integration (FR9 Implementation):**
   - **MVP Approach (Manual):**
     - Founder reviews Google Sheets weekly
     - Manually counts completed workouts per member (based on energy logs)
     - Updates dashboard stats manually OR uses simple formula
   - **Alternative (Semi-Automated):**
     - Zapier workflow: Google Form submission → Update Google Sheets "Member Progress" tab
     - Dashboard pulls workout count from Google Sheets via Shopify metafields or manual update
   - **Post-MVP:** Database-driven progress tracking with automatic dashboard updates

7. **Testing:**
   - Submit 10 test energy logs via embedded form
   - Verify all 10 appear in Google Sheet correctly
   - Verify form is accessible on mobile (workout pages and dashboard)
   - Verify form validation works (required fields enforced)

---

## Story 4.6: Set Up Discord Community and Automated Invites

**As a** trial or paid member,
**I want** to automatically receive a Discord invite when I sign up,
**so that** I can join the community and connect with others.

**Acceptance Criteria:**

1. **Discord Server Created:**
   - Server name: "RangeFit Community" or "RangeFit - Glucose Fitness"
   - Server icon: RangeFit logo
   - Server description: "The supportive community for people managing blood sugar through fitness. Share wins, ask questions, and belong."

2. **Discord Channels Created:**
   - **#welcome:** Auto-welcome message for new members, rules, intro prompts
   - **#wins:** Members share successes, PRs, energy improvements
   - **#questions:** Ask anything about workouts, glucose, PCOS, etc.
   - **#pcos-crew:** Dedicated channel for PCOS community (Sarah persona focus)
   - **#accountability:** Daily check-ins, workout logs, accountability partners
   - **#off-topic:** General chat, non-fitness topics
   - **#announcements:** Founder posts updates, new workouts, events (read-only for members)

3. **Discord Roles Created:**
   - **@Trial Member:** Auto-assigned to trial users
   - **@Premium Member:** Auto-assigned to paid recurring members
   - **@Pro Member:** Auto-assigned to Pro tier members (future)
   - **@Founder:** Jay's role
   - **@Moderator:** For future community managers (if hired)

4. **Discord Server Settings:**
   - Verification level: Low (email verification)
   - Member screening: Optional welcome screen with rules acceptance
   - Permissions: Members can post in all channels except #announcements
   - Invite link expiration: Never (or 7 days with unlimited uses)

5. **Discord Invite Automation (FR14):**

   **Option A: Email-Based Invite (Simpler for MVP)**
   - ConvertKit "Trial Welcome" email (Epic 3, Story 3.5, Email 1) includes Discord invite link
   - Discord permanent invite link generated: `https://discord.gg/XXXXX`
   - Email includes:
     - Heading: "Join Your Community"
     - Text: "Connect with 2,000+ members managing blood sugar through fitness"
     - Button: "Join Discord" (links to invite)
     - Instructions: "Click to join, create Discord account if needed, introduce yourself in #welcome"
   - Invite link tested (works, doesn't expire, auto-assigns role if possible)

   **Option B: Zapier Webhook to Discord (Advanced, Optional)**
   - Zapier workflow: "Shopify Order → Discord Invite via Webhook"
   - Trigger: New subscription order
   - Action: Send Discord invite via webhook OR add member to Discord server (requires Discord API integration)
   - **Challenge:** Discord doesn't have native "add member" API without OAuth; email invite is simpler
   - **Recommendation:** Use Option A for MVP, defer Option B to post-MVP

6. **Discord Widget on Dashboard (FR15):**
   - Member dashboard (Story 4.3, Section E) includes Discord widget
   - **Option 1:** Embed Discord server widget (iframe showing online members):
     ```html
     <iframe src="https://discord.com/widget?id=SERVER_ID&theme=light"
             width="350" height="500" frameborder="0"
             sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
     </iframe>
     ```
   - **Option 2:** Static section with "Join Discord" button (simpler, faster load)
   - Widget/section is prominently displayed (not buried at bottom)

7. **Community Seeding:**
   - Founder posts first messages in each channel (set welcoming tone)
   - Beta testers invited to join and seed activity (Week 4-5)
   - First 10-20 members receive extra attention (founder engagement to build culture)

8. **Community Moderation Plan:**
   - Founder moderates for MVP (no hired mods yet)
   - Rules posted in #welcome:
     - Be kind and supportive
     - No spam or self-promotion
     - Respect privacy (no sharing others' health info)
     - Not medical advice (consult your doctor)
   - Discord "AutoMod" enabled to filter spam/profanity

9. **Testing:**
   - Complete trial purchase as test user
   - Verify Discord invite link is received in welcome email within 5 minutes (NFR3)
   - Click invite link, verify Discord server loads
   - Join server, verify role is assigned (if automated) or can be manually assigned
   - Test Discord widget on dashboard (loads correctly, shows online members)

---

## Story 4.7: End-to-End Member Experience Testing

**As a** QA tester,
**I want** to verify the complete member journey from trial purchase to workout completion and community engagement,
**so that** we can confidently launch the full member experience.

**Acceptance Criteria:**

1. **Test Case 1: Trial Member Full Journey (Desktop)**
   - Purchase trial from `/trial` page (test credit card)
   - Receive welcome email with Discord invite and dashboard link
   - Click dashboard link → Member dashboard loads
   - See recommended workout on dashboard
   - Click "Start Workout" → Workout blog post loads with full content (no paywall)
   - Read workout instructions
   - Complete workout (manually, not tracked by system yet)
   - Scroll to bottom, find energy logging form
   - Fill out form (Pre: Medium, Post: High)
   - Submit form → Confirmation message displays
   - Check Google Sheets → Energy log appears
   - Click "Join Discord" from dashboard → Discord invite works, join server
   - Post intro in #welcome channel
   - **Result:** Pass/Fail documented

2. **Test Case 2: Trial Member Mobile Journey (iOS Safari, Android Chrome)**
   - Repeat Test Case 1 on mobile devices
   - Verify all pages are mobile-responsive
   - Verify workout content is readable without zoom
   - Verify energy logging form is easy to complete on mobile
   - Verify Discord invite works on mobile app
   - **Result:** Pass/Fail documented

3. **Test Case 3: Non-Member Paywall**
   - Log out (or use incognito browser)
   - Navigate to workout blog post URL directly
   - **Expected:** Paywall message displays, content is hidden
   - **Expected:** CTA buttons for trial signup and login are present
   - Click "Start $4.99 Trial" → Redirects to trial product page
   - **Result:** Pass/Fail documented

4. **Test Case 4: Expired Subscription Access**
   - Create test subscription and cancel immediately (or simulate expired subscription)
   - Log in as that customer
   - Try to access workout → Paywall or "Reactivate" message displays
   - **Expected:** Access is removed after subscription ends
   - **Result:** Pass/Fail documented

5. **Test Case 5: Discord Invite Delivery Time (NFR3)**
   - Purchase trial
   - Record timestamp of purchase
   - Check email inbox
   - **Expected:** Welcome email with Discord invite arrives within 5 minutes
   - **Actual:** Record delivery time
   - **Result:** Pass if <5 min, Fail if >5 min

6. **Test Case 6: Energy Logging Accuracy**
   - Submit 5 energy logs with different data
   - Check Google Sheets "Energy Logs" tab
   - **Expected:** All 5 logs appear with correct data (email, workout, pre/post energy, date)
   - **Expected:** No duplicate submissions
   - **Result:** Pass/Fail documented

7. **Test Case 7: Dashboard Progress Stats**
   - Complete 3 workouts and log energy for each
   - Navigate to dashboard
   - **Expected:** Dashboard shows "Workouts Completed: 3" (if automated) OR static placeholder
   - **Note:** For MVP, this may be manual/static - document actual behavior
   - **Result:** Pass/Fail documented

8. **Test Case 8: Workout Library Filtering**
   - Navigate to `/blogs/workouts`
   - Test tag filtering (click "Low Intensity" tag)
   - **Expected:** Page shows only low-intensity workouts
   - Test search (if Shopify blog has search)
   - **Expected:** Search returns relevant workouts
   - **Result:** Pass/Fail documented

9. **Test Case 9: Discord Community Engagement**
   - Join Discord as test user
   - Post message in #welcome
   - **Expected:** Message appears for all members
   - **Expected:** No spam filters block message
   - Verify role is assigned (@Trial Member or @Premium Member)
   - **Result:** Pass/Fail documented

10. **Test Case 10: 60%+ Trial Activation (Epic Success Criteria)**
    - Recruit 10 beta testers for 7-day trial
    - Track how many complete 2+ workouts in trial period
    - **Expected:** 6+ out of 10 complete 2+ workouts (60% activation)
    - If below 60%, investigate friction points (workout quality? Form UX? Email reminders?)
    - **Result:** Pass/Fail documented

11. **All Critical Bugs Fixed:**
    - Paywall bypasses (non-members accessing workouts)
    - Energy logging form failures
    - Discord invite link broken or expired
    - Dashboard loading errors
    - Mobile responsiveness issues

---
