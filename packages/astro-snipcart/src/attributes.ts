import type { SnipcartProductDimensions, SnipcartProductCustomField, SnipcartProduct } from './types';

const buildDelimitedCategories = (categories: readonly string[]): string | undefined =>
    categories.length === 0 ? undefined : categories.join('|');

const buildFormattedMetadata = (metadata: { [key: string]: string }): string =>
    JSON.stringify(metadata);

export const buildDimensionsAttributes = (dimensions: SnipcartProductDimensions) => {
    if (!dimensions) {
        return {};
    }

    const { weightInGrams, lengthInCentimeters, heightInCentimeters, widthInCentimeters } =
        dimensions;

    return {
        ...(weightInGrams && {
            [`data-item-weight`]: weightInGrams,
        }),
        ...(lengthInCentimeters && {
            [`data-item-length`]: lengthInCentimeters,
        }),
        ...(heightInCentimeters && {
            [`data-item-height`]: heightInCentimeters,
        }),
        ...(widthInCentimeters && {
            [`data-item-width`]: widthInCentimeters,
        }),
    };
};

export const buildCustomFieldAttributes = (customFields: readonly SnipcartProductCustomField[]) => {
    return Object.assign(
        {},
        ...customFields.map((customField, index) => {
            const { name, options, value, type, required, placeholder } = customField;
            const oneBasedIndex = index + 1;

            return {
                [`data-item-custom${oneBasedIndex}-name`]: name,
                ...(options && {
                    [`data-item-custom${oneBasedIndex}-options`]: options.join('|'),
                }),
                ...(value && {
                    [`data-item-custom${oneBasedIndex}-value`]: value,
                }),
                ...(type && {
                    [`data-item-custom${oneBasedIndex}-type`]: type,
                }),
                ...(required && {
                    [`data-item-custom${oneBasedIndex}-required`]: required,
                }),
                ...(placeholder && {
                    [`data-item-custom${oneBasedIndex}-placeholder`]: placeholder,
                }),
            };
        })
    );
};

export const buildAttributes = (snipcartProduct: SnipcartProduct) => {
    const {
        id,
        name,
        price,
        url,
        description,
        image,
        categories = [],
        metadata,
        fileGuid,
        quantity,
        minimumQuantity,
        maximumQuantity,
        quantityStep,
        dimensions,
        customFields = [],
        stackable,
        shippable,
        taxable,
        taxes,
        hasTaxesIncluded,
    } = snipcartProduct;

    return {
        'data-item-id': id,
        'data-item-name': name,
        'data-item-price': price,
        'data-item-url': url,
        'data-item-image': image,
        'data-item-description': description,
        'data-item-categories': buildDelimitedCategories(categories),
        'data-item-metadata': buildFormattedMetadata(metadata!),
        'data-item-file-guid': fileGuid,
        'data-item-quantity': quantity,
        'data-item-minimum-quantity': minimumQuantity,
        'data-item-maximum-quantity': maximumQuantity,
        'data-item-quantity-step': quantityStep,
        'data-item-stackable': stackable,
        'data-item-shippable': shippable,
        'data-item-taxable': taxable,
        'data-item-taxes': taxes,
        'data-item-has-taxes-included': hasTaxesIncluded,
        ...buildCustomFieldAttributes(customFields),
        ...buildDimensionsAttributes(dimensions!),
    };
};
