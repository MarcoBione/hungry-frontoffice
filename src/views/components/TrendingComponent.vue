<template>
    <section id="trending-home" class="container-fluid ">
        <div class="row flex-column align-items-center">
            <div class="col-12 my-5">
                <h1>I più ricercati oggi</h1>
            </div>
            <RestaurantCard class="my-5" />
        </div>
        <div class="d-flex flex-column my-5">
            <a href="" class="_button text-uppercase">mostra altro</a>
        </div>
    </section>
</template>

<script>

import RestaurantCard from './RestaurantCard.vue';

export default {

    components: { RestaurantCard }
}
</script>

<style lang="scss" scoped>
#trending-home {

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    }
}
</style>