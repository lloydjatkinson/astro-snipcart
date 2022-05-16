import { PageLink } from '@lloydjatkinson/astro-snipcart-design-system';

export const headerPageLinks: PageLink[] = [
    { label: 'Products', to: '/products' },
    { label: 'Sales', to: '/sales' },
    { label: 'About', to: '/About' },
];

export const footerPageLinks: PageLink[] = [
    { to: '/products', label: 'Products' },
    { to: '/sale', label: 'Sale' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/jobs', label: 'Jobs' },
];