<template>
    <div>

        <h1 class="Home">
            Home
        </h1>

    </div>

    <br>

    <div class="counter">


        <div class="flex justify-content-center">
            <button @click="decreaseValue">Decrease </button>
            <h1>{{counter}}</h1>
            <button @click="increaseValue">Increase </button>
        </div>

    </div>




</template>

<script setup>

import { ref } from 'vue';

const counter = ref(0);

const increaseValue = () => {

            counter.value++;
   }

     const decreaseValue = () => {

         counter.value--;
     }



// export default {
// }
    
    // setup() {

    //     const counter = ref(0);

    //     const increaseValue = () => {

    //         counter.value++;
    //     }

    //     const decreaseValue = () => {

    //         counter.value--;
    //     }

    //     return {
    //         counter,
    //         increaseValue,
    //         decreaseValue
    //     }

    // }





    // Options API 
    // 
    // // data() {

    //     return {

    //         counter: 0,

    //     }

    // },

    // methods: {
    //     increaseValue: function () {
    //         this.counter++;
    //     },

    //     decreaseValue: function () {
    //         this.counter--;
    //     }
    // }





</script>

<style lang="scss" scoped>

</style>