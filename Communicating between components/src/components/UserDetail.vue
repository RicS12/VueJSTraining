<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{ switchName() }}</p>
    </div>
</template>

<script>
export default { //we use props which is short for properties set from the outside, to communicate.
    props: ['myName'],//this property is an array where each string is the property we want to manage. 
    methods: {
        //you can treat props as a VueJS object, accessing each element with "this"
        switchName() {
            return this.myName.split("").reverse().join(""); 
        }
    }
}
</script>


<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
