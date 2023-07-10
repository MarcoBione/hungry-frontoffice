<template>
    <div class="_container">

        <img :src="'http://127.0.0.1:8000/storage/' + caterer.image" :caterer="caterer">

        <div class="veil-effect">
            <img src="/public/images/JUMBO.png" alt="">
        </div>

    </div>
    <RestaurantInfo id="restaurantinfo" :caterer="caterer" />
    <AccordionComponent v-for="(tipology, index) in dishesByTipology" :tipology="tipology" />
</template>

<script>
import axios from 'axios';
import RestaurantInfo from '../components/RestaurantInfo.vue';
import AccordionComponent from '../components/AccordionComponent.vue';


export default {
    name: 'RestaurantDetails',
    components: {
        RestaurantInfo,
        AccordionComponent
    },
    data() {
        return {
            caterer: [],
            dishesByTipology: [],
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
                console.log("results caterer", this.caterer);
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            });

        },
        getDishType() {
            axios.get(`${this.apiBaseUrl}/caterers/${this.$route.params.slug}`, {
            }).then((res) => {
                this.dishesByTipology = res.data.results.dishesByTipologies;
                console.log("results dishesByTipology", this.dishesByTipology);
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            });

        },


    },
    mounted() {
        this.getCaterer();
        this.getDishType();
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

    .veil-effect {
        position: absolute;
        z-index: 5000;
        height: 300px;
        width: 100%;
        top: 0;
        left: 0;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            scale: 1.2;


        }
    }
}

#restaurantinfo {
    margin-top: 150px;
}



@media screen and (min-width: 425px) {

    #restaurantinfo {
        margin-top: 90px;
    }

}


@media (min-width: $viewport-md) {
    ._container {
        z-index: 0;
        position: absolute !important;
        height: 500px;
        width: 100%;
        top: 0;
        left: 0;


        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }


        .veil-effect {
            position: absolute;
            z-index: 5000;
            height: 500px;
            width: 100%;
            top: 0;
            left: 0;
            overflow: hidden;


            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                scale: 1.2;
            }
        }
    }




    #restaurantinfo {
        margin-top: 200px;
    }

}


@media (min-width: $viewport-xl) {
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
        }

        .veil-effect {
            position: absolute;
            z-index: 5000;
            height: 690px;
            width: 100%;
            top: 0;
            left: 0;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                scale: 1.2;
                object-fit: cover;


            }
        }
    }

    #restaurantinfo {
        margin-top: 390px;
    }
}
</style>