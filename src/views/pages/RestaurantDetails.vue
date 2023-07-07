<template>
    <div class="_container">
        <img :src="'http://127.0.0.1:8000/storage/' + caterer.image" :caterer="caterer">
    </div>
</template>

<script>
import axios from 'axios';



export default {
    name: 'RestaurantDetails',
    data() {
        return {
            caterer: [],
            dishesByTypology: [],
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            currentPage: '',
            lastPage: '',
        }
    },
    methods: {
        getCaterer() {
            axios.get(`${this.apiBaseUrl}/caterers/${this.$route.params.slug}`, {
            }).then((res) => {
                this.caterer = res.data.results.caterer;
                this.dishesByTypology = res.data.results.dishesByTypology;
                console.log("results caterer", this.caterer);
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            });

        },

    },
    mounted() {
        this.getCaterer();
    },
}
</script>

<style lang="scss" scoped>
._container {
    z-index: 0;
    position: absolute !important;
    height: 650px;
    min-width: 1344px;
    top: 0;
    left: 0;
    border-radius: 20px 0 0 0 !important;

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px !important;
    }
}
</style>