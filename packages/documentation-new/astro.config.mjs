import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Astro Snipcart',
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
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
		}),
	],
});
