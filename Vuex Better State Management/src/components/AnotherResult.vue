<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        computed: {
            //you have to install:npm install --save babel-preset-stage-2 to use "..."mapGetters
            //I think @yarn add babel-preset-stage-2@ works too
            //this allows to also use computed properties together with mapGetters
            ...mapGetters([
            'doubleCounter', 
            'stringCounter' 
            ])


            //OLD WAY WITHOUT USING MAPGGETERS
            // counter() {
            //     return this.$store.getters.doubleCounter;
            // },
            // clicks() {
            //     return this.$store.getters.stringCounter;
            // }
        }
    }
</script>