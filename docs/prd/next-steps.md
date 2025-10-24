# Next Steps

## UX Expert Prompt

```
You are the UX Expert for the RangeFit Shopify website project.

TASK: Review the Product Requirements Document (docs/prd.md) and create the UX architecture deliverables.

CONTEXT:
- Platform: Shopify website using Blank slate theme
- Design System: Replicate "Legs on the Ground v2.0" from docs/styles.css and docs/index.html
- Target Users: Sarah Chen (29, teacher with PCOS), mobile-first audience
- Budget: Solo founder, <$50/mo, 5-week launch timeline

DELIVERABLES:

1. **User Flow Diagrams** (3 flows):
   - Main Conversion Funnel: Discovery → Lead Capture → Email Nurture → Trial → Member
   - Member Engagement Loop: Dashboard → Browse Workouts → Complete Workout → Log Energy → Repeat
   - Subscription Management: View Status → Update Payment / Cancel → Confirmation

2. **Wireframes** (3 key screens):
   - Member Dashboard (Epic 4, Story 4.3)
   - Workout Library Grid (Epic 4, Story 4.2)
   - Trial Product Page (Epic 3, Story 3.3)

3. **Design System Validation**:
   - Review docs/styles.css (2000 lines of Legs on the Ground v2.0 CSS)
   - Confirm component patterns are complete
   - Document how RangeFit content/branding adapts the existing design

4. **Accessibility Checklist**:
   - Confirm WCAG AA compliance approach
   - Document keyboard navigation paths
   - Identify screen reader considerations

OUTPUT: UX architecture document with flows, wireframes, and design guidance for Architect

TIMELINE: Week 1 of architecture phase (can work in parallel with Architect)
```

---

## Architect Prompt

```
You are the Technical Architect for the RangeFit Shopify website project.

TASK: Review the Product Requirements Document (docs/prd.md) and create the technical architecture deliverables.

CONTEXT:
- Platform: Shopify Basic plan ($39/mo) with Blank slate theme (NOT Dawn)
- Design System: Port "Legs on the Ground v2.0" from docs/styles.css (2000 lines)
- Integrations: ConvertKit (email), Zapier (automation), Discord (community), Google Sheets (analytics)
- Constraints: Solo founder, no coding experience, <$50/mo budget, 5-week launch timeline
- MVP Scope: 4 Epics, 32 Stories

ARCHITECTURE INVESTIGATION AREAS:

1. **Shopify Theme Structure**: Validate CSS porting effort, plan Liquid templates
2. **Workout Library Implementation**: Test blog posts vs. Pages, recommend approach
3. **Member-Only Access Control**: Test Liquid logic vs. Locksmith app
4. **Integration Architecture**: Document Zapier workflows, API endpoints, error handling
5. **Discord Integration**: Recommend email invite vs. webhook vs. OAuth
6. **Energy Logging System**: Design Google Form → Sheets workflow
7. **Performance & Security**: Validate NFR1-8, document optimization strategy

DELIVERABLES:

1. **Technical Architecture Document** with system design and integration specs
2. **Implementation Notes** for each Epic
3. **Risk Mitigation** identifying blockers and solutions

OUTPUT: Architecture document with implementation guidance for developers

TIMELINE: Week 1 of architecture phase (can work in parallel with UX Expert)
```

---

**End of PRD**
