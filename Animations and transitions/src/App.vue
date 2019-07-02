<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <!-- You only animate 1 element with transition as you can only show 1 at a time -->
                <transition name="fade">
                    <!-- you can also use v-show instead of v-if, but reminder that v-show doesn't remove -->
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <!-- By adding "type", even if the length of the transition is longer than the animation, as animation ends earlier and dictates the length, transition also ends. I.e: animation lasts 1s, transition 3s. When 1s passes, this animation ends-->
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style>
/* This is attached for 1 frame at the beginning */
    .fade-enter {
        opacity: 0;
    }
/* This is where the animation truly takes place after the 1 frame */
    .fade-enter-active {
        transition: opacity .5s;
    }

    .fade-leave {
        /* opacity: 1; */
    }

    .fade-leave-active {
        transition: opacity .5s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
        /* transform: translateY(20px); */
    }

    .slide-enter-active {
        animation: slide-in .5s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {
        /* no need to add because by default is already set */
    }

    .slide-leave-active {
        animation: slide-out .5s ease-out forwards;
        transition: opacity .5s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0px);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
