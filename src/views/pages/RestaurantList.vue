<template>
    <section class="py-3">
        <AdvanceSearch/>
        <a href="/">Torna alla home</a>
    </section>
    <section class="py-3" v-if="caterers">
        <RestaurantCard v-for="(caterer,index) in caterers" :caterer="caterer"/>
    </section>
</template>

<script>
import axios from 'axios';

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
            caterers : [],
            categories:[],
            apiBaseUrl: 'http://127.0.0.1:8000/api',
        }
    },
    methods: {
        // getCaterers(numPage) {
        //     axios.get(`${this.apiBaseUrl}/caterers`, {
        //         params: {
        //             "page": numPage
        //         }
        //     }).then((res) => {
        //         this.caterers = res.data.results.data;
        //         console.log(this.caterers);
        //         this.currentPage = res.data.results.current_page;
        //         this.lastPage = res.data.results.last_page;
        //     });

        // },

        getCategories(numPage) {
            axios.get(`${this.apiBaseUrl}/categories/1`, {
                params: {
                    "page": numPage
                }
            }).then((res) => {
                this.categories = res.data.results.caterers;
                console.log(this.categories);
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            });

        }
    },
    mounted() {
        //this.getCaterers();
        this.getCategories();
    }
}
</script>

<style lang="scss" scoped>

</style>