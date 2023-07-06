<template>
    <section id="trending-home" class="container-fluid ">
        <div class="row flex-column align-items-center">

            <div class="col-12 my-5">
                <h1>I più ricercati oggi</h1>
            </div>

            <RestaurantCard v-for="(caterer, index) in caterers.slice(0, 3)" :caterer="caterer" :key="index" class="my-5"/>

        </div>
    </section>
</template>

<script>

import RestaurantCard from './RestaurantCard.vue';
import axios from 'axios';

export default {
    name: 'TrendingComponent',
    components: {
        RestaurantCard
    },
    data() {
        return {
            caterers: [],
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        getData(numPage) {
            axios.get(`${this.apiBaseUrl}/caterers`, {
            }).then((res) => {
                this.caterers = res.data.results;
                console.log(this.caterers);
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            });

        }
    },
    mounted() {
        this.getData();
    }




}
</script>

<style lang="scss" scoped>
#trending-home {

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    }

    /* #restaurant_card {
        &:hover {
            scale: 1.2;
            transition: 1s;
        }
    } */
}
</style>