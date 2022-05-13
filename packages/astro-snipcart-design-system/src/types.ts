import { SnipcartProduct } from '@lloydjatkinson/astro-snipcart';

export interface Element {
    readonly as?: keyof HTMLElementTagNameMap;
}

export type Size = 'small' | 'standard' | 'medium' | 'large' | 'xlarge';

export type Weight = 'light' | 'regular' | 'medium' | 'strong';

export type Tone = 'attention' | 'caution' | 'positive' | 'neutral';

export type Tracking = 'normal' | 'tight' | 'tighter';

export type Decoration = 'none' | 'underline' | 'line-through';

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

export interface HeaderConfiguration {
    readonly storeName: string;
}