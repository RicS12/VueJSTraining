<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selected='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selected='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selected='appRed'">Load Red Template</button>
                <hr>
                <component :is="selected">
                    <h2 slot="blue">{{ blueMessage}}</h2>
                    <h2 slot="green"> {{ greenMessage }}</h2>
                    <h2 slot="red">{{ redMessage }}</h2>
                </component>
                <!-- Displaying information from the parent to the child without using props and dynamic components -->
                <!-- <app-blue>
                    <h2 slot="blue">{{ blueMessage}}</h2>
                </app-blue>
                <app-green>
                    <h2 slot="green"> {{ greenMessage }}</h2>
                </app-green>
                <app-red>
                    <h2 slot="red">{{ redMessage }}</h2>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selected: 'appBlue',
                blueMessage: 'Hello this is Blue, like the sky',
                greenMessage: 'Hello this is Green, like a grassfield',
                redMessage: 'Hello this is Red, like lava'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
