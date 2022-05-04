<template>
    <table class="customTable">
    <thead>
        <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
        <th>Header 4</th>
        <th>Header 5</th>
        <th>Header 6</th>
        <th>Header 7</th>
        <th>Header 8</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
        <td>Row 1, Cell 3</td>
        <td>Row 1, Cell 4</td>
        <td>Row 1, Cell 5</td>
        <td>Row 1, Cell 6</td>
        <td>Row 1, Cell 7</td>
        <td>Row 1, Cell 8</td>
        </tr>
        <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
        <td>Row 2, Cell 3</td>
        <td>Row 2, Cell 4</td>
        <td>Row 2, Cell 5</td>
        <td>Row 2, Cell 6</td>
        <td>Row 2, Cell 7</td>
        <td>Row 2, Cell 8</td>
        </tr>
        <tr>
        <td>Row 3, Cell 1</td>
        <td>Row 3, Cell 2</td>
        <td>Row 3, Cell 3</td>
        <td>Row 3, Cell 4</td>
        <td>Row 3, Cell 5</td>
        <td>Row 3, Cell 6</td>
        <td>Row 3, Cell 7</td>
        <td>Row 3, Cell 8</td>
        </tr>
        <tr>
        <td>Row 4, Cell 1</td>
        <td>Row 4, Cell 2</td>
        <td>Row 4, Cell 3</td>
        <td>Row 4, Cell 4</td>
        <td>Row 4, Cell 5</td>
        <td>Row 4, Cell 6</td>
        <td>Row 4, Cell 7</td>
        <td>Row 4, Cell 8</td>
        </tr>
    </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';


const initialState = {
    // generate product code and sku related properties

};

interface Generation {
    prefix: string;
    postfix: string;
    delimiter: '-' | '_' | '.' | '/' | ':';
    abbreviation: '3' | '4' | '5' | '6' | '7' | '8' | 'initials-3';
    removeSpaces: boolean;
}

interface Products {

}

export default defineComponent({
    name: 'SkuGenerator',

    data: (): Generation => ({
        prefix: 'P',
        postfix: '',
        delimiter: '-',
        abbreviation: '3',
        removeSpaces: true,
    }),

    computed: {
        generatedCode ()
    }
});
</script>