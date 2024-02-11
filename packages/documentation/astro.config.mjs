import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Astro Snipcart',
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://plausible.io/js/script.outbound-links.js',
						'data-domain': 'astro-snipcart.vercel.app',
						defer: true,
					},
				},
			],
			social: {
				github: 'https://github.com/lloydjatkinson/astro-snipcart',
				mastodon: 'https://mastodon.social/@lloydjatkinson',
				openCollective: 'https://opencollective.com/lloyd-atkinson-open-collective',
			},
			sidebar: [
				{
					label: 'Introduction',
					link: '/introduction',
				},
				{
					label: 'Motivation',
					link: '/motivation',
				},
				{
					label: 'Guides',
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{
					// 		label: 'Get started',
					// 		autogenerate: { directory: 'guides' },
					// 	},
					// ],
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Design System',
					badge: 'Optional',
					autogenerate: { directory: 'design-system' },
					items: [
						{
							label: 'Introduction',
							link: '/design-system/introduction',
						},
						{
							label: 'Getting Started',
							link: '/design-system/getting-started',
						},
						{
							label: 'Requirements',
							link: '/design-system/requirements',
						},
						{
							label: 'Components & TypeScript',
							link: '/design-system/components-and-typescript',
						},
						{
							label: 'Playground / Live Demo',
							link: '/design-system/playground',
						},
						{
							label: 'Component Explorer',
							link: '/design-system/component-explorer',
							badge: { text: 'WIP', variant: 'note' }
						},
						{
							label: 'Examples',
							items: [
								{
									label: 'Store Page',
									link: '/design-system/examples/example-store-page',
								},
								{
									label: 'Store Page with Size Picker',
									link: '/design-system/examples/example-store-page-size-picker',
								},
							]
						},
					]
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
		}),
	],
});
