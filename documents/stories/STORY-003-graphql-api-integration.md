# STORY-003: Integrate Shopify Admin GraphQL API for Store Data

**Story ID:** STORY-003
**Created:** 2025-10-22
**Status:** Ready for Development
**Priority:** High
**Estimated Effort:** 2 hours

---

## User Story

**As a** Shopify merchant using the RangeFit app
**I want to** see my store's data integrated with RangeFit features
**So that** I can understand how RangeFit can work with my existing products and customers

---

## Context & Background

Following the UI enhancements in STORY-002, we need to add real functionality by integrating with Shopify's Admin GraphQL API. This will transform the app from static informational content to a dynamic application that interacts with merchant store data.

**Why GraphQL Integration Matters:**
- Fetch real store data (products, customers, orders)
- Display merchant-specific information
- Enable data-driven features
- Foundation for future RangeFit integrations
- Demonstrate value to potential merchants

**Current State:**
- Static informational content
- No data fetching
- Sample product creation mutation exists but not utilized
- No merchant-specific customization

**Desired State:**
- Display merchant's product catalog
- Show customer statistics
- Interactive dashboard with real data
- Foundation for RangeFit product recommendations

---

## Acceptance Criteria

### 1. Store Information Display
- [ ] Fetch and display store name
- [ ] Show store URL
- [ ] Display store plan/tier
- [ ] Show merchant contact information (if available)

### 2. Product Data Integration
- [ ] Fetch merchant's product list (first 10-20 products)
- [ ] Display product images, titles, and prices
- [ ] Show product inventory status
- [ ] Add "View in Admin" links for each product

### 3. Customer Statistics
- [ ] Display total customer count
- [ ] Show recent customer registrations (if applicable)
- [ ] Basic customer demographics (optional)

### 4. Dashboard Section
- [ ] Create new "Dashboard" section showing store metrics
- [ ] Display product count
- [ ] Show order statistics (basic)
- [ ] Add visual indicators for data status

### 5. Error Handling
- [ ] Graceful error handling for API failures
- [ ] Loading states while fetching data
- [ ] Empty states when no data exists
- [ ] Clear error messages to merchants

### 6. RangeFit Context Integration
- [ ] Add section suggesting fitness-related products
- [ ] Identify products that could pair with RangeFit
- [ ] Show potential integration opportunities

---

## Technical Implementation

### GraphQL Queries to Implement

#### 1. Shop Query
```graphql
query GetShopInfo {
  shop {
    name
    email
    myshopifyDomain
    plan {
      displayName
    }
    currencyCode
  }
}
```

#### 2. Products Query
```graphql
query GetProducts($first: Int!) {
  products(first: $first) {
    edges {
      node {
        id
        title
        handle
        description
        featuredImage {
          url
          altText
        }
        priceRangeV2 {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        totalInventory
        status
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

#### 3. Customers Query
```graphql
query GetCustomerCount {
  customers(first: 1) {
    edges {
      node {
        id
      }
    }
  }
}
```

#### 4. Orders Query (Basic Stats)
```graphql
query GetOrderStats {
  orders(first: 1) {
    edges {
      node {
        id
      }
    }
  }
}
```

---

## Implementation Steps

### Step 1: Create New Dashboard Route
Create a new section in `app._index.jsx` or separate route for dashboard data.

### Step 2: Implement Shop Info Loader
Add GraphQL query to fetch shop information in the loader function.

```javascript
export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  const response = await admin.graphql(
    `#graphql
      query GetShopInfo {
        shop {
          name
          email
          myshopifyDomain
          plan {
            displayName
          }
        }
      }
    `
  );

  const { data } = await response.json();
  return json({ shop: data.shop });
};
```

### Step 3: Fetch Product Data
Add products query to loader and display in UI.

```javascript
const productsResponse = await admin.graphql(
  `#graphql
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            featuredImage {
              url
            }
            priceRangeV2 {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `,
  {
    variables: {
      first: 10,
    },
  }
);
```

### Step 4: Create Product Display Component
Use Polaris components to display product grid:
- Use `s-box` for product cards
- Display product images
- Show pricing information
- Add "View in Admin" buttons

### Step 5: Add Dashboard Statistics
Create a stats section showing:
- Total products
- Total customers
- Store plan
- Store name and domain

### Step 6: Implement Loading States
Add loading indicators while data is being fetched:
```javascript
const { shop, products } = useLoaderData();

