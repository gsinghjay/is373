# STORY-004: Implement Checkout UI Extensions for RangeFit Upsells

**Story ID:** STORY-004
**Created:** 2025-10-22
**Status:** Ready for Development
**Priority:** High
**Estimated Effort:** 3-4 hours

---

## User Story

**As a** Shopify merchant using the RangeFit app
**I want to** offer RangeFit subscriptions and workout plans to customers during checkout
**So that** I can increase average order value and provide additional value to health-conscious customers

---

## Context & Background

Following the GraphQL API integration in STORY-003, we now have access to store products and customer data. The next step is to extend the app to the customer-facing storefront by creating checkout UI extensions.

**Why Checkout Extensions Matter:**
- Capture customers at the point of purchase (highest intent)
- Upsell RangeFit subscriptions alongside fitness products
- Increase average order value (AOV)
- Provide contextual offers based on cart contents
- Seamless integration with Shopify checkout

**Current State:**
- Admin app displays store data
- No customer-facing functionality
- No checkout customization
- No upsell mechanism

**Desired State:**
- Checkout extension showing RangeFit offers
- Conditional display based on cart contents
- Professional, on-brand UI using Shopify's checkout components
- Track conversion metrics

---

## Acceptance Criteria

### 1. Checkout Extension Created
- [ ] Generate checkout UI extension using Shopify CLI
- [ ] Extension appears in checkout after cart items
- [ ] Properly configured in shopify.app.toml
- [ ] Extension builds without errors

### 2. RangeFit Subscription Offers
- [ ] Display 3 subscription tiers (Free, Premium $14.99, Pro $24.99)
- [ ] Show clear benefits for each tier
- [ ] Include eye-catching visuals/badges
- [ ] Mobile-responsive design

### 3. Smart Display Logic
- [ ] Show extension only if cart contains fitness-related products
- [ ] Hide if customer already has RangeFit subscription (future enhancement)
- [ ] Display appropriate messaging based on cart value

### 4. Add to Order Functionality
- [ ] Allow customers to add subscription to their order
- [ ] Update cart total when subscription selected
- [ ] Visual confirmation when subscription added
- [ ] Handle subscription as a product variant

### 5. Professional UI/UX
- [ ] Use Shopify UI Extensions components
- [ ] Match store branding
- [ ] Clear call-to-action buttons
- [ ] Loading states for dynamic content

### 6. Analytics Foundation
- [ ] Log when extension is displayed
- [ ] Track which subscriptions are clicked
- [ ] Track conversion rate (views vs. additions)
- [ ] Console logging for debugging

---

## Technical Implementation

### Step 1: Generate Checkout UI Extension

```bash
cd /Users/jay/Code/is373/rangefit-shop
shopify app generate extension
```

Select:
- **Type:** Checkout UI extension
- **Name:** rangefit-checkout-upsell
- **Language:** JavaScript/TypeScript

### Step 2: Extension Structure

```
extensions/
  rangefit-checkout-upsell/
    src/
      Checkout.jsx          # Main checkout component
      components/
        SubscriptionCard.jsx  # Individual subscription tier card
        Header.jsx            # Extension header
    shopify.extension.toml  # Extension config
    package.json
```

### Step 3: Main Checkout Component

