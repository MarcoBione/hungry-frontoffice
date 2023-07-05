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
            <div class="col-12 col-md-5 p-0">
                <a href="/restaurantlist">
                    <div class="my-card ">
                        <div class="image-card">
                            <img src="/images/Categories/categoryPizza.png" alt="">
                        </div>
                    </div>
                </a>
            </div>
            <!-- <div class="col-12 col-md-5 p-0">
                <div class="my-card ">
                    <div class="image-card">
                        <img src="/images/Categories/categoryPizza.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-5 p-0">
                <div class="my-card ">
                    <div class="image-card">
                        <img src="/images/Categories/categoryPizza.png" alt="">
                    </div>
                </div>
            </div> -->
        </div>
        <div class="d-flex flex-column my-5">
            <a href="" class="_button text-uppercase">mostra altro</a>
        </div>
    </section>

    <!-- CATEGORIES -->



    <!-- RESTAURANTS -->

    <section id="restaurant_card">
        <RestaurantCard />
    </section>

    <!-- RESTAURANTS -->



    <!-- TRENDING -->

    <section id="trending-home" class="container-fluid ">
        <div class="row flex-column align-items-center">
            <div class="col-12">
                <h1>I più ricercati oggi</h1>
            </div>
            <div class="col-12 p-0 d-flex justify-content-center">
                <div class="my-card ">
                    <div class="image-card">
                        <img src="/images/collabora.jpg" alt="">
                    </div>
                    <div class="text-card">
                        <h2>nome ristorante</h2>
                        <div class="p-3">
                            <p>Via per la piazza, 19</p>
                            <span>Consegna a domicilio con spedizione gratuita a partire da 10 €</span>
                        </div>
                        <div class="categories">
                            <div class="d-flex">
                                <div class=" bg-danger text-white px-2">Italiano</div>
                                <div class=" bg-warning text-white px-2" id="squared">Tipico</div>
                            </div>
                            <div class=" bg-success px-2 text-white">Gluten free</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column my-5">
            <a href="" class="_button text-uppercase">mostra altro</a>
        </div>
    </section>

    <!-- TRENDING -->



    <!-- CONTACT US -->

    <section id="contact-us" class="container-fluid my-5">
        <div class="row flex-column flex-lg-row align-items-center justify-content-evenly">
            <div class="col-12 ">
                <h1>Lavora con noi</h1>
            </div>
            <div class="col-12 col-md-6 col-lg-4 p-0 d-flex justify-content-center">
                <div class="my-card d-flex flex-column">
                    <div class="image-card ">
                        <img src="/images/rider.jpg" alt="">
                    </div>
                    <div class="card-body d-flex align-items-center justify-content-center">
                        <p class="fs-1 mb-0">Rider </p>
                        <img class="ms-2" src="/images/fast-delivery.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <div class="my-card d-flex flex-column">
                    <div class="image-card ">
                        <img src="/images/collabora.jpg" alt="">
                    </div>
                    <div class="card-body d-flex align-items-center justify-content-center">
                        <p class="fs-1 mb-0">Ristoranti</p>
                        <img class="utensils ms-2" src="/images/utensils-solid.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACT US -->
</template>

<script>

import RestaurantCard from '../components/RestaurantCard.vue';
export default {
    name: 'HomePage',
    components: {
        RestaurantCard
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

    .my-card {
        width: 100%;
        height: 100%;
        border-radius: 30px;
        overflow: hidden;
        background-color: #d7d1bd6c;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin: 20px 0;

        .image-card {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            padding: 10px 0;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
}

/* CATEGORIES */



/* RESTAURANT_CARD */

#restaurant_card {
    display: none;
}

/* RESTAURANT_CARD */



/* TRENDING */

#trending-home {

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    }

    .my-card {
        width: 100%;
        max-height: 500px;
        border-radius: 30px;
        overflow: hidden;
        background-color: #d7d1bd6c;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin: 20px 0;
        padding-bottom: 30px;
        position: relative;

        .image-card {

            height: 170px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;

            }
        }

        .text-card {
            h2 {
                text-transform: uppercase;
                text-align: center;
                background-color: #282727;
                color: white;
                font-size: 1.3rem;
                padding: 5px 0;
            }

            p {
                font-size: 1.5rem;
                text-shadow: 2px 2px rgb(95, 94, 94);
                color: white;
            }

            span {
                text-shadow: 2px 2px rgb(95, 94, 94);
                color: white;
            }



            .categories {
                display: flex;
                justify-content: center;
                margin-top: 20px;

                div {
                    border-radius: 10px 10px 10px 10px;
                    font-size: 20px;
                    text-align: center;

                    margin: 2px;
                }

                #squared {
                    border-radius: 10px;
                }

            }


        }
    }
}

/* TRENDING */



/* CONTACT US */

#contact-us {
    padding: 40px 0;

    h1 {
        margin-bottom: 30px;
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    }

    .my-card {
        width: 100%;
        height: 450px;
        border-radius: 30px;
        overflow: hidden;
        background-color: #d7d1bd6c;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin: 20px 0;


        .image-card {
            height: 350px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        h2 {
            text-align: center;
            padding-top: 30px;
            text-transform: capitalize;

        }

        .card-body {
            img {
                width: 50px;
            }

            .utensils {
                width: 30px;
            }

        }
    }
}

/* CONTACT US */




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