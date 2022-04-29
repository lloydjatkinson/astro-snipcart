mini design system goals

two themes, one minimilaist and clean, the other more colourful and playful

goals:

-   not to have an extensive design system
-   have a design system with "essential" bare minimum (plus a couple of nice to have) components for a developer to setup an astro ecommerce site with snipcart
-   some light weight interactivty where time allows

requirements:

-   a single homepage/product store page layout per theme
    -   need a typography component
        -   need a title component
        -   need a paragraph component
    -   need a description component
-   a single product page layout
-   a button component per theme that can be used for anything, but primarly to add the wrapping product with
-   a "variant" component to allow a user to pick a variant (may just constrain this to colour for mvp) and the add button will do the correct thing
-   a component to render a table of snipcart custom fields or maybe with dd/dt/dl
-   a product card per theme
-   a product grid to abstract grids for developers
-   a flex box component to abstract flex for developers
-   a component to display product features
-   a product price component

nice to have:

-   slot inside Snipcart setup component to allow some proof of concept customisation of snipcart checkout
-   some hero/feather icons?
-   subscriptions
