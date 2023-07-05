<template>
    <a href="#">
        <div id="restaurant_card" class="d-flex align-items-start">
            <div class="image">
            </div>
            <div class="d-flex flex-column w-75">
                <div class="name text-white d-flex align-items-center justify-content-center">
                    <h3 class="m-0">Nome Ristorante </h3>
                </div>
                <div class="info mt-4 ms-2 d-flex flex-column justify-content-between">
                    <p>Via per la pizza, 19</p>
                    <p class="delivery">Consegna a domicilio con consegna gratuita a partire da 10€</p>
                    <div class="categories">
                        <div class="d-flex">
                            <div class=" bg-danger text-white px-2">Italiano</div>
                            <div class=" bg-warning text-white px-2" id="squared">Tipico</div>
                        </div>
                        <div class=" bg-success text-white">Gluten free</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div id="restaurant_card_vertical" class="col-12 p-0 d-flex justify-content-center">
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
        </div> -->
    </a>
</template>

<script>
export default {
    name: 'RestaurantCard'
}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;

a {
    text-decoration: none;
}

#restaurant_card {
    border-radius: 60px;
    height: 200px;
    background-color: rgba(197, 199, 189, 0.428);
    position: relative;
}

.image {
    height: 200px;
    width: 40%;
    background-image: url(public/images/ristoEsempio.jpg);
    border-radius: 60px 0 0 60px;
    background-size: cover;
    background-position: center;
}

.name {
    background-color: $carbon;
    border-radius: 0 60px 0 0;
    height: 50px;
}

.info {
    width: 200px;
    height: 120px;

    p {
        text-shadow: 2px 2px rgb(95, 94, 94);
        color: white;
        font-size: 25px;
    }

    .delivery {
        font-size: 14px;
    }

    .categories {
        position: absolute;
        right: 0;

        div {
            border-radius: 10px 0 0 10px;
            font-size: 20px;
            text-align: center;
            padding: 2px;
        }

        #squared {
            border-radius: 0;
        }

    }
}

@media (min-width: $viewport-md) {
    a {
        text-decoration: none;
    }

    #restaurant_card {
        border-radius: 60px;
        height: 200px;
        background-color: rgba(197, 199, 189, 0.428);
        position: relative;

    }

    .image {
        height: 200px;
        width: 40%;
        background-image: url(public/images/ristoEsempio.jpg);
        border-radius: 60px 0 0 60px;
        background-size: cover;
        background-position: center;
    }

    .name {
        background-color: $carbon;
        border-radius: 0 60px 0 0;
        height: 50px;
    }

    .info {
        width: 300px;
        height: 120px;

        p {
            text-shadow: 2px 2px rgb(95, 94, 94);
            color: white;
            font-size: 25px;
        }

        .delivery {
            font-size: 14px;
        }

        .categories {
            position: absolute;
            right: 0;

            div {
                border-radius: 10px 0 0 10px;
                font-size: 20px;
                text-align: center;
                padding: 2px;
            }

            #squared {
                border-radius: 0;
            }

        }
    }
}

@media (min-width: $viewport-xl) {
    a {
        text-decoration: none;
    }

    #restaurant_card {
        border-radius: 60px;
        height: 200px;
        background-color: rgba(197, 199, 189, 0.428);
        position: relative;
    }

    .image {
        height: 200px;
        width: 40%;
        background-image: url(public/images/ristoEsempio.jpg);
        border-radius: 60px 0 0 60px;
        background-size: cover;
        background-position: center;
    }

    .name {
        background-color: $carbon;
        border-radius: 0 60px 0 0;
        height: 50px;
    }

    .info {
        width: 300px;
        height: 120px;

        p {
            text-shadow: 2px 2px rgb(95, 94, 94);
            color: white;
            font-size: 25px;
        }

        .delivery {
            font-size: 14px;
        }

        .categories {
            position: absolute;
            right: 0;

            div {
                border-radius: 10px 0 0 10px;
                font-size: 20px;
                text-align: center;
                padding: 2px;
            }

            #squared {
                border-radius: 0;
            }

        }
    }
}
</style>