import { SnipcartProduct } from '@lloydjatkinson/astro-snipcart';

export interface Element {
    readonly as?: keyof HTMLElementTagNameMap;
}

export type Size = 'xsmall' | 'small' | 'standard' | 'medium' | 'large' | 'xlarge';

export type Weight = 'light' | 'regular' | 'medium' | 'strong';

export type Tone =
    | 'attention'
    | 'caution'
    | 'positive'
    | 'neutral'
    | 'informational'
    | 'passive'
    | 'none';

export type Tracking = 'normal' | 'tight' | 'tighter';

export type Decoration = 'none' | 'underline' | 'line-through';

export type Direction = 'horizontal' | 'vertical';

export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type Wrap = 'none' | 'wrap' | 'reverse';

export type Breakpoint = {
    readonly mobile?: Size;
    readonly tablet?: Size;
    readonly desktop?: Size;
};

export type BreakpointExperimental<T> = {
    readonly mobile?: T;
    readonly tablet?: T;
    readonly desktop?: T;
};

export type ProductCard = Element &
    SnipcartProduct & {
        readonly currencySymbol: string;
        readonly image: string;
    };

export interface PageLink {
    readonly to: string;
    readonly label: string;
}

export interface HeaderConfiguration {
    readonly storeName: string;
    readonly links: readonly PageLink[];
}
