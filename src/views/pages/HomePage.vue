<template>
    <section id="jumbo" class="container-fluid flex-md-row my-5 ">
        <div class="row flex-column flex-md-row ">
            <div class="col-12 ">
                <h1>Are you <span>Hungry?</span></h1>
            </div>
            <div class="col-12 img-box ">
                <img class="burger-img" src="/images/callToActionHamburger.png" alt="">
                <img class="coca-img" src="/images/callToActionCocaCola.png" alt="">
            </div>
            <div class="col-12 d-md-flex">
                <a href="" class="_button text-uppercase my-5">ordina ora</a>
            </div>
        </div>
    </section>
    <section id="categories-home" class="container-fluid ">
        <div class="row flex-md-row justify-content-md-evenly flex-column align-items-center">
            <div class="col-12 ">
                <h1>Di cosa hai voglia?</h1>
            </div>
            <div class="col-12 col-md-5 p-0">
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
            </div>
            <div class="col-12 col-md-5 p-0">
                <div class="my-card ">
                    <div class="image-card">
                        <img src="/images/Categories/categoryPizza.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column my-5">
            <a href="" class="_button text-uppercase">mostra altro</a>
        </div>
    </section>
    <RestaurantCard />
    <section id="trending-home" class="container-fluid ">
        <div class="row flex-column align-items-center">
            <div class="col-12 ">
                <h1>I più ricercati oggi</h1>
            </div>
            <div class="col-12 p-0 d-flex justify-content-center">
                <div class="my-card ">
                    <div class="image-card">
                        <img src="/images/collabora.jpg" alt="">
                    </div>
                    <div class="text-card ">
                        <h2>nome ristorante</h2>
                        <p>Via per la piazza, 19</p>
                        <span>Consegna a domicilio con spedizione gratuita a partire da 10 €</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column my-5">
            <a href="" class="_button text-uppercase">mostra altro</a>
        </div>
    </section>
    <section id="contact-us" class="container-fluid ">
        <div class="row flex-column align-items-center">
            <div class="col-12 ">
                <h1>Lavora con noi</h1>
            </div>
            <div class="col-12 p-0 d-flex justify-content-center">
                <div class="my-card ">
                    <div class="image-card ">
                        <img src="/images/rider.jpg" alt="">
                    </div>
                    <div class="text-card ">
                        <h2>rider</h2>
                    </div>
                </div>
            </div>
            <div class="col-12 p-0 d-flex justify-content-center">
                <div class="my-card ">
                    <div class="image-card ">
                        <img src="/images/collabora.jpg" alt="">
                    </div>
                    <div class="text-card ">
                        <h2>ristoranti</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
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

    img {
        width: 200px;
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

#trending-home {
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    }

    .my-card {
        width: 100%;
        height: 300px;
        border-radius: 30px;
        overflow: hidden;
        background-color: #d7d1bd6c;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin: 20px 0;

        .image-card {
            height: 170px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        h2 {
            text-align: center;
            background-color: #282727;
            color: white;
        }

        /* .text-card {
        } */
    }
}

#contact-us {
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    }

    .my-card {
        width: 100%;
        height: 300px;
        border-radius: 30px;
        overflow: hidden;
        background-color: #d7d1bd6c;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin: 20px 0;


        .image-card {
            height: 200px;

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

        /* .text-card {
        } */
    }
}


/* mediaquery */


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


    #trending-home {
        display: none;
    }
}
</style>