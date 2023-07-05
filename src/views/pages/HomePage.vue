<template>
    <!-- JUMBO -->

    <section id="jumbo" class="container-fluid flex-md-row my-5 ">
        <div class="row flex-column flex-md-row ">
            <div class="col-12 ">
                <h1>Are you <span>Hungry?</span></h1>
            </div>
            <div class="col-12 img-box ">
                <img class="burger-img" src="/images/callToActionHamburger.png" alt="">
                <img class="coca-img" src="/images/callToActionCocaCola.png" alt="">
            </div>
            <div class="col-12 d-flex d-md-flex">
                <a href="" class="_button text-uppercase my-5">ordina ora</a>
            </div>
        </div>
    </section>

    <!-- JUMBO -->



    <!-- CATEGORIES -->

    <section id="categories-home" class="container-fluid ">
        <div class="row flex-md-row justify-content-md-evenly flex-column align-items-center">
            <div class="col-12 ">
                <h1>Di cosa hai voglia?</h1>
            </div>
            <CategoryCard/>
        </div>
        <div class="d-flex flex-column my-5">
            <a href="/restaurantlist" class="_button text-uppercase">mostra altro</a>
        </div>
    </section>

    <!-- CATEGORIES -->



    <!-- RESTAURANTS -->

    <section id="restaurant_card">
        <RestaurantCard />
    </section>

    <!-- RESTAURANTS -->



    <!-- TRENDING -->

    <TrendingComponent/>

    <!-- TRENDING -->



    <!-- CONTACT US -->

    <ContactComponent/>

    <!-- CONTACT US -->

</template>

<script>

import RestaurantCard from '../components/RestaurantCard.vue';
import CategoryCard from '../components/CategoryCard.vue';
import TrendingComponent from '../components/TrendingComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
export default {
    name: 'HomePage',
    components: {
    RestaurantCard,
    CategoryCard,
    TrendingComponent,
    ContactComponent
},
}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;


/* JUMBO */

#jumbo {


    h1 {
        inline-size: 150px;
        overflow-wrap: break-word;
        font-size: 2rem;
        font-weight: 700;

        span {
            padding-left: 20px;
        }
    }

    .img-box {
        width: 200px;
        height: 200px;
        position: relative;

        .burger-img {
            position: absolute;
            left: 45px;
            bottom: -40px;
            width: 200px;
        }

        .coca-img {
            position: absolute;
            left: 125px;
            bottom: 20px;
            width: 150px;
        }
    }
}

/* JUMBO */



/* CATEGORIES */

#categories-home {
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;


    }
}

/* CATEGORIES */



/* RESTAURANT_CARD */

#restaurant_card {
    display: none;
}

/* RESTAURANT_CARD */




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