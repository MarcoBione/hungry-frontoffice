<template>
    <div class="_container">
        <img :src="'http://127.0.0.1:8000/storage/' + caterer.image" :caterer="caterer">
    </div>
    <RestaurantInfo id="restaurantinfo" />
</template>

<script>
import axios from 'axios';
import RestaurantInfo from '../components/RestaurantInfo.vue'


export default {
    name: 'RestaurantDetails',
    components: {
        RestaurantInfo
    },
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
@use '../../assets/partials/variables' as*;

._container {

    z-index: 0;
    position: absolute !important;
    height: 300px;
    width: 100%;
    top: 0;
    left: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

#restaurantinfo {
    margin-top: 150px;
}


@media (min-width: $viewport-md) {
    ._container {
        z-index: 0;
        position: absolute !important;
        height: 690px;
        width: 100%;
        top: 0;
        left: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    #restaurantinfo {
        margin-top: 390px;
    }
}


@media (min-width: $viewport-xl) {
    ._container {
        z-index: 0;
        position: absolute !important;
        height: 690px;
        min-width: 1344px;
        top: 0;
        left: 0;

        img {
            width: 100%;
            height: 100%;
        }
    }

    #restaurantinfo {
        margin-top: 390px;
    }
}</style>