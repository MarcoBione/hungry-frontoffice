<template>
    <div class="pt-4 container d-flex flex-column align-items-center justify-content-center gap-4 my-5">
        <h1 class="d-flex gap-3">
            <i class="fa-solid fa-basket-shopping"></i>
            <span>Ordine 5</span>
        </h1>

        <!-- <div class="d-flex gap-4 bg-dark text-light p-4 rounded-4 text-center align-items-start">

            <div class="d-flex flex-column align-items-center">
                <p class="fw-bold fs-5">Ultimo aggiornamento</p>
                <p>2023-07-06 09:27:17</p>
            </div>
            <div class="d-flex flex-column align-items-center">
                <p class="fw-bold fs-5">Stato</p>
                <p>Consegnato</p>
            </div>
        </div> -->
        <div class="d-flex p-4 justify-content-center align-items-start gap-4 flex-wrap">
            <div class="col-xl-6 col-lg-5 col-12 d-flex flex-column align-items-center">
                <div class="d-flex flex-column gap-3 justify-content-start border rounded-4 p-4">
                    <div class="d-flex gap-4">
                        <img :src="'http://127.0.0.1:8000/storage/' + caterer.image" class="img-thumbnail col-3" alt="">
                        <div class="d-flex flex-column align-items-start justify-content-start">
                            <span class="fs-5 fw-bold mb-2">{{ store.lastOrderData.order.catererName ?
                                store.lastOrderData.order.catererName : `Siamo spiacenti, questo ordine non ha piatti
                                associati
                                quindi non è
                                possibile mostrare le informazioni del ristorante dal quale si sta effettuando l'ordine!`
                            }}</span>
                            <div class="d-flex flex-column align-items-start">
                                <span>{{ caterer.address }}</span>
                                <span>{{ caterer.phone_number }}</span>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex flex-column gap-2">
                        <span class="fs-5 fw-bold">Riepilogo dell'ordine</span>
                        <div v-for="(dish, index) in store.lastOrderData.order.dishes"
                            class="d-flex gap-4 flex-column align-items-start">
                            <div class="w-100 d-flex flex-column gap-1 flex-wrap">
                                <div class="w-100 d-flex fw-bold justify-content-between align-items-center gap-4">
                                    <span>{{ dish.name }} x {{ dish.quantity }}</span>
                                    <span>{{ dish.price * dish.quantity }} €</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>

                    <div class="d-flex justify-content-between align-items-center gap-4 fs-5 fw-bold">
                        <span>Totale</span>
                        <span>{{ store.lastOrderData.order.totalPrice }} &euro;</span>
                    </div>
                </div>
            </div>

            <div class="col-xl-5 col-lg-4 col-12 d-flex flex-column gap-4">

                <div class="d-flex gap-4 align-items-start border rounded-4 p-4">
                    <i class="fa-solid fa-location-dot fs-3"></i>
                    <div class="d-flex flex-column align-items-start justify-content-start">
                        <span class="fs-5 fw-bold mb-2">Indirizzo di consegna</span>
                        <div class="d-flex flex-column align-items-start">
                            <span>{{ store.lastOrderData.userData.receiver }}</span>
                            <span>{{ store.lastOrderData.userData.address }}</span>
                        </div>
                    </div>
                </div>

                <div class="d-flex gap-4 align-items-start border rounded-4 p-4">
                    <i class="fa-regular fa-message fs-3"></i>
                    <div class="d-flex flex-column align-items-start justify-content-start">
                        <span class="fs-5 fw-bold mb-2">Le note di Marika Di Blasio</span>
                        <div class="d-flex flex-column align-items-start">
                            <span>{{ store.lastOrderData.userData.notes ? store.lastOrderData.userData.notes : `Non ha
                                lasciato nessuna nota` }}</span>
                        </div>
                    </div>
                </div>

                <div class="d-flex gap-4 align-items-start border rounded-4 p-4">
                    <i class="fa-solid fa-phone fs-3"></i>
                    <div class="d-flex flex-column align-items-start justify-content-start">
                        <span class="fs-5 fw-bold mb-2">Numero di telefono</span>
                        <div class="d-flex flex-column align-items-start">
                            <span>{{ store.lastOrderData.userData.phoneNumber }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../../store'
export default {

    data() {
        return {
            store,
            caterer: [],


        }
    },
    methods: {
        setCaterer() {
            axios.get(`${store.apiBaseUrl}/dishes/${store.lastOrderData.order.dishes[0].slug}`, {
            }).then((res) => {
                this.caterer = res.data.results.caterer;
            });
        },

    },
    mounted() {
        this.setCaterer();
        //Redirect to the home if the object with the last order data is empty
        if (!store.lastOrderData)
            this.$router.push('/');
    }
}
</script>

<style lang="scss" scoped></style>