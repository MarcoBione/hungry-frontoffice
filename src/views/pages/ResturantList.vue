<template>
    <section >
        <RestaurantCard/>
    </section>
</template>

<script>
import RestaurantCard from '../components/RestaurantCard.vue';

export default {
    name : "ResturantList",
    components : {
        RestaurantCard
    },

    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>