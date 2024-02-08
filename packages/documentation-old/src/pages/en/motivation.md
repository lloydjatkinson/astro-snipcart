---
title: Motivation
description: Introducing an Astro integration for Snipcart - Start your E-Commerce store and sell products in minutes!
layout: ../../layouts/MainLayout.astro
---

## Background

Creating an e-commerce site can have certain barriers to entry or the development process can be very time consuming. While there are many dozens of large e-commerce platforms availiable some of them might not always be the most desirable for developers to use.

Snipcart is a powerful, developer-first HTML/JavaScript shopping cart platform. You can use it to add custom e-commerce to any sites or web applications in minutes.

It's a simple matter of creating an account, generating an API key, adding the Snipcart library to your site, and then writing the correct HTML. Snipcart then uses this HTML to represent the products in your store.

Let's see how that works.

```html
<div
    class="snipcart-add-item"
    data-item-id="classic-white-ankle-socks"
    data-item-name="Classic white Ankle Socks"
    data-item-price="6"
    data-item-image="/assets/images/socks-feet-pose-white-sport-sock.jpg"
    data-item-categories="socks|clothes">
    <span>Buy</span>
</div>
```

Now let's see what's involved in defining a product with variants.

```html
<div
    class="snipcart-add-item"
    data-item-id="t-shirt-blue"
    data-item-name="T-Shirt (Blue)"
    data-item-price="18"
    data-item-image="/assets/images/t-shirt-blue.jpg"
    data-item-categories="clothes|t-shirt"
    data-item-custom1-name="Size"
    data-item-custom1-options="XS|S|M|L|XL|XXL|XXXL"
    data-item-custom1-value="XS">
    <span>Buy</span>
</div>
```

## Where Astro Snipcart comes in

The above HTML is fine for a simple e-commerce site. However, it's not very flexible. What happens when we wish to add generate this HTML using some data source - perhaps a markdown file, a JSON file, a database, or a REST API? Well, firstly we would need to build components that render the correct DOM elements and attributes. Here is a non-exhaustive list of requirements that we need to implement and test ourselves:

* Ensure correct types are used, we don't want a bug leading to a string being passed to a number field
* Present an ergonomic API for the developers to pass product information to the component - see [Falling Into The Pit Of Success](https://blog.codinghorror.com/falling-into-the-pit-of-success/)
* Build up the correct attributes in the DOM and take care of adding or removing unused attributes so that a customer is not charged incorrectly
* Provide composable and reusable components to abstract all this logic

Astro Snipcart aims to solve these problems by providing a set of components that map directly to Snipcart's API while also taking into account the above list.

We haven't even considered client side functionality yet! While Snipcart has it's own cart dialog that can be used to update a product such as it's quanity or custom variants, what if we wanted to also provide that functionality before the user adds it to their cart?

With that in mind **two fundamental units of functionality** have been discovered:

* Provide a set of Astro components that simply render HTML for Snipcart
* Provide an additional set of Astro components that also implement client side functionality to allow us to do something like:

![Astro Snipcart](/design-system-example-1.png "Astro Snipcart")

## Building an optional design system

Astro Snipcart also comes with an optional design system that provides a set of common e-commerce components. This is a great way to start building your e-commerce site. The above screenshot was built with this design system.


```tsx
<ProductWithSizePicker
    { ...product }
    sizes={ ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] }>
    <Button>
        Buy
    </Button>
</ProductWithSizePicker>
```
Hopefully this has provided the motivation and context for both Astro Snipcart and Astro Snipcart Design System!