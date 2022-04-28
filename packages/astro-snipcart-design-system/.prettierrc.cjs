/** @type {import("@types/prettier").Options} */
module.exports = {
    printWidth: 100,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    useTabs: false,
    plugins: ['./node_modules/prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
        {
            files: ['.*', '*.json', '*.md', '*.toml', '*.yml'],
            options: {
                useTabs: false,
            },
        },
    ],
};
