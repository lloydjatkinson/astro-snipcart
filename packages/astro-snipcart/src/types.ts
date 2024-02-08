export interface Element {
    readonly as?: keyof HTMLElementTagNameMap;
}

export type Currency = number; // | { readonly [key: string]: string };

export type SnipcartAttributes =
    | 'id'
    | 'class'
    | 'data-item-id'
    | 'data-item-name'
    | 'date-item-image'
    | 'data-item-price'
    | `data-item-price-${string}`
    | 'data-item-description'
    | 'data-item-categories'
    | 'data-item-metadata'
    | 'data-item-url'
    | 'data-item-file-guid'
    | 'data-item-quantity'
    | 'data-item-min-quantity'
    | 'data-item-max-quantity'
    | 'data-item-quantity-step'
    | 'data-item-stackable'
    | 'data-item-shippable'
    | 'data-item-has-taxes-included'
    | 'data-item-taxes'
    | `data-item-custom${number}-name`
    | `data-item-custom${number}-options`
    | `data-item-custom${number}-type`
    | `data-item-custom${number}-required`
    | `data-item-custom${number}-placeholder`
    | `data-item-custom${number}-placeholder`
    | 'data-item-weight'
    | 'data-item-length'
    | 'data-item-height'
    | 'data-item-width'
    | 'data-item-width';

export interface SnipcartProductDimensions {
    readonly weightInGrams?: number;
    readonly lengthInCentimeters?: number;
    readonly heightInCentimeters?: number;
    readonly widthInCentimeters?: number;
}

export type SnipcartProductCustomField = {
    readonly name: string;
    readonly options: readonly string[];
    readonly value?: string;
    readonly type?: string;
    readonly required?: boolean;
    readonly placeholder?: string;
};

export type SnipcartProductStackable = 'auto' | 'never' | 'always';

export interface SnipcartProduct {
    readonly id: string;
    readonly name: string;
    readonly price: Currency;
    readonly url?: string | URL;
    readonly description?: string;
    readonly image?: string;
    readonly categories?: readonly string[];
    readonly metadata?: { readonly [key: string]: string };
    readonly fileGuid?: string;
    readonly quantity?: number;
    readonly minimumQuantity?: number;
    readonly maximumQuantity?: number;
    readonly quantityStep?: number;
    readonly dimensions?: SnipcartProductDimensions;
    readonly customFields?: readonly SnipcartProductCustomField[];
    readonly stackable?: SnipcartProductStackable;
    readonly shippable?: boolean;
    readonly taxable?: boolean;
    readonly taxes?: readonly string[];
    readonly hasTaxesIncluded?: boolean;
}

export interface ProductMeta {
    readonly currency: string;
    readonly relatedProductIds?: readonly string[];
    readonly additionalImages?: readonly string[];
    readonly originalPrice?: Currency;
    readonly variants?: readonly string[];
    readonly sizes?: readonly string[];
}

// This type potentially indicates that ProductMeta should not have related IDs on it, make a new type similar to ProductMeta?
export type SnipcartProductWithProductMeta = SnipcartProduct &
    Omit<ProductMeta, 'relatedProductIds'>;
