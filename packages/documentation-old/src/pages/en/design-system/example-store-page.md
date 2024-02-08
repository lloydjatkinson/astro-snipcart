---
title: Components
description: Availiable design system components
layout: ../../../layouts/MainLayout.astro
---

## Example Store Page

Once you've read the getting started guide and browsed the component documentation and component explorer, you can see a complete example of the design system in action. This page is for a product with a single buy button.

The live version of the store page is available [here](https://astro-snipcart-playground.vercel.app/example-store-page).

```astro
---
import { SnipcartProduct, ProductMeta } from '@lloydjatkinson/astro-snipcart';
import { PageLink } from '@lloydjatkinson/astro-snipcart-design-system';
import { StorePageLayout, ProductPage } from '@lloydjatkinson/astro-snipcart-design-system/astro';

const headerLinks: PageLink[] = [
    { label: 'Products', to: '/products' }
];

const footerLinks: PageLink[] = [
    { label: 'Products', to: '/products' }
];

const product: SnipcartProduct & ProductMeta = {
    id: 'plain-tshirt',
    name: 'Plain T-Shirt',
    description: 'A plain t-shirt that is soft and warm',
    image: '/assets/images/t-shirt-light-green.jpg',
    price: 10,
    originalPrice: 15,
    currency: 'GBP',
}
---
<StorePageLayout
    title={ product.name }
    description={ product.description }
    headerLinks={ headerLinks }
    footerLinks={ footerLinks }
    image={ product.image }
    storeName="Astro Snipcart Integration"
    useDefaultLogo="hexagon"
    { ...(product.price <= product.originalPrice ? { banner: 'This product is on sale, get it now!' } : {}) }>
    <ProductPage
        { ...product }>
        Product description can go here. When using Markdown files with Astro, this default slot will contain the formatted and styled markdown.s
    </ProductPage>
</StorePageLayout>
```