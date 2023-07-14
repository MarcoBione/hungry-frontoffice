<template>
    <LoaderApp v-if="loading" :key="Math.random()*10000"/>
    <div v-if="!loading">
        <section class="py-3">
            <AdvanceSearch />
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
</template>

<script>
import LoaderApp from '../components/LoaderApp.vue';
import axios from 'axios';
import { store } from '../../store';
import RestaurantCard from '../components/RestaurantCard.vue';
import AdvanceSearch from '../components/AdvanceSearch.vue';

export default {
    name: "ResturantList",
    components: {
        LoaderApp,
        RestaurantCard,
        AdvanceSearch,
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
        //Wait before remove stop loading
        setTimeout(() => {
                this.loading = false;
            }, 2000);
    }
}
</script>

<style lang="scss" scoped></style>