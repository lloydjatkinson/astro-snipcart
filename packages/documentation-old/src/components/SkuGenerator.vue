<template>
    <div class="scroll">
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Categories</th>
                <th>Dimensions</th>
                <th>Custom Fields</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(product) in products"
                :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.categories.join(', ') }}</td>
                <td>{{ product.dimensions.widthInCentimeters }}cm {{ product.dimensions.heightInCentimeters }}cm {{ product.dimensions.lengthInCentimeters }}cm {{ product.dimensions.weightInGrams }}g</td>
                <td>{{ product.customFields }}</td>
            </tr>
        </tbody>
        </table>
    </div>

    <div class="scroll">
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>SKU / Product Code</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(product) in productsWithSkuProductCode"
                :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.sku }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { SnipcartProduct } from '@lloydjatkinson/astro-snipcart';

interface Generation {
    idPrefix: string;
    idPostfix: string;
    delimiter: '-' | '_' | '.' | '/' | ':';
    abbreviation: number | 'full' | 'initials';
    casing: 'upper' | 'lower';
    removeSpaces: boolean;
    initialNumber: number;
    paddingZeros: number;
}

interface ProductWithSkuProductCode {
    readonly name: string;
    readonly id: string;
    readonly sku: string;
}

const initialState = {
    generation: {
        prefix: 'P',
        postfix: 'x',
        delimiter: '-',
        abbreviation: '3',
        removeSpaces: true,
    },
    products: []
}

export default defineComponent({
    name: 'SkuGenerator',

    data: (): {
        generation: Generation,
        products: SnipcartProduct[],
    } => ({
        generation: {
            idPrefix: 'P',
            idPostfix: 'X',
            delimiter: '-',
            abbreviation: 4,
            casing: 'upper',
            removeSpaces: true,
            initialNumber: 1,
            paddingZeros: 3,
        },
        products: []
    }),

    created () {
        for (let i = 0; i < 10; i++) {
            this.products.push({
                id: `${i}`,
                name: `Cotton T-Shirt ${i}`,
                description: `Product ${i} description`,
                price: Math.floor(Math.random() * 100),
                image: `https://picsum.photos/400/600?image=${Math.floor(Math.random() * 100)}`,
                categories: ['Category 1', 'Category 2', 'Category 3'],
                dimensions: {
                    widthInCentimeters: Math.floor(Math.random() * 100),
                    heightInCentimeters: Math.floor(Math.random() * 100),
                    lengthInCentimeters: Math.floor(Math.random() * 100),
                    weightInGrams: Math.floor(Math.random() * 100),
                }
            });
        };
    },

    computed: {
        productsWithSkuProductCode (): readonly ProductWithSkuProductCode[] {
            return this.products.map((product, index) => {
                const {
                    prefix,
                    postfix,
                    delimiter,
                    abbreviation,
                    removeSpaces,
                } = this.generation;

                const {
                    id,
                    name,
                    description,
                    price,
                    image,
                    categories,
                    dimensions,
                } = product;

                const generation = this.generation;

                
                const generateName = ({ generation, product }: { generation: Generation, product: SnipcartProduct }): string => {
                    // if generation abbreviation is a number then return that otherwise if it is 'full' use the whole string otherwise if it is 'initials' then take the initials of the string and also cnvert to upper or lowercase depending on the casing property
                    const abbreviation = typeof generation.abbreviation === 'number'
                        ? product.name.slice(0, generation.abbreviation)
                        : generation.abbreviation === 'full'
                            ? product.name
                            : generation.abbreviation === 'initials'
                                ? product.name.split(/[\s,-/]+/).map((name) => name[0]).join('')
                                : '';

                    // if the casing property is 'upper' then convert the abbreviation to uppercase otherwise if it is 'lower' then convert the abbreviation to lowercase
                    
                    const cased = generation.casing === 'upper'
                        ? abbreviation.toUpperCase()
                        : abbreviation.toLowerCase();



                    return cased;
                };

                const generateId = ({ generation, product, index }: { generation: Generation, product: SnipcartProduct, index: number }): string => {
                    const initialNumber = generation.initialNumber;
                    const paddingZeros = generation.paddingZeros;

                    const id = (index + initialNumber).toString().padStart(paddingZeros, '0');
                    return `${generation.idPrefix}${id}${generation.idPostfix}`;
                };

                const sku = [
                    generateId({ generation, product, index }),
                    generateName({ generation, product }),
                ].join(delimiter);

                return {
                    id,
                    name,
                    sku,
                };
            })
        }
    }
});
</script>

<style scoped>
.scroll {
    height: 50vh;
    overflow-x: auto;
}
</style>