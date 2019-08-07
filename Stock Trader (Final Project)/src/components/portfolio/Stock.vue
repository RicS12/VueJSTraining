<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}</small>
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
                            @click="sellStock"
                            :disabled="quantity <= 0 || Number.isInteger(quantity)"
                            >Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'; 

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.placeSellOrder(order);
            this.quantity = 0;

        }
    }
}
</script>