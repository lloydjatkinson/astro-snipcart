---
title: Design System - Introduction
description: Installing and setting up Astro Snipcart's design system
layout: ../../../layouts/MainLayout.astro
---

## Install

```sh
npm install @lloydjatkinson/astro-snipcart-design-system
```

## Configure Tailwind

```bash
npx astro add tailwind
npm i -D @tailwindcss/forms
```

Add the following to the generated `tailwind.config.cjs` file (remember, the Inter font is used by this design system and you will need to install it separately from Google Fonts - a future version of this library will ship with it by default - use the [Reference Playground](https://github.com/lloydjatkinson/astro-snipcart/blob/master/packages/playground/src/styles/fonts.css) to see how):

```diff
+++const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
+++		'node_modules/@lloydjatkinson/astro-snipcart/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
+++		'node_modules/@lloydjatkinson/astro-snipcart-design-system/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
		'./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'
	],
	theme: {
+++	    fontFamily: {
+++         'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
+++         'serif': [...defaultTheme.fontFamily.serif],
+++         'mono': [...defaultTheme.fontFamily.mono]
        },
		extend: {},
	},
+++	plugins: [
+++		require('@tailwindcss/forms'),
+++		require('@tailwindcss/typography'),
+++	],
}
```

## Don't feel ready to design?

Use the two reference example pages as a starting point!

 * A page with a [single buy button](/en/design-system/example-store-page)
 * A page with a [a size picker](/en/design-system/example-store-page-with-size-picker)

Don't forget, there is a real-world example E-commerce site [availiable here](https://astro-snipcart-playground.vercel.app). The source code for this is availiable in this repository [here](https://github.com/lloydjatkinson/astro-snipcart/tree/master/packages/playground).