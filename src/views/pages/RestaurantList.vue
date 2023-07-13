<template>
    <LoaderApp v-if="loading" />
    <div v-if="!loading">
        <section class="py-3">
            <AdvanceSearch />
            <a class="btn btn-secondary" href="/">Torna alla home</a>
        </section>

        <section class="py-3">
            <div class="d-flex flex-column gap-5" v-if="!store.error">
                <RestaurantCard v-for="(caterer, index) in store.caterers" :caterer="caterer" />
            </div>
            <div v-if="store.error" class="alert alert-danger">
                {{ store.error }}
            </div>
        </section>
    </div>


    <!-- <section class="py-3">
        <RestaurantCard v-for="(caterer,index) in caterers" :caterer="caterer"/>
    </section> -->
</template>

<script>
import axios from 'axios';
import { store } from '../../store';
import RestaurantCard from '../components/RestaurantCard.vue';
import AdvanceSearch from '../components/AdvanceSearch.vue';
import LoaderApp from '../components/LoaderApp.vue'

export default {
    name: "ResturantList",
    components: {
        RestaurantCard,
        AdvanceSearch,
        LoaderApp
    },

    data() {
        return {
            store,
            loading: true
        }
    },
    methods: {
        getCaterer() {
            if(this.store.selectedCategories.length==0)
                axios.get(`${this.store.apiBaseUrl}/caterers`, {
                }).then((res) => {
                    this.store.caterers = res.data.results;
                });
        },
    },
    mounted() {
        // this.getCaterer();
        setTimeout(() => {
                this.loading = false;
            }, 2000);
    }
}
</script>

<style lang="scss" scoped></style>