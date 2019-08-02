<template>
    <div>
        <!-- Passing props inside of component, :stock="stock" of the v-for -->
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>
