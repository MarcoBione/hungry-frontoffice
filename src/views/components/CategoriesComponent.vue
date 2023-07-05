<template>
    <section id="categories-home" class="container-fluid ">
        <div class="row flex-md-row justify-content-md-evenly flex-column align-items-center">
            <div class="col-12 ">
                <h1>Di cosa hai voglia?</h1>
            </div>
            <CategoryCard />
        </div>
        <div class="d-flex flex-column my-5">
            <a href="/restaurantlist" class="_button text-uppercase">mostra altro</a>
        </div>
    </section>
</template>

<script>

import CategoryCard from '../components/CategoryCard.vue';

export default {
    name: 'CategoriesComponent',
    components: {
        CategoryCard
    }


}
</script>

<style lang="scss" scoped>
#categories-home {
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;


    }
}
</style>