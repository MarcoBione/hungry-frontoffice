<template>
    <section class="py-4">

        <!-- ### ordini ### -->
        <div class="border-top border-white">

            <ul class="list-group bg-transparent">

                <li class="border-0 list-group-item bg-transparent d-flex justify-content-between px-0"
                    v-for="(item, index) in storeData" :key="index">

                    <!--<div class="py-2 d-flex border-transparent j">

                    <div class="d-flex">
                        ### se presenti elementi nella "chiamata" localstorage ### 
                            
                        <div>
                            <label for="title" class="text-white-50">titolo</label>
                            <p id="title" class="m-0 text-white" >{{ item.title }}</p>
                        </div>

                        <div>
                            <label for="quantita" class="text-white-50">quantita'</label>
                            <p id="quantita" class="m-0 text-white px-2">{{ item.qta }}</p>
                        </div>

                        

                    </div>

                    ### se presenti elementi nella "chiamata" localstorage ### 
                    <button class="btn btn-outline-danger">
                        <i class="fa-solid fa-trash" ></i>
                    </button>

                </div>-->

                    <table class="table border-0">
                        <thead>
                            <tr>
                                <td class="bg-transparent text-white-50" scope="col">Ordine</td>
                                <td class="bg-transparent text-white-50" scope="col">Qtà'</td>
                                <td class="bg-transparent text-white-50" scope="col"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="bg-transparent text-white" scope="row">{{ item.name }}</th>
                                <td class="bg-transparent text-white">{{ item.quantity }}</td>
                                <td class="bg-transparent text-white">
                                    <button class="btn btn-outline-danger">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </li>

                <li class="border-0 list-group-item bg-transparent d-flex justify-content-between px-0">
                    <!-- ### se non presenti elementi nella "chiamata" localstorage ### -->
                    <p class="m-0 text-white-50">Non hai elementi nel carrello</p>
                </li>

            </ul>

        </div>

        <!-- ### comandi ###  v-if="myCart" -->
        <div>
            <a class="btn btn-success me-1">
                Conferma
            </a>
            <a class="btn btn-outline-warning">
                svuota carrello
            </a>
        </div>

    </section>
</template>

<script>
import { store } from '../../store';
export default {
    name: 'ShopItemComponent',
    data() {
        return {
            store,

        }
    },
    methods: {

        /* getId(id) {

            if (store.storeData.includes(id)) {
                return true;
            } else {
                return false
            }

        } */

    },
    mounted() {
        store.storeData = JSON.parse(localStorage.getItem('cart'));
        /* this.cartData = cartData ? JSON.parse(cartData) : []; */
        console.log(store.storeData);
        /* this.getId(store.storeData.id); */
    }
}
</script>

<style lang="scss" scoped></style>