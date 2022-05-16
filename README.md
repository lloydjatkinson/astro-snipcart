<h1 align="center">Welcome to astro-snipcart 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://astro-snipcart.vercel.app/en/introduction" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/lloydjatkinson" target="_blank">
    <img alt="Twitter: lloydjatkinson" src="https://img.shields.io/twitter/follow/lloydjatkinson.svg?style=social" />
  </a>
</p>

> Astro Snipcart allows developers to rapidly build E-Commerce sites using the Astro framework and the Snipcart platform. Create an e-commerce site with just a few lines of HTML and Astro components!

This Astro integration contains all of the features that you need to build an e-commerce site with [Snipcart](https://snipcart.com/), including:

- ✅ **Automatic installation of the Snipcart library**
- ✅ **Zero JavaScript by default (apart from Snipcart)**
- ✅ **Astro components to define products**
- ✅ **Astro components for features such as displaying basket and total price**
- ✅ **TypeScript based product definitions surfaced as Astro component props**
- ✅ **An optional small design system providing common e-commerce components**
- 🔜 **Not just products, but subscription support also!**

### 🏠 [Homepage](https://astro-snipcart.vercel.app/en/introduction)

### ✨ [Demo](https://astro-snipcart-playground.vercel.app/)


## Install Astro Snipcart

This provides you with a set of Astro components that allow you to define your products and enables checkout. They do not have any visual aspects, do not imply any sort of theme, and are up to you to work with. These are how your application and Snipcart interact.

```sh
npm install @lloydjatkinson/astro-snipcart
```

## (Optional) Install Astro Snipcart Design System

This builds upon (and depends upon Astro Snipcart) and provides an optional E-Commerce orientated [design system](https://www.nngroup.com/articles/design-systems-101/#:~:text=Definition%3A%20A%20design%20system%20is,using%20reusable%20components%20and%20patterns.) which you can use all or parts of as the foundation for your E-Commerce site. In fact, you can build real-world sites as shown in [this playground demo](https://astro-snipcart-playground.vercel.app/).

```sh
npm install @lloydjatkinson/astro-snipcart-design-system
```

You'll then need to follow the steps to setup Tailwind and the [design system as per the Astro Snipcart documentation](https://astro-snipcart.vercel.app/en/design-system/getting-started)

Here's a brief example of what you can do with the design system:

```tsx
<Stack
    gap={{
        mobile: 'small',
        desktop: 'large'
    }}>
    <Text
        as="h1"
        size="xlarge"
        weight="strong"
        tracking="tighter">
        I'm some styled text!
    </Text>
    <Price
        currency="GBP"
        price={ 10 }
        originalPrice={ 12 }
        size="large" />
</Stack>
```

![Astro Snipcart](packages/documentation/public//design-system-example-4.png "Astro Snipcart")

Which can be built up into real-world site designs:

![Astro Snipcart](packages/documentation/public//design-system-example-5.png "Astro Snipcart")


## Development and build

This project is a monoepo. Additionally, it uses pnpm as it's package manager. The `packages` directory is where the source is contained. 

## Install

```sh
pnpm -r i
```

## Usage

```sh
pnpm run docs
pnpm run playground
```

## Format & Lint
```sh
pnpm -r format
pnpm -r lint
```

## Run tests

```sh
pnpm -r test
```

## Author

👤 **Lloyd Atkinson**

* Website: [https://lloydatkinson.net](https://lloydatkinson.net?ref=github-astro-snipcart)
* Twitter: [@lloydjatkinson](https://twitter.com/lloydjatkinson)
* Github: [@lloydjatkinson](https://github.com/lloydjatkinson)

<!-- ## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/lloydjatkinson/astro-snipcart/issues).  -->

## Show your support

Give a ⭐️ if this project helped you!