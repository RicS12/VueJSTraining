<template>
    <div>
        <app-server-status></app-server-status>
                <!-- <app-server-status v-for="server in 5">this works but gives an error in the IDE</app-server-status> -->

    </div>
</template>


<script>
import ServerStatus from './ServerStatus.vue';
export default {
    components: {
        'app-server-status': ServerStatus
    }
}
</script>

<style>

</style>

