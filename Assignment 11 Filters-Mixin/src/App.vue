<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h2>Using Filters</h2>
                <p>Normal text: {{ text }}</p>
                <p>Reversed test: {{ text  | reverse }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <hr>
                <label for="counter">Input Text: </label>
                <input type="text" id="counter" v-model="counted">
                <p>Text counted: {{ counted | to-be-counted}} </p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h2>Using computed</h2>
                <p>Text to be reversed: {{ reversed }}</p>
                <p>Text counted: {{ counting }}</p>  
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
import { countedString } from './countedString';

    export default {
        mixins: [countedString],
        data() {
            return {
                text: 'Text where filters can be applied',
                counted: ''
            }
        },
        filters: {
            reverse(value) {
                return value.split('').reverse().join(''); //converting to array.reversing.joining
            }
        },
        computed: {
            reversed() {
                return this.text.split('').reverse().join('');
            }
            //Commenting this to share it with the mixin
            // counting() {
            //     return `${this.counted} (${this.counted.length})`
            // }
        }
    }
</script>

<style>
</style>
