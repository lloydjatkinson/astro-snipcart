const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'../packages/astro-snipcart/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
		'../astro-snipcart-design-system/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
		'./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'
	],
	theme: {
		fontFamily: {
            'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
            'serif': [...defaultTheme.fontFamily.serif],
            'mono': [...defaultTheme.fontFamily.mono]
        },
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
}
