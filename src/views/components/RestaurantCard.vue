<template>
    <router-link :to="{ name: 'restaurantdetails', params: { slug: caterer.slug } }">

        <!--  carta ristorante desktop -->

        <div id="restaurant_card" class="d-flex align-items-start">
            <div class="image">
                <img :src="'http://127.0.0.1:8000/storage/' + caterer.image" :alt="caterer.name">
            </div>
            <div class="d-flex flex-column w-75">
                <div class="name text-white d-flex align-items-center justify-content-center">
                    <h3 class="m-0">{{ caterer.name }}</h3>
                </div>
                <div class="info mt-4 ms-2 d-flex flex-column justify-content-between">
                    <p>{{ caterer.address }}</p>
                    <p class="delivery fs-5">Consegna a domicilio gratuita a partire da 10€</p>
                    <div class="categories" v-if="caterer.categories.length > 0">
                        <div class="d-flex">
                            <div class="px-2" :class="caterer.categories[0].class" v-if="caterer.categories.length >= 1">{{
                                caterer.categories[0].name }}</div>
                            <div class="px-2" :class="caterer.categories[1].class" id="squared"
                                v-if="caterer.categories.length >= 2">{{ caterer.categories[1].name }}</div>
                        </div>
                        <div class="px-2" :class="caterer.categories[2].class" v-if="caterer.categories.length >= 3">{{
                            caterer.categories[2].name }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- carta ristorante mobile -->

        <div id="restaurant_card_vertical" class="col-12 p-0 d-flex justify-content-center">
            <div class="my-card ">
                <div class="image-card">
                    <img :src="'http://127.0.0.1:8000/storage/' + caterer.image" alt="">
                </div>
                <div class="text-card">
                    <h2>{{ caterer.name }}</h2>
                    <div class="p-3">
                        <p>{{ caterer.address }}</p>
                        <span>Consegna a domicilio gratuita a partire da 10 €</span>
                    </div>
                    <div class="categories" v-if="caterer.categories.length > 0">
                        <div class="d-flex">
                            <div class="px-2" :class="caterer.categories[0].class" v-if="caterer.categories.length >= 1">{{
                                caterer.categories[0].name }}</div>
                            <div class="px-2" :class="caterer.categories[1].class" id="squared"
                                v-if="caterer.categories.length >= 2">{{ caterer.categories[1].name }}</div>
                        </div>
                        <div class="px-2" :class="caterer.categories[2].class" v-if="caterer.categories.length >= 3">{{
                            caterer.categories[2].name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>



export default {
    name: 'RestaurantCard',
    props: ['caterer'],

    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;

a {
    text-decoration: none;

}

#restaurant_card {
    display: none !important;
    border-radius: 10px;
    height: 200px;
    background-color: rgba(197, 199, 189, 0.428);
    position: relative;
    transition: 1s;

    &:hover {
        scale: 1.1;
        transition: 1s;
    }


    .image {
        height: 200px;
        width: 40%;

        img {
            width: 100%;
            height: 100%;
            border-radius: 10px 0 0 10px;
            object-fit: cover;
            object-position: center;
        }
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
}

#restaurant_card_vertical {


    .my-card {
        width: 100%;
        max-height: 500px;
        border-radius: 10px;
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




@media (min-width: $viewport-md) {
    a {
        text-decoration: none;
    }

    #restaurant_card {
        display: flex !important;
        border-radius: 10px;
        height: 200px;
        background-color: rgba(197, 199, 189, 0.428);
        position: relative;


        .image {
            height: 200px;
            width: 40%;

            border-radius: 60px 0 0 60px;
            background-size: cover;
            background-position: center;
        }

        .name {
            background-color: $carbon;
            border-radius: 0 10px 0 0;
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

    #restaurant_card_vertical {
        display: none !important;
    }
}

@media (min-width: $viewport-xl) {
    a {
        text-decoration: none;
    }

    #restaurant_card {
        margin: 0 150px;
        border-radius: 10px;
        height: 200px;
        background-color: rgba(197, 199, 189, 0.428);
        position: relative;
    }

    .image {
        height: 200px;
        width: 40%;

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