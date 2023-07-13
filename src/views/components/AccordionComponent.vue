<template>
    <div class="accordion" :id="'accordion' + tipology.tipologies.replace(' ', '')" v-if="tipology.tipologies">
        <div class="accordion-item">

            <!-- ### accordion title ### -->
            <div class="accordion-header">
                <h2 class="text-center text-white text-capitalize">{{ tipology.tipologies }}</h2>
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapseOne' + tipology.tipologies.replace(' ', '')" aria-expanded="true"
                    :aria-controls="'#collapseOne' + tipology.tipologies.replace(' ', '')">
                </button>
            </div>

            <!-- ### accordion dinamic fill ### -->
            <div :id="'collapseOne' + tipology.tipologies.replace(' ', '')" class="accordion-collapse collapse show"
                :data-bs-parent="'#accordion' + tipology.tipologies.replace(' ', '')">
                <div class="accordion-body d-flex flex-column justify-content-center align-items-center gap-5">
                    <div v-for="(dish, index) in tipology.dishes"
                        class="accordion_card d-flex flex-column flex-md-row text-center text-md-start align-items-center justify-content-between p-4 ps-5 pe-5">
                        <div class="info mt-3">
                            <h3 class="text-capitalize fs-3 mb-3">{{ dish.name }}</h3>
                            <p>{{ dish.description }}</p>
                            <p>{{ dish.price }} €</p>
                            <div v-if="quantity.length > 0"
                                class="d-flex flex-column flex-md-row justify-content-md-between align-items-center align-items-md-start">
                                <div class="input-group _quantity d-flex justify-content-center justify-content-md-start"
                                    :class="quantity[index].quantity <= 0 ? 'd-none' : ''">
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text">Pz</span>
                                    </div>
                                    <div class="_input-box">
                                        <input class="form-control" type="number" v-model="quantity[index].quantity" min="1"
                                            max="10">
                                    </div>
                                </div>
                                <div class="input-group  d-flex  justify-content-center ">
                                    <button @click="addToCart(dish)" class="btn"
                                        :class="quantity[index].quantity > 0 ? 'btn-warning' : 'btn-primary'">
                                        {{ quantity[index].quantity > 0 ? 'Modifica' : 'Aggiungi' }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="img-container ">
                            <img class="rounded-5 overflow-hidden" :src="'http://127.0.0.1:8000/storage/' + dish.image"
                                :alt="dish.name">
                        </div>
                    </div>
                </div>
            </div>

            <!-- ### Toast message ###  -->
            <div v-if="showToast">
                <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                    <div class="toast align-items-center text-white bg-danger border-0" role="alert" aria-live="assertive"
                        aria-atomic="true" v-if="showToast">
                        <div class="d-flex">
                            <div class="toast-body">
                                {{ toastMessage }}
                            </div>
                            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                                aria-label="Close" @click="showToast = false"></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { store } from '../../store.js';

export default {
    name: 'AccordionComponent',
    props: ['tipology', 'catererName'],

    data() {
        return {
            store,
            quantity: [],

            // toastproperties
            showToast: false,
            toastMessage: ''
        }
    },
    computed: {
        tmpStoreData() {
            return store.storeData
        }
    },
    watch: {
        tmpStoreData(newData, oldData) {
            console.log("dati aggiornati!");
            this.initialSetup();
        }
    },
    methods: {
        getIndexOfDishById(id) {
            let res = -1;
            if (store.storeData) {
                store.storeData.forEach((val, index) => {
                    if (val.id == id)
                        res = index;
                });
            }
            return res;
        },
        getQuantityFromArray(id) {
            let res = null;
            this.quantity.forEach((val, index) => {
                if (val.dish_id == id)
                    res = val;
            });
            return res;
        },
        setQuantityInArray(id, new_quantity) {
            this.quantity.forEach((val, index) => {
                console.log(this.quantity[index]);
                console.log("nuova quantità: " + new_quantity);
                if (val.dish_id == id)
                    this.quantity[index].quantity = new_quantity;
            });
        },
        addToCart(dish) {
            let array = store.storeData;
            const newOrder = { ...dish };
            if (!array || array.length <= 0 || dish.caterer_id == array[0].caterer_id) {
                if (!array)
                    array = new Array();
                let index = this.getIndexOfDishById(dish.id);
                if (index >= 0) {
                    let qty = this.getQuantityFromArray(dish.id);
                    array[index].quantity = qty.quantity;
                }
                else {
                    this.setQuantityInArray(dish.id, 1);
                    let qty = this.getQuantityFromArray(dish.id);
                    newOrder.quantity = qty.quantity;
                    array.push(newOrder);
                    store.catererName = this.catererName;
                    localStorage.setItem('catererName', store.catererName);
                }

                localStorage.setItem('cart', JSON.stringify(array));
                store.storeData = array;
            } else {
                // chiamata del toast
                this.showErrorToast("Puoi ordinare solo da un ristorante per volta!");
                console.log("puoi ordinare solo da un ristorante per volta!")
            }
        },
        // toastMessage
        showErrorToast(message) {
            this.toastMessage = message;
            this.showToast = true;
        },
        getDishFromCart(id, caterer_id) {
            let res = null;
            let array = JSON.parse(localStorage.getItem('cart'));
            if (array) {
                array.forEach((val) => {
                    if (val.caterer_id == caterer_id && val.id == id)
                        res = val;
                });
            }
            return res;
        },
        getQuantityFromCart(id, caterer_id) {
            let res = 0;
            let dish = this.getDishFromCart(id, caterer_id);
            if (dish) {
                res = dish.quantity;
            }
            return res;
        },
        getNotesFromCart(id, caterer_id) {
            let res = '';
            let dish = this.getDishFromCart(id, caterer_id);
            if (dish) {
                res = dish.notes;
            }
            return res;
        },
        initialSetup() {
            this.quantity = new Array();

            this.tipology.dishes.forEach((val, index) => {
                let obj = {
                    dish_id: val.id,
                    quantity: this.getQuantityFromCart(val.id, val.caterer_id),
                    notes: this.getNotesFromCart(val.id, val.caterer_id)
                }
                this.quantity.push(obj);
            });
        }
    },
    mounted() {
        this.initialSetup();
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as *;

.accordion-header {
    background-color: $carbon;
    position: relative;
    padding: 5px;
}

.accordion {
    --bs-accordion-border-width: 0;
    --bs-accordion-btn-focus-box-shadow: none;
}

.accordion-button {
    background-color: $carbon;
    width: 20px;
    color: white;
    margin: 0 auto;
    text-align: right !important;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 18px;
}

.accordion-button::after {
    color: white !important;
    background-image: url(https://cdn.onlinewebfonts.com/svg/img_68483.png);
    background-position: center;
    filter: invert(100%);
}

.accordion-item {
    background-color: rgba(197, 199, 189, 0.428);
}

.accordion_card {
    border-radius: 40px;
    width: 100%;
    background-color: rgba(197, 199, 189, 0.428);
    position: relative;
    color: black;

    .info {
        inline-size: 150px;
        margin: 10px;

        ._quantity {
            width: 150px !important;
            margin-bottom: 20px;

            .input-group-text {
                background-color: transparent;
                color: black;
                border-color: black;
            }

            .form-control {
                width: 60px !important;
            }



        }

        .btn-primary {
            background-color: rgba(38, 84, 38, 0.566) !important;
            border-color: black;
        }

    }

    .img-container {
        width: 160px;
        height: 130px;


        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}


@media screen and (min-width: 425px) {
    .accordion_card {
        border-radius: 40px;
        width: 100%;
        background-color: rgba(197, 199, 189, 0.428);
        position: relative;
        color: black;

        .info {
            inline-size: 300px;
            margin: 10px;

            ._quantity {
                width: 180px !important;
                margin-bottom: 20px;
            }


        }

        .img-container {
            width: 160px;
            height: 130px;


            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}



@media (min-width: $viewport-xl) {

    .accordion_card {
        border-radius: 40px;
        width: 100%;
        background-color: rgba(197, 199, 189, 0.428);
        position: relative;
        color: black;

        .info {
            inline-size: 600px;
            margin: 10px;
        }

        .img-container {
            width: 300px;
            height: 230px;


            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

}
</style>



<!-- mounted() {
    const cartData = localStorage.getItem('cart');
    this.cartData = cartData ? JSON.parse(cartData) : [];
},

methods: {
    saveCart(products) {
        localStorage.setItem('cart', JSON.stringify(products));
    }
}, -->