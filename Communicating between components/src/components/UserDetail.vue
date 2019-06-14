<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>

    </div>
</template>

<script>
import { eventBus } from '../main';

export default { //we use props which is short for properties set from the outside, to communicate.
    // props: ['myName'],//this property is an array where each string is the property we want to manage. 
    props: {
        //props validation, you use object instead of array
        myName: {
            type: String,
            // required: true //with this, if you don't pass the property component won't work
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        //you can treat props as a VueJS object, accessing each element with "this"
        switchName() {
            return this.myName.split("").reverse().join(""); 
        },
        resetName() {
            this.myName = 'Max';
            this.$emit('nameWasReset', this.myName); //this emits to the parent component that the reference changed
        },
    },
    //using bus event
     created() {
        eventBus.$on('ageWasEdited', (age)=> {
            this.userAge = age;
         });
    }
}
</script>


<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
