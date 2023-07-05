<template>
    <JumboComponent />



    <!-- CATEGORIES -->

    <CategoriesComponent />

    <!-- CATEGORIES -->



    <!-- RESTAURANTS -->


    <RestaurantCard id="restaurant_card" />


    <!-- RESTAURANTS -->



    <!-- TRENDING -->

    <TrendingComponent />

    <!-- TRENDING -->



    <!-- CONTACT US -->

    <ContactComponent />

    <!-- CONTACT US -->
</template>

<script>
import JumboComponent from '../components/JumboComponent.vue';
import RestaurantCard from '../components/RestaurantCard.vue';
import CategoriesComponent from '../components/CategoriesComponent.vue';

import TrendingComponent from '../components/TrendingComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
export default {
    name: 'HomePage',
    components: {
        RestaurantCard,
        CategoryCard,
        JumboComponent,
        CategoriesComponent,
        TrendingComponent,
        ContactComponent
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;





/* CATEGORIES */



/* CATEGORIES */



/* RESTAURANT_CARD */

#restaurant_card {
    display: none;
}

/* RESTAURANT_CARD */




/* MEDIAQUERIES */





/* MEDIAQUERIES */




@media (min-width: $viewport-md) {
    #jumbo {
        h1 {
            inline-size: 300px;
            font-size: 4rem;
            font-weight: 700;
            margin-left: 50px;

            span {
                padding-left: 20px;
            }
        }

        img {
            width: 400px;
        }

        .img-box {
            width: 100%;
            height: 200px;
            position: relative;




            .burger-img {
                position: absolute;
                left: 270px;
                bottom: -154px;
                width: 365px;
            }

            .coca-img {
                position: absolute;
                left: 400px;
                bottom: -40px;
                width: 280px;

            }
        }
    }

    #restaurant_card {
        display: block;
    }


    #trending-home {
        display: none;
    }
}

@media (min-width: $viewport-xl) {
    #jumbo {
        h1 {
            inline-size: 500px;
            font-size: 6rem;
            font-weight: 700;
            margin-left: 250px;

            span {
                padding-left: 20px;
            }
        }

        .img-box {
            width: 100%;
            height: 200px;
            position: relative;

            .burger-img {
                position: absolute;
                left: 701px;
                bottom: -200px;
                width: 450px;
            }

            .coca-img {
                position: absolute;
                left: 860px;
                bottom: -60px;
                width: 366px;
            }
        }
    }



    #trending-home {
        display: none;
    }
}


/* MEDIAQUERIES */
</style>