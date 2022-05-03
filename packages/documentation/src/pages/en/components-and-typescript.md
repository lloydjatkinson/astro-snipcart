---
title: Components
description: Availiable components
layout: ../../layouts/MainLayout.astro
---

## TypeScript

### Interfaces/Types

```ts
import {
    SnipcartProduct,
    SnipcartProductDimensions,
    SnipcartProductCustomField,
    SnipcartAttributes
} from '@lloydjatkinson/astro-snipcart';
```

```ts
export interface SnipcartProductDimensions {
    readonly weightInGrams?: number;
    readonly lengthInCentimeters?: number;
    readonly heightInCentimeters?: number;
    readonly widthInCentimeters?: number;
}

export type SnipcartProductCustomField = {
    readonly name: string;
    readonly options: readonly string[];
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
    readonly image?: string | URL;
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
```

## Components

### SnipcartSetup

Used to install the Snipcart library.

 * Requires the environment variable `PUBLIC_SNIPCART_API_KEY` to be set.
 * Must be inserted into the `<head>`, such as in a base layout component.

```astro
---
import { SnipcartSetup } from '@lloydjatkinson/astro-snipcart/astro';
---
```

### CartCheckout

Used to trigger the opening of the Snipcart dialog.

 * Slotted content will automatically trigger opening.

```astro
---
import { CartCheckout } from '@lloydjatkinson/astro-snipcart/astro';
---

<CartCheckout>
    <button>Open basket</button>
</CartCheckout>
```

### CustomerSignIn

Used to allow a customer to login or signup.

 * The account is managed by Snipcart.
 * Must be enabled in the Snipcart dashboard. Default is to allow guests only.
 * Does nothing if allow guests only is enabled.

```astro
---
import { CartCheckout } from '@lloydjatkinson/astro-snipcart/astro';
---

<CustomerSignIn>
    <button>Login</button>
</CustomerSignIn>
```

### CartItemsCount

Used to render the count of total items in the cart.

 * Snipcart will render the value.

```astro
---
import { CartItemsCount } from '@lloydjatkinson/astro-snipcart/astro';
---

<span>
    You have <CartItemsCount /> items in your cart.
</span>
```

### CartTotalPrice

Used to render the total price of the items in the cart.

 * Snipcart will render the value.

```astro
---
import { CartTotalPrice } from '@lloydjatkinson/astro-snipcart/astro';
---

<span>
    You have £<CartItemsCount />  worth of items in your cart.
</span>
```

### Product

Used to define a product that is added to the cart when the user interacts with the component.

 * This is a renderless component. That is, it does not visually render anything other than the slotted content and the appropriate Snipcart `data` attributes.
 * Clicking this component triggers the adding of a product to the cart.
 * Snipcart looks for the existence of this component with the appropriate `data` attributes and values as part of it's order validation (Snipcart can also use a JSON returning API for this).

```astro
---
import { CartTotalPrice } from '@lloydjatkinson/astro-snipcart/astro';
---

<span>
    You have £<CartItemsCount />  worth of items in your cart.
</span>
```