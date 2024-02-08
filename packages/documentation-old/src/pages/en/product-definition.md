---
title: Product Definition
description: How to define a product, where to store them, and how Astro Snipcart allows you full control
layout: ../../layouts/MainLayout.astro
---

The examples you've seen in the documentation so far have examples of:

* Hard coded data passed to `<Product>` and `<ProductPage` etc components
* Hard coded data stored in an array and passed to the appropriate components

These are perfectly valid examples, but what if you wish to define the products somewhere else? Well, you can!

### Defining and storing products

![Astro Snipcart](/data-storage.png "Astro Snipcart")

To get to the point - you own your product data. Wherever it is persisted. Astro Snipcart simply provides a set of components to *render* that data. Because Astro is simply JS/TS, you can work with your data in any way you like.

As long as you have a way of importing it into your project, and passing it to the component props, Astro Snipcart will render it for you. A set of TypeScript types and interfaces are provided and these are used by the components. This way you ensure type safety and resuability.

Out of the box, Astro supports loading Markdown files and using their frontmatter YAML as product data. The markdown content can then be rendered how you choose - you might have a long form product description for example. Astro also supports loading JSON files directly as an ES import!

In the real-world E-Commerce playground demo for Astro Snipcart, Markdown files are used to define products simply because this is a lower barrier of entry and is a great starting point.

#### What about other scenarios, CMS, headless CMS, Netlify CMS, Forestry, database, CSV, Airtable, Sanity, backend API, YAML, etc?

To reiterate, Astro Snipcart does not dictate or impose *how* the data should be stored simply what the shape of the data should be when passed to it's components.

In the case of [Netlify CMS](https://www.netlifycms.org/docs/add-to-your-site/), due to it being a Git-based headless-CMS, you simply need to configure Netlify CMS to write the correct data to Markdown files - and you get a UI to go with it! It's a similar workflow with [Forestry](https://forestry.io/docs/quickstart/configure-cms/).

Finally, interacting with an API is no different to any Node based workflow.

```ts
import { SnipcartProduct, ProductMeta } from '@lloydjatkinson/astro-snipcart';

// Why an intersection type?
// Well, ProductMeta is primarily for driving Astro Snipcart Design System, which you might not need.
// Feel free to not use it!
type ProductWithMeta = SnipcartProduct & ProductMeta;
export const getProducts = async (): Promise<readonly ProductWithMeta[]> => {
    const response = await fetch('https://api.example.com/products');
    const products = await response.json();
    return products;
};
```

```astro
---
import { getProducts } from '../api/products';

const products = await getProducts();
---
<div>
    {
        products.map(product => (
            <span>{ product.name }</span>
        ))
    }
</div>
```