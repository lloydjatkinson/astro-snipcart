---
title: Introduction
description: Introducing an Astro integration for Snipcart - Start your E-Commerce store and sell products in minutes!
layout: ../../layouts/MainLayout.astro
---

![Astro Snipcart](/astro-snipcart-logo-tagline.png "Astro Snipcart")

### Welcome to Astro Snipcart Integration!

[GitHub repository](https://github.com/lloydjatkinson/astro-snipcart)

This integration is a solution for rapidly building and selling products on the web. Astro Snipcart is a free and open source e-commerce Astro integration that is built on top of the [Snipcart](https://snipcart.com) platform.

*Create an e-commerce site with just a few lines of HTML and Astro components!*

**Coming soon: Snipcart Subscription support!**

> What is Snipcart?
>
> Snipcart is a powerful, developer-first HTML/JavaScript shopping cart platform. You can use it to add custom e-commerce to any sites or web applications in minutes.

This Astro integration contains all of the features that you need to build an e-commerce site with [Snipcart](https://snipcart.com/), including:

- ✅ **Automatic installation of the Snipcart library**
- ✅ **Zero JavaScript by default (apart from Snipcart)**
- ✅ **Astro components to define products**
- ✅ **Astro components for features such as displaying basket and total price**
- ✅ **TypeScript based product definitions surfaced as Astro component props**
- ✅ **An optional small design system providing common e-commerce components**
- 🔜 **Not just products, but subscription support also!**

---
Don't forget to have a look at the **real world** fully functioning e-commerce demo site using both Astro Snipcart and Astro Snipcart Design System!

[Playground](https://astro-snipcart-playground.vercel.app/)
---

## Getting Started

[Getting Started](./getting-started)

```astro
<Product
    as="span"
    id="SKU-0003"
    name="Standard T-Shirt"
    price={ 12.99 }
    description="Every day basic t-shirt"
    image="/blue-t-shirt.jpg"
    categories={ ['cotton', 'clothes', 'blue'] }>
    <Button>
        Add
    </Button>
</Product>
```

Store and load your data from [anywhere that suits your project best!](/en/product-definition)

![Astro Snipcart](/data-storage.png "Astro Snipcart")