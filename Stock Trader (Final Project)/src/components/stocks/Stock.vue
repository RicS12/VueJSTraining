<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <!-- BINDING INPUT WITH DATA PROPERTY USING V-MODEL -->
                    <input 
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            >
                </div>
                <div class="pull-right">
                    <!-- DISABLING BUTTON IF QUANTITY IS LESS THAN 0 or QUANTITY IS NOT AN INTEGER (needs revising, can enter decimals) -->
                    <button
                            class="btn btn-success"
                            @click="buyStock"
                            :disabled="quantity <= 0 || Number.isInteger(quantity)"
                            >Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // Props being passed from Stocks.vue
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order);
            this.quantity = 0;
        }
    }
}
</script>