```jsx
import {
  Banner,
  BlockStack,
  Button,
  Heading,
  Image,
  InlineStack,
  Text,
  useApi,
  useCartLines,
  useApplyCartLinesChange,
} from '@shopify/ui-extensions-react/checkout';

export default function Extension() {
  const { extension } = useApi();
  const cartLines = useCartLines();
  const applyCartLinesChange = useApplyCartLinesChange();

  // Check if cart contains fitness products
  const hasFitnessProducts = cartLines.some(line =>
    line.merchandise.product.title.toLowerCase().includes('fitness') ||
    line.merchandise.product.title.toLowerCase().includes('workout') ||
    line.merchandise.product.productType?.toLowerCase().includes('fitness')
  );

  // Don't show if no fitness products
  if (!hasFitnessProducts) {
    return null;
  }

  const subscriptionTiers = [
    {
      name: '7-Day Free Plan',
      price: '$0',
      badge: 'FREE',
      benefits: ['7-day workout plan', 'AI-generated workouts', 'PCOS & T2D focus'],
      productId: 'gid://shopify/Product/FREE_PLAN_ID',
    },
    {
      name: 'Premium Plan',
      price: '$14.99/mo',
      badge: 'POPULAR',
      benefits: ['Full AI coaching', 'Glucose tracking', 'Meal plans', 'Community access'],
      productId: 'gid://shopify/Product/PREMIUM_PLAN_ID',
      popular: true,
    },
    {
      name: 'Pro Plan',
      price: '$24.99/mo',
      badge: 'PRO',
      benefits: ['Everything in Premium', 'Priority support', 'Advanced analytics', '1-on-1 coaching'],
      productId: 'gid://shopify/Product/PRO_PLAN_ID',
    },
  ];

  const handleAddSubscription = async (productId) => {
    const result = await applyCartLinesChange({
      type: 'addCartLine',
      merchandiseId: productId,
      quantity: 1,
    });

    if (result.type === 'success') {
      console.log('Subscription added to cart');
    }
  };

  return (
    <BlockStack spacing="loose">
      <Banner title="🎯 Enhance Your Fitness Journey">
        Add RangeFit AI coaching to maximize your results!
      </Banner>

      <Heading level={2}>Choose Your RangeFit Plan</Heading>

      <InlineStack spacing="base">
        {subscriptionTiers.map((tier) => (
          <BlockStack key={tier.name} spacing="tight" border="base" padding="base" cornerRadius="base">
            {tier.badge && (
              <Text appearance={tier.popular ? 'accent' : 'subdued'} size="small">
                {tier.badge}
              </Text>
            )}
            <Heading level={3}>{tier.name}</Heading>
            <Text size="large" emphasis="bold">{tier.price}</Text>
            <BlockStack spacing="extraTight">
              {tier.benefits.map((benefit) => (
                <Text key={benefit} size="small">✓ {benefit}</Text>
              ))}
            </BlockStack>
            <Button
              kind={tier.popular ? 'primary' : 'secondary'}
              onPress={() => handleAddSubscription(tier.productId)}
            >
              Add to Order
            </Button>
          </BlockStack>
        ))}
      </InlineStack>
    </BlockStack>
  );
}
```

### Step 4: Extension Configuration

**shopify.extension.toml:**
```toml
type = "ui_extension"
name = "rangefit-checkout-upsell"
handle = "rangefit-checkout-upsell"

[[extensions.targeting]]
module = "./src/Checkout.jsx"
target = "purchase.checkout.block.render"
```

### Step 5: Create Subscription Products

Need to create 3 products in Shopify for the subscription tiers:
1. RangeFit Free Plan (7-day)
2. RangeFit Premium Plan ($14.99/mo)
3. RangeFit Pro Plan ($24.99/mo)

These should be set up as subscription products using Shopify's subscription apps.

---

## Implementation Steps

### Phase 1: Setup (30 mins)
1. Generate checkout UI extension
2. Install required dependencies
3. Configure extension in shopify.app.toml

### Phase 2: Basic Display (1 hour)
1. Create main Checkout component
2. Display static RangeFit subscription offers
3. Test rendering in checkout preview

### Phase 3: Smart Logic (1 hour)
1. Implement cart line reading
2. Add conditional display based on cart contents
3. Test with different product combinations

### Phase 4: Add to Cart (1 hour)
1. Implement subscription product addition
2. Handle cart updates
3. Add visual feedback
4. Error handling

### Phase 5: Polish & Testing (30-60 mins)
1. Improve UI/styling
2. Add loading states
3. Mobile responsiveness
4. Cross-browser testing

---

## UI Mockup

```
┌─────────────────────────────────────────────────────────┐
│ CHECKOUT                                                │
├─────────────────────────────────────────────────────────┤
│ Contact Information                                     │
│ [Email field]                                           │
│                                                         │
│ Shipping Address                                        │
│ [Address fields]                                        │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 🎯 Enhance Your Fitness Journey                     │ │
│ │ Add RangeFit AI coaching to maximize your results!  │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ Choose Your RangeFit Plan                               │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                │
│ │   FREE   │ │ POPULAR  │ │   PRO    │                │
│ │          │ │          │ │          │                │
│ │ 7-Day    │ │ Premium  │ │ Pro Plan │                │
│ │ Free     │ │ Plan     │ │          │                │
│ │          │ │          │ │          │                │
│ │ $0       │ │ $14.99/mo│ │ $24.99/mo│                │
│ │          │ │          │ │          │                │
│ │ ✓ 7-day  │ │ ✓ Full AI│ │ ✓ Premium│                │
│ │   plan   │ │   coach  │ │   +More  │                │
│ │ ✓ AI     │ │ ✓ Glucose│ │ ✓ 1-on-1 │                │
│ │   gen    │ │   track  │ │   coach  │                │
│ │          │ │ ✓ Meals  │ │ ✓ Support│                │
│ │          │ │          │ │          │                │
│ │[Try Free]│ │[Add $15] │ │[Add $25] │                │
│ └──────────┘ └──────────┘ └──────────┘                │
│                                                         │
│ Shipping Method                                         │
│ [Shipping options]                                      │
└─────────────────────────────────────────────────────────┘
```

