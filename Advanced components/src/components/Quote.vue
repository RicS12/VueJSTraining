<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
        </div>
        <hr>
        <div>
            <!-- This is a default slot, by having no name, it searches for the slot with no name on parent -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
div {
    border: 1px solid lightgray;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
}

h2 {
    color: red;
}

.title {
    font-style: italic;
}
</style>
