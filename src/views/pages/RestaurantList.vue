<template>

    <section class="py-3">
        <AdvanceSearch/>
        <a class="btn btn-secondary" href="/">Torna alla home</a>
    </section>

    <section class="py-3">
        <RestaurantCard v-for="(caterer,index) in caterers" :caterer="caterer"/>
    </section>

    <!-- <section class="py-3">
        <RestaurantCard v-for="(caterer,index) in caterers" :caterer="caterer"/>
    </section> -->

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
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            currentPage : '',
            lastPage :'',
        }
    },
    methods: {
        getCaterer() {
            axios.get(`${this.apiBaseUrl}/categories/${this.$route.params.id}`, {
            }).then((res) => {
                this.caterers = res.data.results.caterers;
                console.log("results caterer",this.caterers);
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            });

        },
        
    },
    mounted() {
        this.getCaterer();
    }
}
</script>

<style lang="scss" scoped>

</style>