---

## Definition of Done

- [ ] Checkout extension generated and configured
- [ ] Extension displays in checkout preview
- [ ] Shows RangeFit subscription offers
- [ ] Conditional display works (fitness products only)
- [ ] Add to cart functionality works
- [ ] UI is polished and professional
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Extension deploys successfully
- [ ] Tested in development store checkout
- [ ] Documentation updated
- [ ] Story marked as "Done"

---

## Resources

### Shopify Checkout UI Extensions Documentation
- **Overview:** https://shopify.dev/docs/api/checkout-ui-extensions
- **Components:** https://shopify.dev/docs/api/checkout-ui-extensions/components
- **Targets:** https://shopify.dev/docs/api/checkout-ui-extensions/targets
- **Cart APIs:** https://shopify.dev/docs/api/checkout-ui-extensions/apis/cart

### Tutorials
- **Building Checkout Extensions:** https://shopify.dev/docs/apps/checkout/build
- **Upselling at Checkout:** https://shopify.dev/docs/apps/checkout/product-offers

### UI Components Used
- `Banner` - Alert/notification banner
- `BlockStack` - Vertical layout
- `InlineStack` - Horizontal layout
- `Button` - Action buttons
- `Heading` - Section titles
- `Text` - Body text
- `useCartLines` - Read cart contents
- `useApplyCartLinesChange` - Modify cart

---

## Dependencies

**Blocks:** None
**Blocked By:** STORY-003 (Complete ✅)
**Related:**
- STORY-003 (GraphQL API integration)
- STORY-005 (Analytics tracking - future)
- STORY-006 (RangeFit backend integration - future)

---

## Success Metrics

- Extension displays in checkout
- 10%+ of checkouts see the extension
- 5%+ conversion rate (views to additions)
- Zero errors in production
- Positive merchant feedback

---

## Testing Plan

### Manual Testing
1. Add fitness product to cart → Go to checkout → Verify extension shows
2. Add non-fitness product → Go to checkout → Verify extension hidden
3. Click "Add to Order" → Verify subscription added to cart
4. Test on mobile device
5. Test in different browsers

### Test Scenarios
- ✅ Cart with fitness products shows extension
- ✅ Cart without fitness products hides extension
- ✅ Adding subscription updates cart total
- ✅ Multiple subscription selections handled
- ✅ Mobile display works correctly
- ✅ Extension doesn't break checkout flow

---

## Future Enhancements (Not in This Story)

- A/B testing different offers
- Personalized recommendations based on cart
- Discount codes for subscriptions
- Integration with actual RangeFit backend API
- Customer segment targeting
- Abandoned cart recovery with RangeFit offers

---

## Related Stories & Epics

- **Epic:** E-commerce Integration for RangeFit
- **Previous:** STORY-003 (GraphQL API - Complete)
- **Next:** STORY-005 (Analytics & Tracking)

---

## Technical Notes

### Subscription Products Setup
You'll need to create subscription products in Shopify. Options:
1. Use Shopify's native subscriptions API
2. Use a subscription app (Recharge, Bold, etc.)
3. Create regular products with subscription metadata

### Cart Line Addition
The `applyCartLinesChange` API adds products to cart. You need valid product/variant IDs.

### Extension Testing
Use `shopify app dev` to preview extensions in checkout. The CLI provides a preview URL.

### Performance
Checkout extensions should be lightweight. Avoid heavy computations or external API calls that slow checkout.

---

**Last Updated:** 2025-10-22
**Story Owner:** Jay Singh
**Reviewed By:** _Pending_
**Approved By:** _Pending_
