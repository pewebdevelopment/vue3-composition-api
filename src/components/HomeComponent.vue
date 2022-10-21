<template>
    <div>

        <h1 class="Home">
            Home
        </h1>

    </div>

    <br>

    <div class="counter">

        <button @click="decreaseValue">Decrease </button>
        The present value is: {{counter}}
        <button @click="increaseValue">Increase </button>


    </div>




</template>

<script>
export default {
    data() {

        return {

            counter: 0,

        }

    },

    methods: {
        increaseValue: function () {
            this.counter++;
        },

        decreaseValue: function () {
            this.counter--;
        }
    }


}


</script>

<style lang="scss" scoped>

</style>