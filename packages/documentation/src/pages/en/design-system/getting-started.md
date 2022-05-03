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
```

Add the following to the generated `tailwind.config.cjs` file:

```diff
module.exports = {
	content: [
+++		'node_modules/@lloydjatkinson/astro-snipcart/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
+++		'node_modules/@lloydjatkinson/astro-snipcart-design-system/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
		'./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {},
	},
	plugins: [],
}

```