export const SITE = {
	title: 'Astro Snipcart',
	description: 'An Snipcart E-commerce integration for Astro',
	defaultLanguage: 'en_GB',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://astro-snipcart.vercel.app/astro-snipcart-logo-tagline.png',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'lloydjatkinson',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/lloydjatkinson/astro-snipcart/tree/master/packages/documentation/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX',
}
export const SIDEBAR = {
	en: [
		{ text: 'Astro Snipcart', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Motivation', link: 'en/motivation' },
		{ text: 'FAQ', link: 'en/faq' },
		{ text: 'Requirements', link: 'en/requirements' },
		{ text: 'Getting Started', link: 'en/getting-started' },
		{ text: 'Product Definition', link: 'en/product-definition' },
		{ text: 'Components & TypeScript', link: 'en/components-and-typescript' },

		{ text: 'Design System (optional)', header: true },
		{ text: 'Introduction', link: 'en/design-system/introduction' },
		{ text: 'Requirements', link: 'en/design-system/requirements' },
		{ text: 'Getting Started', link: 'en/design-system/getting-started' },
		{ text: 'Example simple product page', link: 'en/design-system/example-store-page' },
		{ text: 'Example product page with size picker', link: 'en/design-system/example-store-page-with-size-picker' },
		{ text: 'Components & TypeScript', link: 'en/design-system/components-and-typescript' },
		{ text: 'Playground', link: 'en/design-system/playground' },
		{ text: 'Component Explorer', link: 'en/design-system/component-explorer' },

		// { text: 'Tools', header: true },
		// { text: 'SKU/Product Code Generator', link: 'en/tools/sku-generator' }
	],
};
