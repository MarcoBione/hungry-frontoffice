<template>
    <section class="py-3">
        <AdvanceSearch/>
        <a href="/">Torna alla home</a>
    </section>
    <section class="py-3">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </section>
</template>

<script>
import RestaurantCard from '../components/RestaurantCard.vue';
import AdvanceSearch from '../components/AdvanceSearch.vue';

export default {
    name : "ResturantList",
    components : {
        RestaurantCard,
        AdvanceSearch
    },

    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>