<template>
    <div>
        <p>Server Status: {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>


<script>
export default {
    data: function() {
        return {
            status: 'Critical'
        }
    },
    methods: {
        changeStatus() { //using ES6 syntax
            this.status = 'Normal';
        }
    }
}
</script>

<style>

</style>