if (!shop) {
  return <s-spinner size="large" />;
}
```

### Step 7: Add Error Boundaries
Implement error handling for failed GraphQL queries.

### Step 8: Create RangeFit Integration Suggestions
Analyze products and suggest RangeFit integration opportunities:
- Fitness-related products
- Workout gear
- Health supplements
- Potential upsell opportunities

---

## UI Mockup Structure

```
┌─────────────────────────────────────────────────────────┐
│ RangeFit                                    [Get Started]│
│ AI-powered fitness coaching for PCOS & Type 2 Diabetes  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 📊 Store Dashboard                                      │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐      │
│ │  Products   │ │  Customers  │ │  Store Plan │      │
│ │     24      │ │     156     │ │   Shopify   │      │
│ └─────────────┘ └─────────────┘ └─────────────┘      │
│                                                         │
│ 🛍️ Your Products                                        │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐      │
│ │ [Image]     │ │ [Image]     │ │ [Image]     │      │
│ │ Product 1   │ │ Product 2   │ │ Product 3   │      │
│ │ $29.99      │ │ $45.00      │ │ $19.99      │      │
│ │ [View]      │ │ [View]      │ │ [View]      │      │
│ └─────────────┘ └─────────────┘ └─────────────┘      │
│                                                         │
│ 💡 RangeFit Integration Opportunities                   │
│ • Pair workout plans with fitness gear                 │
│ • Upsell nutrition products with meal plans            │
│ • Bundle supplements with coaching subscriptions       │
└─────────────────────────────────────────────────────────┘
```

---

## Definition of Done

- [ ] Shop information displays correctly (name, domain, plan)
- [ ] Product list fetches and displays with images and prices
- [ ] Dashboard shows accurate statistics
- [ ] Loading states work properly
- [ ] Error handling gracefully manages API failures
- [ ] All GraphQL queries return data successfully
- [ ] "View in Admin" links work correctly
- [ ] RangeFit integration suggestions display
- [ ] No console errors or warnings
- [ ] App builds successfully with `shopify app build`
- [ ] Code committed to git with clear commit message
- [ ] Screenshot of dashboard with real data saved
- [ ] Story marked as "Done" and moved to "Ready for Review"

---

## Resources

### Shopify GraphQL API Documentation
- **Admin API Reference:** https://shopify.dev/api/admin-graphql
- **Shop Object:** https://shopify.dev/api/admin-graphql/latest/objects/Shop
- **Product Object:** https://shopify.dev/api/admin-graphql/latest/objects/Product
- **Customer Object:** https://shopify.dev/api/admin-graphql/latest/objects/Customer
- **Order Object:** https://shopify.dev/api/admin-graphql/latest/objects/Order

### GraphQL Tools
- **GraphiQL Explorer:** Available in Shopify admin
- **Apollo Client:** Not needed (using Shopify's admin.graphql)
- **GraphQL Playground:** Can test queries in Partner Dashboard

### Useful Tutorials
- **Shopify GraphQL Basics:** https://shopify.dev/docs/apps/build/graphql
- **Fetching Data:** https://shopify.dev/docs/apps/build/graphql/fetch-data
- **Mutations:** https://shopify.dev/docs/apps/build/graphql/mutations

---

## Technical Notes

### Authentication
- App already has `authenticate.admin(request)` in loader
- Admin GraphQL API access is already configured
- Scopes are set in `shopify.app.toml` (currently `write_products`)

### Current Scopes Required
Update `shopify.app.toml` if needed:
```toml
[access_scopes]
scopes = "read_products,read_customers,read_orders"
```

### Rate Limiting
- Shopify API has rate limits (2 requests/second for REST, 50 points/second for GraphQL)
- Current implementation should be well within limits
- Add pagination for large data sets

### Data Caching
- Consider caching shop info (rarely changes)
- Products may need refresh on demand
- Use React Router's loader caching

---

## Dependencies

**Blocks:** None
**Blocked By:** STORY-002 (Complete ✅)
**Related:**
- STORY-004 (Checkout UI extensions - will use product data)
- STORY-006 (RangeFit backend integration)

---

## Success Metrics

- Successful data fetch from GraphQL API
- Display at least 10 products with images
- Dashboard shows accurate store statistics
- Zero API errors in production
- Loading time < 2 seconds for data display
- Merchant can navigate to products in admin

---

## Testing Plan

### Manual Testing
1. Run app in dev store with products
2. Verify all data displays correctly
3. Test with empty store (no products)
4. Test error states (network failures)
5. Test loading states
6. Verify "View in Admin" links

### Data Scenarios
- ✅ Store with many products (50+)
- ✅ Store with few products (1-5)
- ✅ Store with no products (empty state)
- ✅ Products with/without images
- ✅ Products with various price ranges

---

## Future Enhancements (Not in This Story)

- Pagination for product lists
- Product search/filter functionality
- Real-time data updates
- Advanced analytics dashboard
- Customer segmentation by fitness interests
- Order history integration
- Inventory management suggestions

---

## Related Stories & Epics

- **Epic:** E-commerce Integration for RangeFit
- **Previous:** STORY-002 (Polaris UI - Complete)
- **Next:** STORY-004 (Checkout UI Extensions)

---

**Last Updated:** 2025-10-22
**Story Owner:** Jay Singh
**Reviewed By:** _Pending_
**Approved By:** _Pending_
