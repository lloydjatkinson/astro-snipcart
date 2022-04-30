---
title: Introduction
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

**Welcome to Astro Snipcart Integration!**

*Create an e-commerce site with just a few lines of HTML and Astro components!*

This Astro integration contains all of the features that you need to build an e-commerce site with [Snipcart](https://snipcart.com/), including:

- ✅ **Automatic installation of the Snipcart library**
- ✅ **Zero JavaScript by default (apart from Snipcart)**
- ✅ **Astro components to define products**
- ✅ **Astro components for features such as displaying basket and total price**
- ✅ **TypeScript based product definitions surfaced as Astro component props**
- ✅ **An optional small design system providing common e-commerce components**

> What is Snipcart?
>
> Snipcart is a powerful, developer-first HTML/JavaScript shopping cart platform. You can use it to add custom e-commerce to any sites or web applications in minutes.

## Getting Started

* 



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