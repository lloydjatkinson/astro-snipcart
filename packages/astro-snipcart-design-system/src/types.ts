import { SnipcartProduct } from '@lloydjatkinson/astro-snipcart';

export interface Element {
    readonly as?: keyof HTMLElementTagNameMap;
}

export type Size = 'small' | 'medium' | 'large' | 'xlarge';

export type Direction = 'horizontal' | 'vertical';

export type Breakpoint = {
    readonly mobile?: Size;
    readonly tablet?: Size;
    readonly desktop?: Size;
};

export type ProductCard = Element &
    SnipcartProduct & {
        readonly currencySymbol: string;
        readonly image: string;
    };